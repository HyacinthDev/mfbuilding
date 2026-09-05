import { Award, Handshake, Leaf, ShieldCheck } from "lucide-react";
import { Container, Reveal, Section } from "./ui";
export { CTA } from "./cta";

export function Why() {
  const values = [
    {
      title: "Always Deliver a Quality Product that will Stand the Test of Time",
      description: "We build with durable materials, disciplined execution, and details that hold up long after turnover.",
      Icon: Award,
      className: "md:col-span-7",
    },
    {
      title: "Always Provide the Best Example in our Industry and to the Community",
      description: "Every jobsite is a chance to lead with professionalism, respect, and responsible workmanship.",
      Icon: Handshake,
      className: "md:col-span-5",
    },
    {
      title: "Always Be Good to the Earth",
      description: "We approach each project with care for materials, waste, surroundings, and long-term impact.",
      Icon: Leaf,
      className: "md:col-span-5",
    },
    {
      title: "Always Put Safety, Accountability, and People First",
      description: "Clear communication, protected crews, and accountable leadership keep projects moving the right way.",
      Icon: ShieldCheck,
      className: "md:col-span-7",
    },
  ];

  return (
    <Section className="bg-white">
      <Container wide>
        <Reveal delay={0.02}>
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-[var(--color-muted)]">
              Values in practice
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.75rem)] leading-[1.03] tracking-[-.03em]">
              Built on People & Performance.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-12">
          {values.map(({ title, description, Icon, className }, index) => (
            <Reveal key={title} delay={0.05 + index * 0.035} className={className}>
              <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(242,195,0,.13)] md:min-h-72 md:p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)]">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="mt-14 max-w-2xl font-display text-2xl leading-[1.08] tracking-[-.03em] md:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
                  {description}
                </p>
                <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

