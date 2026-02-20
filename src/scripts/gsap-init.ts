import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  gsap.globalTimeline.timeScale(100);
}

/**
 * Reveal a batch of elements with staggered fade-up on scroll.
 * Each element gets its own ScrollTrigger so it animates when it enters the viewport.
 */
export function revealBatch(selector: string, container?: string) {
  const elements = container
    ? document.querySelectorAll(`${container} ${selector}`)
    : document.querySelectorAll(selector);

  if (!elements.length) return;

  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.08,
    clearProps: 'transform,opacity',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
    },
  });
}

/**
 * Animate the repeated .page-hero pattern across interior pages.
 * Expects: .page-hero-label, h1, p inside the container.
 */
export function pageHeroReveal(containerSelector: string) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const label = container.querySelector('.page-hero-label');
  const h1 = container.querySelector('h1');
  const p = container.querySelector('p:not(.page-hero-label)');

  const targets = [label, h1, p].filter(Boolean) as Element[];
  if (!targets.length) return;

  gsap.from(targets, {
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.12,
    clearProps: 'transform,opacity',
  });
}

/**
 * Coordinated hero timeline for index.astro.
 */
export function heroTimeline() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-status', { opacity: 0, y: 20, duration: 0.6 })
    .from('.hero-title span', { opacity: 0, y: 25, duration: 0.7, stagger: 0.12 }, '-=0.3')
    .from('.hero-desc', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
    .from('.hero-buttons', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3');

  // RotatingBadge entrance (if present)
  const badge = document.querySelector('.hero-badge');
  if (badge) {
    tl.from(badge, { scale: 0.4, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1');
  }

  return tl;
}

/**
 * GSAP-powered marquee with pause-on-hover.
 */
export function marqueeAnimation(trackSelector: string, wrapSelector: string) {
  const track = document.querySelector(trackSelector) as HTMLElement;
  const wrap = document.querySelector(wrapSelector) as HTMLElement;
  if (!track) return;

  const tween = gsap.to(track, {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: 'none',
  });

  if (wrap) {
    wrap.addEventListener('mouseenter', () => gsap.to(tween, { timeScale: 0, duration: 0.5 }));
    wrap.addEventListener('mouseleave', () => gsap.to(tween, { timeScale: 1, duration: 0.5 }));
  }

  return tween;
}

/**
 * Animate a vertical line drawing with scrub-linked ScrollTrigger.
 */
export function timelineLineDraw(lineSelector: string, containerSelector: string) {
  const line = document.querySelector(lineSelector);
  if (!line) return;

  gsap.from(line, {
    scaleY: 0,
    transformOrigin: 'top',
    ease: 'none',
    scrollTrigger: {
      trigger: containerSelector,
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
    },
  });
}

/**
 * Reveal a single element with fade-up on scroll.
 */
export function revealElement(selector: string, vars?: gsap.TweenVars) {
  const el = document.querySelector(selector);
  if (!el) return;
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    clearProps: 'transform,opacity',
    scrollTrigger: { trigger: el, start: 'top 85%' },
    ...vars,
  });
}

/**
 * Cursor-following blob with GSAP quickTo for smooth tracking.
 * Hidden on touch devices and when reduced motion is preferred.
 */
export function cursorBlob(selector: string) {
  const blob = document.querySelector(selector) as HTMLElement;
  if (!blob || prefersReduced || matchMedia('(pointer:coarse)').matches) return;

  const xTo = gsap.quickTo(blob, 'left', { duration: 0.5, ease: 'power3.out' });
  const yTo = gsap.quickTo(blob, 'top', { duration: 0.5, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX - 220);
    yTo(e.clientY - 220);
  });
}

/**
 * Auto-generate side-dot navigation from sections with [data-nav-section].
 * Each dot tracks its section via ScrollTrigger.
 */
export function sideDotsNav(containerSelector: string, sectionAttr = 'data-nav-section') {
  const sections = document.querySelectorAll(`[${sectionAttr}]`);
  const container = document.querySelector(containerSelector);
  if (!sections.length || !container || sections.length < 2) return;

  sections.forEach((sec, i) => {
    const dot = document.createElement('a');
    dot.className = 'side-dot';
    dot.href = `#${sec.id}`;
    dot.setAttribute('aria-label', sec.getAttribute(sectionAttr) || `Sección ${i + 1}`);
    container.appendChild(dot);
  });

  const dots = container.querySelectorAll('.side-dot');

  sections.forEach((sec, i) => {
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (self) => {
        if (self.isActive) {
          dots.forEach(d => d.classList.remove('active'));
          dots[i]?.classList.add('active');
        }
      },
    });
  });
}

