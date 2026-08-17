import React from "react";
import { ROSSO } from "./data.js";

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
    const h = () => set(window.scrollY > window.innerHeight * 0.85);
    h(); window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
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

export function Hero({ onMenu, narrow }) {
  return (
    <section id="top" data-screen-label="Hero" style={{ position: "relative", minHeight: narrow ? "auto" : "94vh", display: "flex", flexDirection: "column", background: "var(--surface-ink)", overflow: "hidden" }}>
      <img src="assets/photos/hero-flota-marcha.jpg" alt="Carretón de Rosso Maquinarias trasladando una grúa al atardecer" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 62%" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(21,29,36,.92),rgba(21,29,36,.74) 38%,rgba(21,29,36,.42) 72%,rgba(21,29,36,.35) 100%),linear-gradient(105deg,rgba(21,29,36,.86),rgba(21,29,36,.12) 72%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "var(--dot-grid-on-ink)", backgroundSize: "var(--dot-step) var(--dot-step)" }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26 }}>
        <SiteHeader tone="onInk" links={narrow ? [] : R.NAV.map((n) => n[0])} menuLabel={narrow ? "Menú" : null} onMenu={onMenu}
          onLink={(label) => go((R.NAV.find((n) => n[0] === label) || [])[1] || "#top")()}
          onBrand={go("#top")} onCta={go("#contacto")} ctaLabel="Pedir cotización" />
      </div>
      <div className="wrap hero-body" style={{ position: "relative", zIndex: 2, flex: 1, display: "grid", alignContent: "center", gap: 26, paddingTop: 72, paddingBottom: 64 }}>
        <Reveal><Eyebrow tone="accentOnInk">Transporte y montaje industrial</Eyebrow></Reveal>
        <Reveal delay={60}>
          <Heading as="h1" size="xl" tone="onInk" style={{ lineHeight: 0.94, maxWidth: 900 }}>Movemos lo que<br />nadie más mueve</Heading>
        </Reveal>
        <Reveal delay={120}>
          <p style={{ maxWidth: 520, color: "var(--text-on-ink)", fontSize: "var(--fs-body-lg)", opacity: 0.92 }}>Carretones de 3 a 6 ejes, grúas de 25 a 120 toneladas y autoelevadores con operadores propios. Los permisos, las escoltas y el seguro de carga los gestionamos nosotros.</p>
        </Reveal>
        <Reveal delay={180} style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 8 }}>
          <Button variant="solid" size="lg" cut href="#contacto" onClick={go("#contacto")} style={{ minHeight: 56 }}>Pedir cotización</Button>
          <Button variant="outlineOnInk" size="lg" href="#servicios" onClick={go("#servicios")} style={{ minHeight: 56 }}>Ver servicios</Button>
        </Reveal>
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingBottom: 34 }}>
        <div className="hstats" style={{ borderTop: "1px solid var(--border-on-ink)" }}>
          {R.STATS.map(([n, l], i) => (
            <div key={l} style={{ padding: "22px 26px 0", borderLeft: i === 0 ? "none" : "1px solid var(--border-on-ink)" }}>
              <div style={{ color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: 1 }}>{n}</div>
              <p style={{ marginTop: 8, color: "var(--text-on-ink-muted)", fontSize: "var(--fs-body-sm)" }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
      {!narrow && <ScrollCue style={{ position: "absolute", zIndex: 3, left: "50%", bottom: 150, transform: "translateX(-50%)" }} />}
    </section>
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
