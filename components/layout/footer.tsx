export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between border-t px-6 py-8 md:px-12"
      style={{ borderColor: "#27272a" }}
    >
      <span className="text-xs tracking-[0.2em] uppercase text-zinc-600">
        <span className="text-zinc-500">BEI</span>
        <span style={{ color: "rgba(0,229,255,0.5)" }}>RUX</span>
      </span>
      <span className="font-mono text-xs text-zinc-700">
        © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
