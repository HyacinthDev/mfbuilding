import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Award, BadgeCheck, ChevronLeft, ChevronRight, ClipboardCheck, Construction, DraftingCompass, Handshake, HardHat, Leaf, Quote, SearchCheck, ShieldCheck, Truck, UsersRound, Zap } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { projects, services } from "../data/content";
import { VideoHero } from "./video-hero";
import { Button, Container, Reveal, Section, SectionHeader } from "./ui";
import { ProjectCard, ServiceCard } from "./cards";
import { PageShell } from "./layout";
import { CTA } from "./cta";

export function Hero() {
  return (
    <VideoHero>
      <Container wide>
        <div className="flex min-h-screen items-center justify-center py-32 text-center">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(3.25rem,7vw,7.5rem)] leading-[.92] tracking-[-.04em] text-balance">
                <span className="block">Construction Built</span>
                <span className="block">
                  Around <span className="text-[var(--color-brand-yellow)]">Your Vision.</span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/82">
                M&F serves public, commercial, property-management, and residential needs through construction, civil, concrete, structural, maintenance, and repair capability.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/get-started">Get Started</Button>
                <Button href="/contact" variant="secondaryLight">Discuss a project</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </VideoHero>
  );
}

export function Credibility() {
  const items = [
    { title: "Experienced in-house crews", Icon: UsersRound },
    { title: "Owned equipment and vehicles", Icon: Truck },
    { title: "Rapid mobilization", Icon: Zap },
    { title: "Safety, quality, schedule discipline", Icon: ShieldCheck },
  ];
  return (
    <section className="relative z-20 -mt-20 -mb-10 bg-[linear-gradient(to_bottom,transparent_0%,transparent_48%,var(--color-surface-warm)_48%,var(--color-surface-warm)_100%)] px-0 pb-6">
      <Container>
        <Reveal delay={0.02}>
          <div className="rounded-3xl border-[8px] border-white bg-white p-4 shadow-[0_24px_80px_rgba(23,23,23,.14)] md:p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {items.map(({ title, Icon }, index) => (
                <Reveal key={title} delay={0.06 + index * 0.035}>
                  <div className="relative h-full overflow-hidden rounded-2xl bg-[var(--color-surface-warm)] p-5 pr-16 transition-colors duration-300 hover:bg-[rgba(242,195,0,.13)]">
                    <span className="pointer-events-none absolute text-yellow-400/20 -bottom-7 -right-2 font-display text-8xl font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 md:text-9xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10 flex size-11 items-center justify-center rounded-xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)]">
                      <Icon size={21} strokeWidth={2.2} />
                    </div>
                    <h3 className="relative z-10 mt-5 text-sm font-semibold leading-5">{title}</h3>
                    <p className="relative z-10 mt-2 text-xs leading-5 text-[var(--color-muted)]">Verify exact language with M&F.</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

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

export function Testimonials() {
  const testimonials = [
    {
      quote: " M&F provided competitive pricing on contracted concrete and excavation work for the projects and quickly and fairly priced extras and change orders for site conditions and plan conflict/error resolutions.",
      author: "Carter Morrow",
      location: "H2 Building - Leesburg, Virginia",
    },
    {
      quote: "Your team has been nothing but transparent throughout the entire building process. I would highly recommend M&F for my next build.",
      author: "Tim Gessler",
      location: "Acme Mechanical - Manassas, Virginia",
    },
    {
      quote: " Thank you again for the amazing work everyone did on the wall and classrooms! They look amazing, and your staff went above and beyond to pay attention to every detail. We are so grateful for your help. Words cannot express how appreciative we all are that it got done in time for the first day of school. What a blessing that was!",
      author: "Melissa Mongillo",
      location: "St. Michael's Academy Warrenton, VA",
    },
    {
      quote: "My business model is custom residential homes that have changeling structural considerations and M&FC have been a valuable component in Bungalow Homes success and project integrity outcomes.",
      author: "Bruce W. Trojan",
      location: "Bungalow Homes - Vienna, Virginia",
    },
    {
      quote: "The beginning of 2018 was a tough year to do foundation work due to the rain we received every day, but M&F worked through the mud, rain, and slippery driveway. We passed all the inspections with flying colors and got it done by the deadline. I tell everyone about M&F and the excellent job they did.",
      author: "Wade O.",
      location: "Warrenton, Virginia",
    },
    {
      quote: "M&F Concrete, Inc. Manassas fixed a long standing drainage problem at the end of our driveway and did an exceptional job. The complaint was sent to Virginia VDOT and whomever hired M&F deserves a compliment as they selected a company that does excellent work both functionally and aesthetically. The company has hard working, competent, friendly employees.",
      author: "Saundra Prince",
      location: "Bethlehem Rd, Manassas, VA 20109, United States",
    },
    {
      quote: "I spoke with Ricardo regarding a concrete excavation plan for my garage. he was very knowledgeable and helpful. Now moving forward with the process glad that I came across this company.",
      author: "Michael McDonald",
      location: "14805 Willard Rd, Chantilly, VA 20151, United States",
    },
  ];
  const [active, setActive] = useState(0);
  const goTo = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <Section className="overflow-hidden bg-[var(--color-surface-warm)]">
      <Container wide>
        <Reveal delay={0.02}>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-[var(--color-muted)]">
              Testimonials
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,4vw,4.75rem)] leading-[.96] tracking-[-.05em]">
              A standard people remember.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto h-[34rem] max-w-6xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-56 bg-gradient-to-r from-[var(--color-surface-warm)] to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-56 bg-gradient-to-l from-[var(--color-surface-warm)] to-transparent md:block" />
            {testimonials.map((item, index) => {
              const offset = index - active;
              const normalized = offset > testimonials.length / 2 ? offset - testimonials.length : offset < -testimonials.length / 2 ? offset + testimonials.length : offset;
              const focused = normalized === 0;
              const adjacent = Math.abs(normalized) === 1;
              const hiddenSide = normalized < 0 ? -1.35 : 1.35;
              const xOffset = focused ? 0 : adjacent ? normalized * 82 : hiddenSide * 82;
              return (
                <article
                  key={`${item.author}-${index}`}
                  className={`absolute left-1/2 top-1/2 rounded-2xl flex h-[25rem] w-[min(82vw,32rem)] flex-col justify-between p-8 transition-[transform,opacity] duration-500 ease-out md:p-10 ${focused ? "z-20 bg-[var(--color-ink)] text-white opacity-100 shadow-[0_18px_44px_rgba(23,23,23,.16)]" : adjacent ? "z-10 border border-[var(--color-border)] bg-white text-[var(--color-ink)] opacity-55 shadow-[0_14px_34px_rgba(23,23,23,.08)]" : "pointer-events-none z-0 border border-[var(--color-border)] bg-white text-[var(--color-ink)] opacity-0"}`}
                  style={{
                    transform: `translateX(calc(-50% + ${xOffset}%)) translateY(calc(-50% + ${adjacent ? 18 : 0}px)) rotate(${adjacent ? normalized * -2.5 : 0}deg) scale(${focused ? 1 : 0.92})`,
                  }}
                >
                  <Quote className={`pointer-events-none absolute right-6 top-6 ${focused ? "text-yellow-300/30" : "text-[var(--color-brand-yellow)]/20"}`} size={132} strokeWidth={1.4} />
                  <div className="relative z-10">
                    <p className={`overflow-hidden font-display text-2xl leading-[1.22] tracking-[-.035em] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] md:text-3xl ${focused ? "text-white" : "text-[var(--color-ink)]"}`}>
                      “{item.quote}”
                    </p>
                  </div>
                  <div className="relative z-10">
                    <div className="mb-3 flex gap-1 text-[var(--color-brand-yellow)]" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FaStar key={starIndex} size={15} />
                      ))}
                    </div>
                    <p className={`font-semibold ${focused ? "text-white" : "text-[var(--color-ink)]"}`}>— {item.author}</p>
                    <p className={`mt-1 text-sm italic ${focused ? "text-white/68" : "text-[var(--color-muted)]"}`}>{item.location}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(-1)}
            className="grid size-14 place-items-center rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition hover:-translate-y-1 hover:border-[var(--color-brand-yellow)] hover:bg-[rgba(242,195,0,.14)]"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(1)}
            className="grid size-14 place-items-center rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition hover:-translate-y-1 hover:border-[var(--color-brand-yellow)] hover:bg-[rgba(242,195,0,.14)]"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Container>
    </Section>
  );
}

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const steps = [
    {
      title: "Understand",
      description: "We listen first, define the project context, and clarify what success needs to look like before work begins.",
      Icon: SearchCheck,
    },
    {
      title: "Plan",
      description: "Scope, schedule, materials, constraints, and responsibilities are organized into a practical path forward.",
      Icon: ClipboardCheck,
    },
    {
      title: "Design",
      description: "Early decisions become coordinated drawings, details, and constructable direction for the field team.",
      Icon: DraftingCompass,
    },
    {
      title: "Prepare",
      description: "Crews, equipment, procurement, site needs, and communication rhythm are aligned before mobilization.",
      Icon: HardHat,
    },
    {
      title: "Build",
      description: "The work moves with disciplined execution, safety awareness, and accountable project communication.",
      Icon: Construction,
    },
    {
      title: "Complete",
      description: "Final details, closeout, and handoff are handled with the same care as the first conversation.",
      Icon: BadgeCheck,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const focused = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const index = Number(focused?.target.getAttribute("data-step-index"));
        if (!Number.isNaN(index)) setActiveStep(index);
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: [0.18, 0.35, 0.55, 0.75] },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-white">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal delay={0.02}>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[var(--color-muted)]">
                Process
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.45rem,4.2vw,4.85rem)] leading-[.96] tracking-[-.05em]">
                <span className="block">From Conversation</span>
                <span className="block">to <span className="text-[var(--color-brand-yellow)]">Completion.</span></span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                A steady path that turns early project intent into prepared work, field execution, and accountable closeout.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="text">
                  Learn more <ArrowUpRight size={18} strokeWidth={2.4} />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="process-line absolute bottom-14 left-8 top-14 w-px bg-[var(--color-border)] md:left-1/2" />
            <div
              className="process-line process-line-active absolute left-8 top-0 h-40 w-1 rounded-full transition-transform duration-700 ease-out md:left-1/2"
              style={{ transform: `translate3d(-2px, calc(${activeStep} * 50vh + 14vh), 0)` }}
            />
            <ol className="relative grid gap-3">
              {steps.map(({ title, description, Icon }, index) => {
                const active = activeStep === index;
                const cardLeft = index % 2 === 0;
                return (
                  <li
                    key={title}
                    ref={(node) => {
                      stepRefs.current[index] = node;
                    }}
                    data-step-index={index}
                    className="grid min-h-[50vh] items-center pl-20 md:grid-cols-[1fr_5rem_1fr] md:gap-8 md:pl-0"
                  >
                    <div className={`${cardLeft ? "md:col-start-1 md:text-right" : "md:col-start-3"}`}>
                      <Reveal delay={0.02}>
                        <article className={`rounded-3xl border p-6 transition duration-500 md:p-8 ${active ? "border-[rgba(242,195,0,.45)] bg-[rgba(242,195,0,.11)] shadow-[0_24px_80px_rgba(23,23,23,.10)]" : "border-[var(--color-border)] bg-[var(--color-surface-warm)]"}`}>
                          <span className="font-display text-5xl font-bold leading-none tracking-[-.07em] text-[var(--color-muted)]/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-7 font-display text-4xl leading-none tracking-[-.04em]">
                            {title}
                          </h3>
                          <p className="mt-4 leading-7 text-[var(--color-muted)]">
                            {description}
                          </p>
                        </article>
                      </Reveal>
                    </div>

                    <div className={`${cardLeft ? "md:col-start-3 md:justify-self-start" : "md:col-start-1 md:justify-self-end"} mt-5 flex items-center transition-colors duration-500 md:row-start-1 md:mt-0 ${active ? "text-[var(--color-brand-yellow)]" : "text-[var(--color-ink)]/18"}`}>
                      <Icon size={128} strokeWidth={1.45} />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Credibility />
      <Section>
        <Container>
          <Reveal delay={0.02}>
            <SectionHeader
              title="Capability That Moves Projects Forward."
              copy="Services explain what M&F does. Expertise paths explain who M&F serves. Projects prove the connection."
              action={<Button href="/services" variant="text">Explore all services →</Button>}
            />
          </Reveal>
          {services.slice(0, 5).map((s, index) => (
            <Reveal key={s.id} delay={0.05 + index * 0.04}>
              <ServiceCard s={s} index={index} />
            </Reveal>
          ))}
        </Container>
      </Section>
      
      <Section dark>
        <Container wide>
          <Reveal delay={0.02}>
            <SectionHeader
              title="Project Proof"
              action={<Button href="/contact" variant="secondaryLight">Discuss a project →</Button>}
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p, index) => (
              <Reveal key={p.id} delay={0.06 + index * 0.05}>
                <ProjectCard p={p} variant="overlay" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Why />
      <Testimonials />
      <Process />
      <CTA />
    </PageShell>
  );
}

export default HomePage;
