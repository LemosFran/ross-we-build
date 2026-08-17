import React from "react";
import { Reveal, go, R } from "./parts.jsx";
import { useFrameSequence, clamp as clampProgress } from "./frameSequence.js";

const { Section: S2, ClipPanel: CP, ArrowLink: AL, Button: Btn, Icon: Ic, NotchCard: NC, TextField: TF, InfoBlock: IB, SiteFooter: SF, DiagonalStripes: Stripes, Eyebrow: Eb } = window.RossoMaquinariasDesignSystem_202f2f;

const CLIENTS = [
  { src: "assets/logos/agroactiva.png", alt: "Agroactiva", h: 30 },
  { src: "assets/logos/arcor.png", alt: "Arcor", h: 32 },
  { src: "assets/logos/arla.png", alt: "Arla", h: 36 },
  { src: "assets/logos/sancor-seguros.png", alt: "Sancor Seguros", h: 28 },
  { src: "assets/logos/sancor.png", alt: "SanCor", h: 30 },
  { src: "assets/logos/ypf.png", alt: "YPF", h: 24 },
];

export function Trusted() {
  return (
    <section id="clientes" data-screen-label="Clientes" style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div className="wrap">
        <Reveal className="trust">
          <p className="trust-label">Confían en nosotros</p>
          <ul className="trust-row">
            {CLIENTS.map((c) => (
              <li key={c.alt}><img src={c.src} alt={c.alt} style={{ "--lh": c.h + "px" }} /></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <S2 id="nosotros" data-screen-label="Nosotros" tone="sunken" eyebrow="Nosotros" heading={<>Atendemos nosotros,<br />no un call center</>}
      aside={<>
        <p style={{ maxWidth: 380, color: "var(--text-body)" }}>Empresa familiar: la misma persona que te cotiza es la que coordina el operativo y la que te atiende si algo se corre de horario.</p>
        <AL href="#contacto" onClick={go("#contacto")}>Hablar con nosotros</AL>
      </>}>
      <div className="about">
        <Reveal className="about-fig">
          <img src="assets/photos/direccion.jpg" alt="Dirección de operaciones de Rosso Maquinarias en la oficina técnica" />
          <CP tone="mint" corners={["tr"]} cut={44} className="about-panel" style={{ padding: "22px 26px" }}>
            <IB label="Dirección de operaciones" lines={["Planificamos cada izaje y cada traslado antes de que salga el equipo."]} />
          </CP>
        </Reveal>
        <Reveal delay={90} style={{ display: "grid", gap: 26, alignContent: "start" }}>
          <p style={{ color: "var(--text-body)", fontSize: "var(--fs-body-lg)", maxWidth: 520 }}>Arrancamos con un camión y un carretón moviendo maquinaria agrícola en la zona. Hoy sumamos grúas, montajes y autoelevadores, con taller propio, operadores en relación de dependencia y los papeles al día para circular en todo el país.</p>
          <div style={{ display: "grid", gap: 0 }}>
            {R.ABOUT.map(([k, v], i) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "minmax(0,180px) minmax(0,1fr)", gap: 24, padding: "18px 0", borderTop: "1px solid var(--border-hairline)", borderBottom: i === R.ABOUT.length - 1 ? "1px solid var(--border-hairline)" : "none" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase" }}>{k}</span>
                <span style={{ color: "var(--text-body)", fontSize: "var(--fs-body-sm)" }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </S2>
  );
}

export function Fleet() {
  return (
    <S2 id="flota" data-screen-label="Flota" tone="sunken" eyebrow="Flota" heading={<>Flota propia,<br />respuesta propia</>}
      aside={<>
        <p style={{ maxWidth: 380, color: "var(--text-body)" }}>Equipos habilitados, con mantenimiento en taller propio y papeles al día. Si el trabajo pide algo distinto, lo conseguimos y lo operamos nosotros.</p>
        <AL href="#contacto" onClick={go("#contacto")}>Consultar disponibilidad</AL>
      </>}>
      <div className="g4">
        {R.FLEET.map((f, i) => (
          <Reveal key={f.name} delay={i * 70}>
            <CP tone="paper" corners={["tr"]} cut={20} bordered style={{ height: "100%", padding: "26px 24px 22px", display: "grid", gap: 20, alignContent: "start" }}>
              <h3 className="fl-title" style={{ fontSize: "var(--fs-title)", lineHeight: 1.12 }}>{f.name}</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {f.specs.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 14, paddingBottom: 11, borderBottom: "1px solid var(--border-hairline)" }}>
                    <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>{k}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-body-sm)", fontWeight: 600, textAlign: "right" }}>{v}</span>
                  </div>
                ))}
              </div>
            </CP>
          </Reveal>
        ))}
      </div>
    </S2>
  );
}

export function Works() {
  return (
    <S2 id="trabajos" data-screen-label="Trabajos" eyebrow="Trabajos" heading={<>Cada carga<br />tiene su historia</>}
      aside={<>
        <p style={{ maxWidth: 380, color: "var(--text-body)" }}>Operativos reales contados por la gente que los planificó: accesos, permisos, izajes y lo que salió distinto a lo previsto.</p>
        <AL href="#contacto" onClick={go("#contacto")}>Pedir referencias</AL>
      </>}>
      <div className="g3">
        {R.WORKS.map((w, i) => (
          <Reveal key={w.title} delay={i * 80} style={{ height: "100%" }}>
            <NC eyebrow={w.eyebrow} title={w.title} image={w.image} imageAlt={w.alt} href="#trabajos" imageHeight={380} style={{ height: "100%", display: "grid" }} />
          </Reveal>
        ))}
      </div>
    </S2>
  );
}

export const ROAD_TOTAL = 163;
function roadFrameSrc(i) { return "assets/road-sequence/frames/ezgif-frame-" + String(i + 1).padStart(3, "0") + ".jpg"; }

/** Sticky-pinned truck sequence, ported from LemosFran/scroll-sequence.
    Unlike the hero (fixed + external track), this section pins itself via
    `position: sticky` for the height of its own container. */
export function RoadSequence() {
  const canvasRef = React.useRef(null);
  const stickyRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const [ctaVisible, setCtaVisible] = React.useState(false);

  const progressFn = React.useCallback(() => {
    const section = sectionRef.current;
    if (!section) return 0;
    const span = section.offsetHeight - window.innerHeight;
    return span > 0 ? clampProgress(-section.getBoundingClientRect().top / span, 0, 1) : 0;
  }, []);

  useFrameSequence({
    canvasRef, containerRef: stickyRef, observeRef: sectionRef,
    total: ROAD_TOTAL, src: roadFrameSrc, focus: { x: 0.5, y: 0.5 }, concurrency: 6, ease: 0.14,
    progress: progressFn,
    onTick: React.useCallback((p) => setCtaVisible(p >= 0.84), []),
  });

  return (
    <section ref={sectionRef} className="road-sequence" id="road-sequence" aria-label="Secuencia de camión en carretera">
      <div ref={stickyRef} className="road-sequence__sticky">
        <canvas ref={canvasRef} className="road-sequence__canvas" role="img" aria-label="Un camión recorre una carretera." />
        <noscript>
          <img className="road-sequence__fallback" src="assets/road-sequence/frames/ezgif-frame-082.jpg" alt="Un camión en la carretera." />
        </noscript>
        <div className={"road-sequence__cta" + (ctaVisible ? " is-visible" : "")} aria-hidden={!ctaVisible}>
          <p>Tu operación también puede avanzar.</p>
          <a href="#contacto" onClick={go("#contacto")} tabIndex={ctaVisible ? 0 : -1}>Hablemos de tu próximo traslado</a>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const g = R.GOOGLE;
  const full = Math.floor(g.scoreNum), part = g.scoreNum - full;
  return (
    <S2 id="opiniones" data-screen-label="Opiniones" tone="sunken" eyebrow="Opiniones" heading={<>Nos eligen<br />y nos vuelven a llamar</>}
      aside={<>
        <p style={{ maxWidth: 380, color: "var(--text-body)" }}>Lo que dicen los que ya nos vieron trabajar: clientes de campo, de planta y de obra.</p>
        <AL href={g.href} target="_blank" rel="noopener">Ver todas las reseñas</AL>
      </>}>
      <div className="tst">
        <Reveal>
          <CP tone="mint" corners={["tr"]} cut={44} style={{ padding: "34px 32px 30px", display: "grid", gap: 16, alignContent: "start" }}>
            <Eb>Google Maps</Eb>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 76, lineHeight: .9, letterSpacing: ".005em" }}>{g.score}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--text-muted)" }}>/ 5</span>
            </div>
            <div style={{ display: "flex", gap: 6 }} role="img" aria-label={"Calificación " + g.score + " de 5 en Google Maps"}>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} style={{ width: 26, height: 8, background: i < full ? "var(--surface-accent)" : "rgba(32,42,51,.16)", backgroundImage: i === full && part ? "linear-gradient(to right,var(--surface-accent) " + Math.round(part * 100) + "%,rgba(32,42,51,.16) " + Math.round(part * 100) + "%)" : "none" }} />
              ))}
            </div>
            <p style={{ color: "var(--grey-600)", fontSize: "var(--fs-body-sm)", margin: 0 }}>Promedio sobre {g.count} reseñas verificadas de clientes en Google Maps.</p>
            <AL href={g.href} target="_blank" rel="noopener" size="sm" tone="accent">Leer las reseñas</AL>
          </CP>
        </Reveal>
        <div style={{ display: "grid" }}>
          {R.TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 80} style={{ display: "grid", gap: 14, padding: "26px 0", borderTop: i ? "1px solid var(--border-hairline)" : "none" }}>
              <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-display-sm)", lineHeight: 1.14, textTransform: "none", textWrap: "pretty" }}>{t.quote}</p>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--fs-body-sm)" }}>
                <span style={{ color: "var(--text-body)", fontWeight: 600 }}>{t.name}</span> — {t.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </S2>
  );
}