/**
 * Hero bento grid: staggered entrance only.
 * CSS handles all hover interactions — no JS mouse tracking.
 */
export function heroBento(containerSelector: string) {
  const container = document.querySelector(containerSelector) as HTMLElement;
  if (!container) return;

  const cells = container.querySelectorAll<HTMLElement>('[data-bento-cell]');
  if (!cells.length) return;

  // Staggered entrance
  gsap.fromTo(cells,
    { opacity: 0, y: 24, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.4,
      onComplete() {
        cells.forEach(c => {
          gsap.set(c, { clearProps: 'all' });
          c.classList.add('is-ready');
        });
      },
    }
  );
}

/**
 * Hero orbital floating gallery.
 * Cards orbit elliptically, drift with cursor parallax, and expand on hover.
 */
export function heroOrbital(containerSelector: string) {
  const container = document.querySelector(containerSelector) as HTMLElement;
  if (!container) return;

  const cards = container.querySelectorAll<HTMLElement>('[data-orbital-card]');
  if (!cards.length) return;

  const rect = () => container.getBoundingClientRect();
  const count = cards.length;

  // Orbital config per card: radiusX, radiusY, speed (rad/s), starting angle
  const orbits = [
    { rx: 0.32, ry: 0.28, speed: 0.3, angle: 0 },
    { rx: 0.38, ry: 0.22, speed: -0.25, angle: Math.PI * 0.5 },
    { rx: 0.25, ry: 0.35, speed: 0.35, angle: Math.PI },
    { rx: 0.35, ry: 0.3, speed: -0.2, angle: Math.PI * 1.5 },
  ];

  // Depth factor for parallax (closer cards move more)
  const depthFactors = [1, 0.7, 0.5, 0.85];

  // Mouse state
  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;

  // Smooth drift values
  const driftX = { value: 0 };
  const driftY = { value: 0 };

  // Per-card state
  const cardStates = orbits.slice(0, count).map(o => ({
    ...o,
    paused: false,
  }));

  // Position a card based on its orbital angle + drift
  function positionCard(card: HTMLElement, index: number) {
    const { rx, ry, angle } = cardStates[index];
    const bounds = rect();
    const cx = bounds.width / 2;
    const cy = bounds.height / 2;
    const cardW = card.offsetWidth;
    const cardH = card.offsetHeight;

    const depth = depthFactors[index] ?? 0.5;
    const drift = isHovering ? depth * 30 : 0; // max 30px drift

    const x = cx + Math.cos(angle) * (rx * bounds.width) + driftX.value * drift - cardW / 2;
    const y = cy + Math.sin(angle) * (ry * bounds.height) + driftY.value * drift - cardH / 2;

    gsap.set(card, { x, y });
  }

  // Continuous orbit ticker
  let lastTime = performance.now();
  function tick() {
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    cardStates.forEach((state, i) => {
      if (!state.paused) {
        state.angle += state.speed * dt;
      }
      positionCard(cards[i], i);
    });

    requestAnimationFrame(tick);
  }

  // Entrance animation
  cards.forEach((card, i) => {
    gsap.set(card, { opacity: 0, scale: 0.6 });
    positionCard(card, i);
    gsap.to(card, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: 0.6 + i * 0.15,
      ease: 'power3.out',
    });
  });

  // Start orbital motion
  requestAnimationFrame(tick);

  // Mouse tracking for parallax drift
  container.addEventListener('mousemove', (e) => {
    const bounds = rect();
    // Normalize to -1…1 from center
    mouseX = ((e.clientX - bounds.left) / bounds.width - 0.5) * 2;
    mouseY = ((e.clientY - bounds.top) / bounds.height - 0.5) * 2;
    isHovering = true;

    gsap.to(driftX, { value: mouseX, duration: 0.6, ease: 'power2.out', overwrite: true });
    gsap.to(driftY, { value: mouseY, duration: 0.6, ease: 'power2.out', overwrite: true });
  });

  container.addEventListener('mouseleave', () => {
    isHovering = false;
    gsap.to(driftX, { value: 0, duration: 0.8, ease: 'power3.out', overwrite: true });
    gsap.to(driftY, { value: 0, duration: 0.8, ease: 'power3.out', overwrite: true });
  });

  // Card hover: pause orbit + scale up
  cards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => {
      cardStates[i].paused = true;
      card.classList.add('is-focused');
      gsap.to(card, { scale: 1.3, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
    });

    card.addEventListener('mouseleave', () => {
      cardStates[i].paused = false;
      card.classList.remove('is-focused');
      gsap.to(card, { scale: 1, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
    });
  });
}

export { gsap, ScrollTrigger };
