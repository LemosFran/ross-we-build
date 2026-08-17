import React from "react";

export function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

function buildOrder(total, strides) {
  const order = [0, total - 1];
  const seen = new Uint8Array(total);
  seen[0] = 1; seen[total - 1] = 1;
  for (let s = 0; s < strides.length; s++) {
    for (let i = 0; i < total; i += strides[s]) {
      if (!seen[i]) { seen[i] = 1; order.push(i); }
    }
  }
  return order;
}

/**
 * Ports the scroll-sequence prototype's canvas-frame driver: progressive
 * stride-ordered preload, nearest-frame fallback while frames are still
 * loading, and a single rAF loop gated by IntersectionObserver visibility.
 * `progress` and `onTick`/`onProgress` are supplied by the caller so the
 * same driver can back both the pinned hero and a sticky mid-page section.
 */
export function useFrameSequence({
  canvasRef,
  containerRef,
  observeRef,
  total,
  src,
  focus = { x: 0.5, y: 0.5 },
  strides = [30, 12, 6, 3, 1],
  concurrency = 6,
  ease = 0.14,
  progress,
  onProgress,
  onTick,
}) {
  const progressRef = React.useRef(progress);
  progressRef.current = progress;
  const onProgressRef = React.useRef(onProgress);
  onProgressRef.current = onProgress;
  const onTickRef = React.useRef(onTick);
  onTickRef.current = onTick;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = {
      images: new Array(total), ready: new Uint8Array(total), count: 0,
      current: 0, drawn: -1, running: false, raf: 0,
    };

    function loadOne(i) {
      return new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          const done = () => {
            state.images[i] = img; state.ready[i] = 1; state.count++;
            onProgressRef.current && onProgressRef.current(state.count / total);
            resolve();
          };
          img.decode ? img.decode().then(done, done) : done();
        };
        img.onerror = () => { state.count++; onProgressRef.current && onProgressRef.current(state.count / total); resolve(); };
        img.src = src(i);
      });
    }

    function loadAll() {
      const queue = buildOrder(total, strides);
      let cursor = 0;
      function next() { return cursor < queue.length ? loadOne(queue[cursor++]).then(next) : Promise.resolve(); }
      return Promise.all(Array.from({ length: concurrency }, next));
    }

    function nearest(i) {
      if (state.ready[i]) return i;
      for (let d = 1; d < total; d++) {
        if (i - d >= 0 && state.ready[i - d]) return i - d;
        if (i + d < total && state.ready[i + d]) return i + d;
      }
      return -1;
    }

    function draw(index) {
      const i = nearest(index);
      if (i < 0) return false;
      const img = state.images[i];
      const cw = canvas.width, ch = canvas.height;
      if (!cw || !ch) return false;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - dw) * focus.x, (ch - dh) * focus.y, dw, dh);
      return true;
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.clientWidth, h = container.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      state.drawn = -1;
    }

    function tick() {
      const target = progressRef.current() * (total - 1);
      state.current += reduced ? (target - state.current) : (target - state.current) * ease;
      if (Math.abs(target - state.current) < 0.01) state.current = target;
      const index = Math.round(state.current);
      if (index !== state.drawn && draw(index)) state.drawn = index;
      onTickRef.current && onTickRef.current(clamp(state.current / (total - 1), 0, 1));
      state.raf = requestAnimationFrame(tick);
    }

    function start() { if (!state.running) { state.running = true; state.raf = requestAnimationFrame(tick); } }
    function stop() { state.running = false; cancelAnimationFrame(state.raf); }

    let resizeTimer;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 120); };
    window.addEventListener("resize", onResize, { passive: true });

    let io;
    const watchTarget = (observeRef && observeRef.current) || container;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => { entries[0].isIntersecting ? start() : stop(); }, { rootMargin: "100px" });
      io.observe(watchTarget);
    } else {
      start();
    }

    resize();
    loadOne(0).then(() => { resize(); draw(0); loadAll(); });

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      if (io) io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);
}
