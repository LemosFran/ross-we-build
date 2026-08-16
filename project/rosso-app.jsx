function App() {
  const narrow = useMedia("(max-width: 940px)");
  const [menu, setMenu] = React.useState(false);
  const [service, setService] = React.useState(R.SERVICES[0].label);
  const onQuote = (label) => { setService(label); go("#contacto")(); };
  React.useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);
  return (
    <React.Fragment>
      <StickyBar narrow={narrow} onMenu={() => setMenu(true)} />
      <Hero narrow={narrow} onMenu={() => setMenu(true)} />
      <Trusted />
      <Services onQuote={onQuote} />
      <About />
      <Process />
      <Fleet />
      <Works />
      <Testimonials />
      <Contact service={service} setService={setService} />
      <SF ctaHref="#contacto" ctaLabel="Hablemos" statement={["Movemos", "lo", "pesado"]} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
