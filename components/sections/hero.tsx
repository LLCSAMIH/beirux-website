export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content — CSS fade-in on load */}
      <div
        className="relative z-10 flex flex-col items-center gap-8"
        style={{
          animation: "heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) both",
          animationDelay: "80ms",
        }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase"
          style={{ color: "#00e5ff" }}
        >
          <span
            className="inline-block h-px w-8"
            style={{ backgroundColor: "rgba(0,229,255,0.6)" }}
          />
          Digital Product Studio
          <span
            className="inline-block h-px w-8"
            style={{ backgroundColor: "rgba(0,229,255,0.6)" }}
          />
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
          Built for the{" "}
          <span
            style={{
              color: "#00e5ff",
              textShadow: "0 0 40px rgba(0,229,255,0.35)",
            }}
          >
            AI era.
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
          We design, build, and ship everything a business needs to exist and
          thrive online — strategy, design, development, and AI, all under one
          roof.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex h-12 items-center gap-2 rounded-none border border-zinc-700 px-8 text-sm font-medium tracking-widest uppercase text-white transition-all duration-200 hover:border-[#00e5ff] hover:text-[#00e5ff]"
          >
            What we do
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-none px-8 text-sm font-medium tracking-widest uppercase text-[#0a0a0a] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
            style={{ backgroundColor: "#00e5ff" }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, #0a0a0a, transparent)",
        }}
      />

    </section>
  );
}
