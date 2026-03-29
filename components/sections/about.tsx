const principles = [
  {
    label: "Ship fast",
    body: "We bias toward momentum. Prototypes become products, products become businesses.",
  },
  {
    label: "Design with intention",
    body: "Every pixel has a reason. We don't decorate — we communicate.",
  },
  {
    label: "AI-native",
    body: "We build with AI at the core, not bolted on after the fact.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div
              className="h-px w-12"
              style={{ backgroundColor: "rgba(0,229,255,0.5)" }}
            />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A studio built for what comes next.
            </h2>
            <p className="text-base leading-relaxed text-zinc-400">
              BEIRUX is a full-service digital product studio. We work with
              startups, scale-ups, and established businesses to design, build,
              and grow their digital presence.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              We're not a traditional agency. We're a small, focused team that
              moves fast, thinks in systems, and ships work we're proud of.
            </p>
          </div>

          {/* Right — principles */}
          <div className="flex flex-col divide-y" style={{ borderColor: "#27272a" }}>
            {principles.map((p) => (
              <div key={p.label} className="flex flex-col gap-2 py-8 first:pt-0">
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: "#00e5ff" }}
                >
                  {p.label}
                </span>
                <p className="text-sm leading-relaxed text-zinc-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
