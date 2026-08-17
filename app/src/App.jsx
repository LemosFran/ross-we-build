import React from "react";
import { useMedia, R, go, StickyBar, Hero, Services, Process, MobileMenu } from "./parts.jsx";
import { Trusted, About, Fleet, Works, Testimonials, RoadSequence, Contact, SF } from "./parts-b.jsx";

export default function App() {
  const narrow = useMedia("(max-width: 940px)");
  const [menu, setMenu] = React.useState(false);
  const [service, setService] = React.useState(R.SERVICES[0].label);
  const onQuote = (label) => { setService(label); go("#contacto")(); };
  React.useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);
  return (
    <React.Fragment>
      <StickyBar narrow={narrow} onMenu={() => setMenu(true)} />
      <Hero narrow={narrow} onMenu={() => setMenu(true)} />
      {/* Everything below rides over the pinned hero once #hero-track finishes scrolling. */}
      <div className="page-overlay">
        <Trusted />
        <Services onQuote={onQuote} />
        <About />
        <Process />
        <Fleet />
        <Works />
        <Testimonials />
        <RoadSequence />
        <Contact service={service} setService={setService} />
        <SF ctaHref="#contacto" ctaLabel="Hablemos" statement={["Movemos", "lo", "pesado"]} />
      </div>
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
    </React.Fragment>
  );
}
