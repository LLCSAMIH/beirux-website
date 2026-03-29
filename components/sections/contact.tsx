export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-40 md:px-12">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,229,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(0,229,255,0.6)" }}
        >
          <span
            className="inline-block h-px w-6"
            style={{ backgroundColor: "rgba(0,229,255,0.4)" }}
          />
          Start a project
          <span
            className="inline-block h-px w-6"
            style={{ backgroundColor: "rgba(0,229,255,0.4)" }}
          />
        </div>

        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let&apos;s build something.
        </h2>

        <p className="mb-12 text-lg leading-relaxed text-zinc-400">
          Tell us about your project. We respond within 24 hours.
        </p>

        <a
          href="mailto:hello@beirux.com"
          className="inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-white transition-all duration-300 hover:text-[#00e5ff] sm:text-3xl"
          style={{
            borderBottom: "1px solid rgba(0,229,255,0.3)",
            paddingBottom: "4px",
          }}
        >
          hello@beirux.com
        </a>
      </div>
    </section>
  );
}
