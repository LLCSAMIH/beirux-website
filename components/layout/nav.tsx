export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
      <a href="/" className="flex items-center gap-0.5 text-sm font-semibold tracking-[0.2em] uppercase">
        <span className="text-white">BEI</span>
        <span style={{ color: "#00e5ff" }}>RUX</span>
      </a>
      <a
        href="#contact"
        className="text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
      >
        Get in touch
      </a>
    </header>
  );
}
