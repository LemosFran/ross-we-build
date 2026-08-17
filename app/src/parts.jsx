import React from "react";
import { ROSSO } from "./data.js";
import { useFrameSequence, clamp as clampProgress } from "./frameSequence.js";

const DS = window.RossoMaquinariasDesignSystem_202f2f;
const { SiteHeader, Section, TabNav, Button, ArrowLink, Heading, Eyebrow, Icon, ClipPanel, Wordmark, BrandGlyph, DiagonalStripes, ScrollCue, NotchCard, TextField, InfoBlock, SiteFooter } = DS;
const R = ROSSO;

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useMedia(q) {
  const [on, set] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const m = window.matchMedia(q), h = () => set(m.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, [q]);
  return on;
}

/** Section entrance: opacity + 16px rise, once. Content is visible by default — the animation
    only ever plays forward, so a frame where IntersectionObserver never fires still reads fine. */
export function Reveal({ children, delay = 0, style, ...rest }) {
  const ref = React.useRef(null);
  const [on, set] = React.useState(false);
  React.useEffect(() => {
    if (reduced || !ref.current || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { set(true); io.disconnect(); } }, { rootMargin: "-6% 0px -8%" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} {...rest} className={(rest.className ? rest.className + " " : "") + (on ? "rv-in" : "")} style={{ animationDelay: delay + "ms", ...style }}>{children}</div>
  );
}

export const go = (hash) => (e) => {
  if (e) e.preventDefault();
  const el = document.querySelector(hash);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: reduced ? "auto" : "smooth" });
};

