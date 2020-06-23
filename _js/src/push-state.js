// Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { fromEvent, merge, timer, zip } from 'rxjs';
import {
  tap,
  exhaustMap,
  map,
  mapTo,
  mergeMap,
  pairwise,
  share,
  startWith,
  switchMap,
  takeUntil,
  concatMap,
} from 'rxjs/operators';

import { animate, empty, importTemplate, webComponentsReady, fromMediaQuery } from './common';
import { CrossFader } from './cross-fader';
import { setupFLIP } from './flip';

(async () => {
  await Promise.all([
    ...('fetch' in window ? [] : [import(/* webpackChunkName: "fetch" */ './polyfills/fetch')]),
    ...('customElements' in window
      ? []
      : [import(/* webpackChunkName: "webcomponents" */ './polyfills/webcomponents')]),
    ...('animate' in Element.prototype ? [] : [import(/* webpackChunkName: "webanimations" */ 'web-animations-js')]),
    ...('IntersectionObserver' in window
      ? []
      : [import(/* webpackChunkName: "intersection-observer" */ 'intersection-observer')]),
  ]);

  await webComponentsReady;

  const NAVBAR_SEL = '#_navbar > .content > .nav-btn-bar';
  const MQ_STANDALONE = '(display-mode: standalone)';

  const DURATION = 400;
  const CROSS_FADE_DURATION = 2000;

  const FADE_OUT = [{ opacity: 1 }, { opacity: 0 }];

  const FADE_IN = [
    { opacity: 0, transform: 'translateY(-3rem)' },
    { opacity: 1, transform: 'translateY(0)' },
  ];

  const SETTINGS = {
    duration: DURATION,
    easing: 'ease-out',
  };

  function setupAnimationMain(pushStateEl) {
    pushStateEl?.parentNode?.insertBefore(importTemplate('_animation-template'), pushStateEl);
    return pushStateEl?.previousElementSibling;
  }

  function setupLoading(navbarEl) {
    navbarEl?.appendChild(importTemplate('_loading-template'));
    return navbarEl?.lastElementChild;
  }

  function setupErrorPage(main, url) {
    const { pathname } = url;
    const error = importTemplate('_error-template');
    const anchor = error?.querySelector('.this-link');
    if (anchor) {
      anchor.href = pathname;
      anchor.textContent = pathname;
    }
    main?.appendChild(error);
    return main?.lastElementChild;
  }

  function importBackButton() {
    const button = importTemplate('_back-template');
    const buttonEl = button?.children[0];
    button?.querySelector('.nav-btn')?.addEventListener('click', () => window.history.back());
    return buttonEl;
  }

  function getFlipType(el) {
    if (el?.classList.contains('flip-title')) return 'title';
    if (el?.classList.contains('flip-project')) return 'project';
    return el?.getAttribute?.('data-flip');
  }

  function animateFadeOut({ main }) {
    return animate(main, FADE_OUT, { ...SETTINGS, fill: 'forwards' }).pipe(mapTo({ main }));
  }

  function animateFadeIn({ replaceEls: [main], flipType }) {
    return animate(main, FADE_IN, SETTINGS).pipe(mapTo({ main, flipType }));
  }

  const pushStateEl = document.querySelector('hy-push-state');
  if (!pushStateEl) return;

  const drawerEl = document.querySelector('hy-drawer');
  const navbarEl = document.querySelector(NAVBAR_SEL);

  const animationMain = setupAnimationMain(pushStateEl);
  const loadingEl = setupLoading(navbarEl);

  const backBtnEl = importBackButton();
  if (navbarEl && backBtnEl) {
    const standaloneMQ = window.matchMedia(MQ_STANDALONE);
    const standalone = !!navigator.standalone || standaloneMQ.matches;
    const standalone$ = fromMediaQuery(standaloneMQ).pipe(
      map((e) => e.matches),
      startWith(standalone),
    );
    standalone$
      .pipe(
        tap((matches) => {
          if (matches) navbarEl.prepend(backBtnEl);
          else if (backBtnEl.parentNode === navbarEl) navbarEl.removeChild(backBtnEl);
        }),
      )
      .subscribe();
  }

  const fromEventX = (eventName, mapFn) =>
    fromEvent(pushStateEl, eventName).pipe(
      map(({ detail }) => detail),
      mapFn ? map(mapFn) : (_) => _,
      share(),
    );

  const start$ = fromEventX('hy-push-state-start', (detail) =>
    Object.assign(detail, { flipType: getFlipType(detail.anchor) }),
  );
  const ready$ = fromEventX('hy-push-state-ready');
  const after$ = fromEventX('hy-push-state-after');
  const progress$ = fromEventX('hy-push-state-progress');
  const error$ = fromEventX('hy-push-state-networkerror');

  const fadeOut$ = start$.pipe(
    map((context) => Object.assign(context, { main: document.getElementById('_main') })),
    tap(({ main }) => {
      main.style.pointerEvents = 'none';
    }),
    window._noDrawer && drawerEl?.classList.contains('cover')
      ? tap(() => {
          drawerEl.classList.remove('cover');
          drawerEl.parentNode?.appendChild(drawerEl);
        })
      : (_) => _,
    exhaustMap(animateFadeOut),
    tap(({ main }) => empty.call(main)),
    share(),
  );

  if (loadingEl) {
    progress$.subscribe(() => {
      loadingEl.style.display = 'flex';
    });
    ready$.subscribe(() => {
      loadingEl.style.display = 'none';
    });
  }

  const fadeIn$ = after$.pipe(
    switchMap((context) => {
      const p = animateFadeIn(context).toPromise();
      context.transitionUntil(p);
      return p;
    }),
    share(),
  );

  const flip$ = setupFLIP(start$, ready$, merge(fadeIn$, error$), {
    animationMain,
    settings: SETTINGS,
  }).pipe(share());

  start$
    .pipe(
      switchMap((context) => {
        const promise = zip(timer(DURATION), fadeOut$, flip$).toPromise();
        context.transitionUntil(promise);
        return promise;
      }),
    )
    .subscribe();

  // FIXME: Keeping permanent subscription? turn into hot observable?
  fadeOut$.subscribe();
  flip$.subscribe();

  const sidebarBg = document.querySelector('.sidebar-bg');
  if (sidebarBg) {
    const crossFader = new CrossFader(CROSS_FADE_DURATION);
    after$
      .pipe(
        switchMap(({ replaceEls: [main] }) =>
          zip(crossFader.fetchImage(main), fadeIn$).pipe(
            map(([x]) => x),
            takeUntil(start$),
          ),
        ),
        startWith([sidebarBg]),
        pairwise(),
        mergeMap(([prev, curr]) => crossFader.fade(prev, curr)),
      )
      .subscribe();
  }

  error$
    .pipe(
      switchMap(({ url }) => {
        if (loadingEl) loadingEl.style.display = 'none';

        const main = document.getElementById('_main');
        if (main) main.style.pointerEvents = '';
        empty.call(animationMain?.querySelector('.page'));
        empty.call(main);

        setupErrorPage(main, url);

        return animate(main, FADE_IN, { ...SETTINGS, fill: 'forwards' });
      }),
    )
    .subscribe();

  import(/* webpackMode: "eager" */ '@hydecorp/push-state');

  window._pushState = pushStateEl;
})();
