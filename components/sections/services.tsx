const services = [
  {
    number: "01",
    title: "Design",
    description:
      "Brand identity, product UX, marketing design. We create visual systems that are distinctive, functional, and built to last.",
    tags: ["Brand", "UI/UX", "Motion"],
  },
  {
    number: "02",
    title: "Development",
    description:
      "Full-stack web apps, marketing sites, custom tools. Fast, production-grade code on modern infrastructure.",
    tags: ["Next.js", "React", "Vercel"],
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Embed AI into your product where it actually matters. Agents, automations, and intelligent features that work.",
    tags: ["Agents", "Automation", "LLMs"],
  },
  {
    number: "04",
    title: "Growth",
    description:
      "SEO, content, performance, conversion. We don't just ship — we help you grow what we build.",
    tags: ["SEO", "Analytics", "CRO"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we do
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            End-to-end capability from zero to shipped — and beyond.
          </p>
        </div>

        {/* Service list */}
        <div className="divide-y" style={{ borderColor: "#27272a" }}>
          {services.map((s) => (
            <div
              key={s.number}
              className="group flex flex-col gap-6 py-10 transition-colors duration-200 sm:flex-row sm:items-start sm:gap-16 hover:bg-[rgba(0,229,255,0.02)]"
            >
              <span
                className="shrink-0 font-mono text-xs tracking-widest"
                style={{ color: "rgba(0,229,255,0.5)" }}
              >
                {s.number}
              </span>
              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00e5ff] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs tracking-wide"
                      style={{
                        border: "1px solid #27272a",
                        color: "#71717a",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