/** Condensed glass bar — the second nav state, revealed once the hero is behind you. */
export function StickyBar({ onMenu, narrow }) {
  const [on, set] = React.useState(false);
  React.useEffect(() => {
    // The hero is pinned to the viewport for the whole scroll-driven sequence
    // (see #hero-track), so the condensed bar should only reveal once that
    // track has fully passed — not after one fixed viewport height.
    const h = () => {
      const track = document.getElementById("hero-track");
      const threshold = track ? track.offsetHeight - window.innerHeight : window.innerHeight * 0.85;
      set(window.scrollY > threshold);
    };
    h(); window.addEventListener("scroll", h, { passive: true });
    window.addEventListener("resize", h, { passive: true });
    return () => { window.removeEventListener("scroll", h); window.removeEventListener("resize", h); };
  }, []);
  return (
    <div style={{
      position: "fixed", inset: "0 0 auto", zIndex: 60,
      background: "var(--glass-ink)", backdropFilter: "var(--blur-bar)", WebkitBackdropFilter: "var(--blur-bar)",
      boxShadow: "var(--shadow-bar)", borderBottom: "1px solid var(--border-on-ink)",
      transform: on ? "none" : "translateY(-102%)", transition: "transform var(--dur-base) var(--ease-mech)",
      pointerEvents: on ? "auto" : "none",
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, height: 68 }}>
        <a href="#top" onClick={go("#top")} aria-label="Rosso Maquinarias, ir al inicio" style={{ display: "flex" }}>
          <Wordmark size={26} tone="onInk" />
        </a>
        {narrow ? (
          <button onClick={onMenu} aria-label="Abrir menú" style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, padding: "0 4px", background: "none", border: "none", color: "var(--white)", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>
            <Icon name="align-left" size={20} />Menú
          </button>
        ) : (
          <React.Fragment>
            <nav style={{ display: "flex", gap: 28 }}>
              {R.NAV.map(([label, hash]) => (
                <a key={hash} href={hash} onClick={go(hash)} style={{ color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.07em", textTransform: "uppercase" }}>{label}</a>
              ))}
            </nav>
            <Button variant="solid" size="sm" href="#contacto" onClick={go("#contacto")} cut style={{ padding: "12px 20px" }}>Pedir cotización</Button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

/** Full-screen ink menu for narrow viewports. */
export function MobileMenu({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Menú" style={{ position: "fixed", inset: 0, zIndex: 90, background: "var(--surface-ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--dot-grid-on-ink)", backgroundSize: "var(--dot-step) var(--dot-step)" }} />
      <DiagonalStripes style={{ position: "absolute", right: -80, bottom: -110, width: 620, height: 260 }} />
      <div className="wrap" style={{ position: "relative", display: "grid", gap: 40, alignContent: "start", paddingTop: 26 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark size={30} tone="onInk" />
          <button onClick={onClose} aria-label="Cerrar menú" style={{ display: "grid", placeItems: "center", width: 48, height: 48, background: "none", border: "1px solid var(--border-on-ink)", color: "var(--white)", cursor: "pointer" }}>
            <BrandGlyph name="close" size={16} />
          </button>
        </div>
        <nav style={{ display: "grid", gap: 22, marginTop: 20 }}>
          {R.NAV.map(([label, hash]) => (
            <a key={hash} href={hash} onClick={(e) => { go(hash)(e); onClose(); }} style={{ color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1, letterSpacing: "var(--ls-display)", textTransform: "uppercase" }}>{label}</a>
          ))}
        </nav>
        <Button variant="solid" size="lg" cut href="#contacto" onClick={(e) => { go("#contacto")(e); onClose(); }} style={{ justifySelf: "start", minHeight: 56 }}>Pedir cotización</Button>
        <InfoBlock tone="onInk" label="Guardia 24/7" lines={["+54 3562 15-669015", "operaciones@rossomaquinarias.com.ar"]} />
      </div>
    </div>
  );
}

const HERO_TOTAL = 240;
const HERO_STRIDES = [40, 16, 8, 4, 2, 1];
const HERO_BEATS_THRESHOLDS = [0.10, 0.38, 0.68, 0.97];
const HERO_RAIL = [
  { label: "01 — Apoyo", line: "Estabilizadores en posición, listos para izar." },
  { label: "02 — Izaje", line: "La grúa levanta la carga con precisión." },
  { label: "03 — Avance", line: "El carretón sale con el equipo asegurado." },
];

function heroFrameSrc(isMobile) {
  const dir = isMobile ? "assets/hero-sequence/frames-mobile/" : "assets/hero-sequence/frames/";
  return (i) => dir + "frame_" + String(i + 1).padStart(4, "0") + ".webp";
}

/** Scroll-driven crane sequence: 240 frames drawn to a canvas pinned to the
    viewport, scrubbed by a 420svh invisible track (#hero-track). Ported from
    LemosFran/scroll-sequence, restyled on the Rosso design tokens. */
export function Hero({ onMenu, narrow }) {
  const isMobile = useMedia("(max-width: 820px)");
  const canvasRef = React.useRef(null);
  const heroRef = React.useRef(null);
  const trackRef = React.useRef(null);

  const [promptVisible, setPromptVisible] = React.useState(true);
  const [liveBeat, setLiveBeat] = React.useState(-1);
  const [loadPct, setLoadPct] = React.useState(0);
  const [loaderDone, setLoaderDone] = React.useState(false);

  const focus = isMobile ? { x: 0.5, y: 0.44 } : { x: 0.5, y: 0.5 };
  const src = React.useMemo(() => heroFrameSrc(isMobile), [isMobile]);

  const progressFn = React.useCallback(() => {
    const track = trackRef.current, hero = heroRef.current;
    if (!track || !hero) return 0;
    const span = track.offsetHeight - hero.offsetHeight;
    if (span <= 0) return 0;
    return clampProgress(-track.getBoundingClientRect().top / span, 0, 1);
  }, []);

  useFrameSequence({
    canvasRef, containerRef: heroRef, observeRef: trackRef,
    total: HERO_TOTAL, src, focus, strides: HERO_STRIDES, concurrency: 8, ease: 0.14,
    progress: progressFn,
    onProgress: React.useCallback((ratio) => {
      setLoadPct(Math.round(ratio * 100));
      if (ratio >= 0.22) setLoaderDone(true);
    }, []),
    onTick: React.useCallback((p) => {
      setPromptVisible(p < 0.045);
      const b = HERO_BEATS_THRESHOLDS;
      let live = -1;
      if (p >= b[0] && p < b[1]) live = 0;
      else if (p >= b[1] && p < b[2]) live = 1;
      else if (p >= b[2] && p < b[3]) live = 2;
      setLiveBeat(live);
    }, []),
  });

  return (
    <React.Fragment>
      <section id="top" ref={heroRef} className="scroll-hero" data-screen-label="Hero">
        <canvas ref={canvasRef} className="scroll-hero__canvas" role="img"
          aria-label="Una grúa despliega estabilizadores, eleva una carga y un camión avanza por el playón." />
        <noscript>
          <img className="scroll-hero__fallback" src="assets/hero-sequence/frames/frame_0120.webp" alt="Grúa elevando una carga mientras un camión avanza." />
        </noscript>

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26 }}>
          <SiteHeader tone="ink" links={narrow ? [] : R.NAV.map((n) => n[0])} menuLabel={narrow ? "Menú" : null} onMenu={onMenu}
            onLink={(label) => go((R.NAV.find((n) => n[0] === label) || [])[1] || "#top")()}
            onBrand={go("#top")} onCta={go("#contacto")} ctaLabel="Pedir cotización" />
        </div>

        <div className={"scroll-hero__copy" + (promptVisible ? "" : " is-hidden")}>
          <Eyebrow>Transporte y montaje industrial</Eyebrow>
          <Heading as="h1" size="xl" tone="ink" className="scroll-hero__title">Movemos lo que<br />nadie más mueve</Heading>
          <p className="scroll-hero__subtitle">Deslizá para ver la maniobra, paso a paso.</p>
        </div>

        <div className={"scroll-hero__scroll" + (promptVisible ? "" : " is-hidden")}>
          <ScrollCue tone="ink" />
        </div>

        <div className="scroll-hero__rail" aria-hidden={liveBeat < 0}>
          {HERO_RAIL.map((beat, i) => (
            <figure key={beat.label} className={"scroll-hero__beat" + (i === liveBeat ? " is-live" : "")}>
              <figcaption>
                <p className="scroll-hero__beat-label">{beat.label}</p>
                <p className="scroll-hero__beat-line">{beat.line}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={"scroll-hero__loader" + (loaderDone ? " is-done" : "")} aria-hidden={loaderDone}>
          <div className="scroll-hero__loader-bar"><i style={{ width: loadPct + "%" }} /></div>
          <p className="scroll-hero__loader-text">{loadPct}% · cargando secuencia</p>
        </div>
      </section>
      <div ref={trackRef} id="hero-track" className="scroll-hero-track" aria-hidden="true" />
    </React.Fragment>
  );
}

export function Services({ onQuote }) {
  const [tab, setTab] = React.useState(R.SERVICES[0].id);
  const s = R.SERVICES.find((x) => x.id === tab) || R.SERVICES[0];
  return (
    <Section id="servicios" data-screen-label="Servicios" eyebrow="Nuestros servicios" heading={<>Cuatro frentes,<br />un solo responsable</>}
      aside={<>
        <p style={{ maxWidth: 380, color: "var(--text-body)" }}>Todo con flota y personal propio: no subcontratamos el operativo ni el riesgo. Elegí el servicio y mirá la ficha técnica.</p>
        <ArrowLink href="#contacto" onClick={go("#contacto")}>Contanos qué hay que mover</ArrowLink>
      </>}>
      <Reveal>
        <TabNav items={R.SERVICES} value={tab} onChange={setTab} style={{ marginTop: -14, paddingBottom: 22, borderBottom: "1px solid var(--border-hairline)" }} />
        <div className="svc">
          <div style={{ display: "grid", gap: 24, maxWidth: 640, justifyItems: "start" }}>
            <h3 style={{ fontSize: "var(--fs-display-sm)", lineHeight: 1.1 }}>{s.title}</h3>
            <p style={{ color: "var(--text-body)", fontSize: "var(--fs-body-lg)" }}>{s.copy}</p>
            <Button variant="outline" size="md" onClick={() => onQuote(s.label)} style={{ marginTop: 6, minHeight: 48 }}>{"Cotizar " + s.label}</Button>
          </div>
          <ClipPanel tone="mint" corners={["tr"]} cut={44} style={{ padding: "30px 28px", display: "grid", gap: 18, alignContent: "start" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--text-muted)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase" }}>
              <Icon name={s.icon} size={16} />Ficha técnica
            </span>
            {s.specs.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBottom: 14, borderBottom: "1px solid rgba(32,42,51,.12)" }}>
                <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>{k}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-body-sm)", fontWeight: 600, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </ClipPanel>
        </div>
      </Reveal>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="proceso" data-screen-label="Proceso" tone="ink" pad="var(--section-y-sm)" eyebrow="Cómo trabajamos" heading={<>Nada sale a la ruta<br />sin plan firmado</>} style={{ overflow: "hidden" }}>
      <DiagonalStripes className="stripes-dec" style={{ position: "absolute", right: -70, bottom: -90, width: 520, height: 200 }} />
      <div className="steps">
        {R.STEPS.map(([n, t, c], i) => (
          <Reveal key={n} delay={i * 90} style={{ padding: "4px 30px 0", borderLeft: "1px solid var(--border-on-ink)" }}>
            <span style={{ display: "block", color: "var(--text-accent-on-ink)", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: ".1em" }}>{n}</span>
            <h3 style={{ marginTop: 16, color: "var(--text-on-ink)", fontSize: "var(--fs-title)" }}>{t}</h3>
            <p style={{ marginTop: 14, maxWidth: 320, color: "var(--text-on-ink-muted)", fontSize: "var(--fs-body)" }}>{c}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { DS, R, reduced };