const FIELDS = [
  { id: "nombre", label: "Nombre y apellido", required: true, placeholder: "Cómo te llamás" },
  { id: "empresa", label: "Empresa", placeholder: "Opcional" },
  { id: "telefono", label: "Teléfono", required: true, placeholder: "+54 341 456-7890", type: "tel" },
  { id: "email", label: "Email", placeholder: "para enviarte la cotización", type: "email" },
];

export function Contact({ service, setService }) {
  const [v, setV] = React.useState({ nombre: "", empresa: "", telefono: "", email: "", detalle: "" });
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => { setV((s) => ({ ...s, [k]: e.target.value })); setErr((s) => ({ ...s, [k]: null })); };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!v.nombre.trim()) next.nombre = "Necesitamos tu nombre.";
    if (!v.telefono.trim()) next.telefono = "Dejanos un teléfono para llamarte.";
    if (v.detalle.trim().length < 12) next.detalle = "Contanos qué hay que mover, con lugar y peso aproximado.";
    setErr(next);
    if (Object.keys(next).length) {
      const first = document.querySelector('[data-field="' + Object.keys(next)[0] + '"] input,[data-field="' + Object.keys(next)[0] + '"] textarea');
      if (first) first.focus();
      return;
    }
    setSent(true);
  };

  const errText = (k) => err[k] ? <span role="alert" style={{ color: "var(--text-accent-on-ink)", fontSize: "var(--fs-body-sm)" }}>{err[k]}</span> : null;

  return (
    <S2 id="contacto" data-screen-label="Contacto" tone="ink" eyebrow="Contacto" heading={<>Contanos qué<br />hay que mover</>} style={{ overflow: "hidden" }}>
      <Stripes className="stripes-dec" style={{ position: "absolute", right: -90, bottom: -120, width: 560, height: 220 }} />
      <div className="contact">
        {sent ? (
          <CP tone="mint" corners={["tr"]} cut={44} style={{ padding: "44px 40px", display: "grid", gap: 18, alignContent: "start" }}>
            <span style={{ display: "grid", placeItems: "center", width: 46, height: 46, background: "var(--surface-accent)", color: "var(--white)" }}><Ic name="check" size={24} /></span>
            <h3 style={{ fontSize: "var(--fs-display-sm)" }}>Pedido recibido</h3>
            <p style={{ maxWidth: 420, color: "var(--grey-600)" }}>Te llamamos al {v.telefono} dentro de las próximas 24 horas hábiles. Si es urgente, marcá directo a la guardia: +54 3562 15-669015.</p>
            <AL href="#top" onClick={go("#top")} size="sm" tone="accent" style={{ marginTop: 8 }}>Volver al inicio</AL>
          </CP>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: "grid", gap: 20 }}>
            <div className="form2">
              {FIELDS.map((f) => (
                <div key={f.id} data-field={f.id} style={{ display: "grid", gap: 6 }}>
                  <TF tone="onInk" label={f.label} required={f.required} type={f.type} placeholder={f.placeholder} value={v[f.id]} onChange={set(f.id)} />
                  {errText(f.id)}
                </div>
              ))}
            </div>
            <label style={{ display: "grid", gap: 8 }}>
              <span style={{ color: "var(--text-on-ink-muted)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-caption)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase" }}>Servicio</span>
              <select value={service} onChange={(e) => setService(e.target.value)} style={{
                width: "100%", padding: "14px 16px", borderRadius: 0, appearance: "none",
                background: "rgba(255,255,255,.04)", border: "1px solid var(--border-on-ink)", color: "var(--text-on-ink)",
                fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", lineHeight: 1.5,
                backgroundImage: "linear-gradient(45deg,transparent 50%,var(--white) 50%),linear-gradient(135deg,var(--white) 50%,transparent 50%)",
                backgroundPosition: "calc(100% - 22px) 22px,calc(100% - 16px) 22px", backgroundSize: "6px 6px,6px 6px", backgroundRepeat: "no-repeat",
              }}>
                {R.SERVICES.map((s) => <option key={s.id} value={s.label} style={{ color: "#202a33" }}>{s.label}</option>)}
                <option value="Otro" style={{ color: "#202a33" }}>Otro / no sé todavía</option>
              </select>
            </label>
            <div data-field="detalle" style={{ display: "grid", gap: 6 }}>
              <TF tone="onInk" label="Qué hay que mover" required rows={4} placeholder="Equipo, peso aproximado, origen y destino, fecha estimada." value={v.detalle} onChange={set("detalle")} />
              {errText("detalle")}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 22, marginTop: 6 }}>
              <Btn variant="solid" size="lg" cut as="button" type="submit" style={{ minHeight: 56 }}>Pedir cotización</Btn>
              <span style={{ color: "var(--text-on-ink-muted)", fontSize: "var(--fs-body-sm)" }}>Respondemos en menos de 24 h hábiles.</span>
            </div>
          </form>
        )}
        <div style={{ display: "grid", gap: 32, alignContent: "start" }}>
          <CP tone="accent" corners={["tr"]} cut={20} style={{ padding: "24px 26px", display: "grid", gap: 8, justifyItems: "start" }}>
            <Eb tone="onInk">Guardia operativa 24/7</Eb>
            <a href="tel:+543562669015" style={{ color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, letterSpacing: ".01em" }}>+54 3562 15-669015</a>
          </CP>
          <IB tone="onInk" label="Casa central" lines={["Ruta Nacional 9 Km 285", "Rosario, Santa Fe", "Lunes a viernes, 7 a 18 h"]} />
          <IB tone="onInk" label="Administración" lines={["+54 341 456-7890", "operaciones@rossomaquinarias.com.ar"]} />
          <div style={{ height: 200, overflow: "hidden", clipPath: "polygon(0 0,calc(100% - 44px) 0,100% 44px,100% 100%,0 100%)" }}>
            <img src="assets/photos/campo-sm.jpg" alt="Vista aérea de lotes agrícolas del centro del país" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </S2>
  );
}

export { SF };
