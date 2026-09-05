import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ArrowUpRight, Award, BadgeCheck, BriefcaseBusiness, Building2, CheckCircle2, ChevronDown, ClipboardCheck, Clock3, FileText, Gauge, Handshake, HardHat, Home, Landmark, Leaf, MapPinned, MessagesSquare, Palette, Route, ShieldCheck, Snowflake, Store, Target, TrafficCone, Truck, UserRound, Users } from "lucide-react";
import { FaLinkedinIn, FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { contentRequired, markets, projects, services, statistics } from "../data/content";
import designPageImage from "../assets/design.webp";
import federalPageImage from "../assets/federal.webp";
import flatworkImage from "../assets/flatwork.webp";
import foundationImage from "../assets/foundation.webp";
import foundation2Image from "../assets/foundation2.webp";
import foundation3Image from "../assets/foundation3.webp";
import historyLogoImage from "../assets/history logo.webp";
import aboutHeroImage from "../assets/heroSectionImage.webp";
import carlosNovaisImage from "../assets/members/CarlosNovais.webp";
import chrisMunroImage from "../assets/members/ChrisMunro.webp";
import jackSerraImage from "../assets/members/JackSerra.webp";
import johnCaporuscioImage from "../assets/members/JohnCaporuscio.webp";
import joseFernandezImage from "../assets/members/JoseFernandez.webp";
import leviBurgbacherImage from "../assets/members/LeviBurgbacher.webp";
import marcosSilvaImage from "../assets/members/MarcosSilva.webp";
import ricardoParraImage from "../assets/members/RicardoParra.webp";
import shellyBurgbacherImage from "../assets/members/ShellyBurgbacher.webp";
import tiagoSilvaImage from "../assets/members/TiagoSilva.webp";
import walterMcNealImage from "../assets/members/WalterMcNeal.webp";
import paveworkImage from "../assets/pavework.webp";
import propertiesImage from "../assets/properties.webp";
import properties2Image from "../assets/properties2.webp";
import properties3Image from "../assets/properties3.webp";
import residentialPageImage from "../assets/residential.webp";
import servicesHeroImage from "../assets/services.webp";
import statePageImage from "../assets/state.webp";
import notFoundImage from "../assets/404.png";
import type { Market, Project, Service } from "../types/content";
import { Button, Container, ImageFrame, isReq, Link, Reveal, Section, SectionHeader } from "./ui";
import { MarketCard, ProjectCard, ServiceCard } from "./cards";
import { PageShell } from "./layout";
import { CTA, Why } from "./common";

export function ServicesPage() {
  return (
    <PageShell>
      <Reveal delay={0.02}>
        <PageHero
          title="Services"
          copy="What M&F does, grouped by construction delivery, civil/infrastructure, structural, and managed-service needs."
          backgroundImage={servicesHeroImage}
          centered
        />
      </Reveal>
      <Section>
        <Container wide>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, index) => (
              <Reveal key={s.id} delay={0.06 + index * 0.045}>
                <ServiceCard s={s} index={index} variant="overlay" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </PageShell>
  );
}

export function DesignBuildPage() {
  const expertise = [
    ["Design / Build", "/services/design-build"],
    ["Federal", "/markets/federal"],
    ["State & Local", "/markets/state-local"],
    ["Residential", "/markets/residential"],
    ["Commercial", "/markets/commercial"],
    ["Associations & Property Managers", "/markets/associations-property-managers"],
  ];
  const phases = [
    {
      title: "Start with the right questions",
      copy: "We clarify goals, constraints, urgency, budget, and the conditions that could affect the work.",
      Icon: MessagesSquare,
    },
    {
      title: "Shape a transparent plan",
      copy: "Design, civil, architectural, and delivery decisions become a step-by-step path with schedule and cost clarity.",
      Icon: Route,
    },
    {
      title: "Prepare before the shovel hits",
      copy: "Teams revisit the vision, solve alternatives early, and align everyone before field work begins.",
      Icon: ClipboardCheck,
    },
    {
      title: "Build through closeout",
      copy: "M&F stays on schedule, communicates next steps, and supports the site through completion and bond release.",
      Icon: HardHat,
    },
  ];

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 md:pt-40"
        style={{ backgroundImage: `linear-gradient(rgba(246,245,240,.80), rgba(246,245,240,.80)), url(${designPageImage})` }}
      >
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-10">
            <div>
              <div className="relative min-h-[34rem] p-1 text-[var(--color-ink)] md:p-2">
                <Reveal delay={0.02}>
                  <nav className="mb-12 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)]" aria-label="Breadcrumb">
                    <Link href="/" className="transition hover:text-[var(--color-ink)]">Home</Link>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span>Expertise</span>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span className="text-[var(--color-ink)]">Design / Build</span>
                  </nav>
                </Reveal>
                <div className="flex min-h-[24rem] flex-col justify-center">
                  <Reveal delay={0.06}>
                    <div className="mb-5 w-fit rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-muted)] backdrop-blur">
                      Expertise
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">
                      Design / Build
                    </h1>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-graphite)]">
                      The first step is always the toughest. M&F turns the question “Where do we begin?” into a practical plan from first call to finished site.
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/get-started">Start a project</Button>
                      <Button href="/contact" variant="text">Talk with M&F <ArrowUpRight size={18} /></Button>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {phases.map(({ title, copy, Icon }, index) => (
                  <Reveal key={title} delay={0.08 + index * 0.04}>
                    <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 shadow-[0_18px_60px_rgba(23,23,23,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-8">
                      <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)] transition-colors duration-300 group-hover:text-[var(--color-brand-yellow)]">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <h2 className="relative z-10 mt-14 max-w-lg font-display text-3xl leading-[1.05] tracking-[-.03em]">
                        {title}
                      </h2>
                      <p className="relative z-10 mt-4 leading-7 text-[var(--color-muted)]">{copy}</p>
                      <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="relative my-8 overflow-hidden rounded-3xl bg-[var(--color-charcoal)] p-6 text-white shadow-[0_18px_60px_rgba(23,23,23,.12)] md:p-8">
                  <FaQuoteRight className="pointer-events-none absolute right-6 -top-6 text-white/15" size={136} aria-hidden="true" />
                  <p className="relative z-10 max-w-3xl font-display text-3xl leading-[1.08] tracking-[-.03em]">
                    Raw land, parking expansion, new construction, additions, access roads, or traffic-flow fixes — the first step is no longer the toughest.
                  </p>
                  <div className="relative z-10 mt-6">
                    <Button href="/get-started">Begin with M&F</Button>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="self-start lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(23,23,23,.08)]">
                {expertise.map(([label, href]) => {
                  const active = href === "/services/design-build";
                  return (
                    <ButtonlessLink key={href} href={href} active={active}>
                      {label}
                    </ButtonlessLink>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function FederalPage() {
  const [openNaics, setOpenNaics] = useState<number | null>(0);
  const [showAllNaics, setShowAllNaics] = useState(false);
  const expertise = [
    ["Design / Build", "/services/design-build"],
    ["Federal", "/markets/federal"],
    ["State & Local", "/markets/state-local"],
    ["Residential", "/markets/residential"],
    ["Commercial", "/markets/commercial"],
    ["Associations & Property Managers", "/markets/associations-property-managers"],
  ];
  const cards = [
    {
      title: "Ready across the Mid-Atlantic",
      copy: "Strategically positioned headquarters help M&F respond to urgent federal needs and planned work year-round.",
      Icon: Landmark,
    },
    {
      title: "Trusted by federal departments",
      copy: "Experience spans defense, justice, interior, parks, executive offices, GSA, communications, and other federal teams.",
      Icon: Building2,
    },
    {
      title: "Prepared for secure sites",
      copy: "Crews understand the responsibility of historic federal buildings, executive facilities, Arlington, and memorial grounds.",
      Icon: ShieldCheck,
    },
    {
      title: "Flexible when timelines change",
      copy: "When a crisis pauses work or tomorrow becomes the new start date, M&F adapts crews, hours, and coordination.",
      Icon: Clock3,
    },
  ];
  const naicsGroups = [
    { code: "237310", title: "Highways, street and bridge construction", description: "Roadway, bridge, paving, repair, and drainage scopes for public-sector infrastructure.", items: ["Paving", "Highway maintenance", "Barrier wall repair", "Drainage improvements"] },
    { code: "236210", title: "Industrial building construction", description: "Site, foundation, demolition, and flat work support for industrial federal facilities.", items: ["Site work", "Demolition", "Flat work", "Foundations"] },
    { code: "236220", title: "Commercial and institutional construction", description: "Building, utility, structural, and stormwater work for institutional environments.", items: ["Infrastructure", "Structural walls", "Utilities", "Stormwater maintenance"] },
    { code: "237990", title: "Heavy and civil engineering construction", description: "Civil, concrete, retaining, repair, and hardscape scopes requiring coordinated field execution.", items: ["Concrete services", "Retaining walls", "Superstructure repairs", "Hardscapes"] },
    { code: "238110", title: "Poured concrete foundations", description: "Foundations, footings, structural walls, flat work, and concrete placement capabilities.", items: ["Footings", "Flat work", "Structural walls", "Concrete services"] },
    { code: "238910", title: "Site preparation contractors", description: "Preparation, excavation, demolition, gutter, and stormwater scopes before and during work.", items: ["Excavation", "Demolition", "Gutters", "Stormwater maintenance"] },
  ];
  const allNaics = [
    ["236210", "Industrial Building Construction"],
    ["238170", "Siding Contractors"],
    ["237310", "Highways, Street, and Bridge Construction"],
    ["237990", "Other Heavy and Civil Engineering Construction"],
    ["238110", "Poured Concrete Foundation and Structure Contractors"],
    ["238120", "Structural Steel and Pre-Cast Concrete Contractors"],
    ["238130", "Framing Contractors"],
    ["238140", "Masonry Contractors"],
    ["238150", "Glass and Glazing Contractors"],
    ["238160", "Roofing Contractors"],
    ["236220", "Commercial and Institutional Building Construction Contractors"],
    ["238190", "Other Foundations, Structure, Building Exterior Contractors"],
    ["238210", "Electrical Contractors and Other Wiring Installation"],
    ["238220", "Plumbing, Heating, and Air-Conditioning Contractors"],
    ["238310", "Drywall Insulation Contractors"],
    ["238320", "Painting and Wall Covering Contractors"],
    ["238320", "Painting and Wall Covering Contractors"],
    ["238330", "Flooring Contractors"],
    ["238340", "Tile & Terrazzo Contractors"],
    ["238350", "Finish Carpentry Contractors"],
    ["238390", "Other Building Finishing"],
    ["238910", "Site Preparation Contractors"],
    ["238990", "Specialty Trade Contractors"],
    ["561730", "Landscaping Services"],
    ["562910", "Remediation Services"],
  ];
  const visibleNaics = showAllNaics ? allNaics : allNaics.slice(0, Math.ceil(allNaics.length / 2));

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 md:pt-40"
        style={{ backgroundImage: `linear-gradient(rgba(246,245,240,.80), rgba(246,245,240,.80)), url(${federalPageImage})` }}
      >
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-10">
            <div>
              <div className="relative min-h-[34rem] p-1 text-[var(--color-ink)] md:p-2">
                <Reveal delay={0.02}>
                  <nav className="mb-12 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)]" aria-label="Breadcrumb">
                    <Link href="/" className="transition hover:text-[var(--color-ink)]">Home</Link>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span>Expertise</span>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span className="text-[var(--color-ink)]">Federal</span>
                  </nav>
                </Reveal>
                <div className="flex min-h-[24rem] flex-col justify-center">
                  <Reveal delay={0.06}>
                    <div className="mb-5 w-fit rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-muted)] backdrop-blur">
                      Expertise
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">
                      Federal construction
                    </h1>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-graphite)]">
                      M&F serves the federal government market across the Mid-Atlantic with responsive crews, transparent communication, and experience in complex secure environments.
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/get-started">Start a federal project</Button>
                      <Button href="/contact" variant="text">Talk with M&F <ArrowUpRight size={18} /></Button>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cards.map(({ title, copy, Icon }, index) => (
                  <Reveal key={title} delay={0.08 + index * 0.04}>
                    <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 shadow-[0_18px_60px_rgba(23,23,23,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-8">
                      <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)] transition-colors duration-300 group-hover:text-[var(--color-brand-yellow)]">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <h2 className="relative z-10 mt-14 max-w-lg font-display text-3xl leading-[1.05] tracking-[-.03em]">
                        {title}
                      </h2>
                      <p className="relative z-10 mt-4 leading-7 text-[var(--color-muted)]">{copy}</p>
                      <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="my-8 rounded-3xl bg-[var(--color-charcoal)] p-6 text-white shadow-[0_18px_60px_rgba(23,23,23,.12)] md:p-8">
                  <p className="max-w-3xl font-display text-3xl leading-[1.08] tracking-[-.03em]">
                    Wherever. Whenever. Whatever. M&F knows how to respond and deliver to the federal market.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-4 md:grid-cols-2">
                {naicsGroups.map(({ code, title, description, items }, index) => {
                  const expanded = openNaics === index;
                  return (
                    <Reveal key={code} delay={0.08 + index * 0.025}>
                      <article className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(23,23,23,.06)] transition duration-300 hover:-translate-y-1">
                        <button
                          type="button"
                          className={`flex ${expanded ? "" : "min-h-[13rem]"} w-full items-start gap-4 p-6 text-left md:p-7`}
                          aria-expanded={expanded}
                          onClick={() => setOpenNaics(expanded ? null : index)}
                        >
                          <FileText className="mt-1 shrink-0 text-[var(--color-brand-yellow)]" size={24} strokeWidth={2} />
                          <div className="min-w-0 flex-1">
                            <p className="font-display text-2xl font-bold tracking-[-.04em] text-[var(--color-ink)]">{code}</p>
                            <h2 className="mt-1 font-semibold text-[var(--color-graphite)]">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
                          </div>
                          <ChevronDown className={`mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} size={22} strokeWidth={2.2} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] px-6 py-5 md:px-7">
                              {items.map((item) => (
                                <span key={item} className="rounded-full bg-[var(--color-surface-warm)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.12}>
                <article className="my-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white/85 shadow-[0_18px_60px_rgba(23,23,23,.07)] backdrop-blur">
                  <div className="grid gap-5 border-b border-[var(--color-border)] p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-[rgba(242,195,0,.14)] text-[var(--color-brand-yellow)]">
                      <BadgeCheck size={28} strokeWidth={2.1} />
                    </div>
                    <div>
                      <h2 className="font-display text-4xl tracking-[-.04em]">All NAICS codes</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
                        Federal capabilities organized as scannable classifications instead of a long text list.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3 p-4 md:grid-cols-2 md:p-5">
                    {visibleNaics.map(([code, label], index) => (
                      <div
                        key={`${code}-${index}`}
                        className="group grid grid-cols-[5.5rem_1fr] gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(23,23,23,.045)] transition hover:bg-[rgb(248,241,210)] md:p-5"
                      >
                        <span className="font-display text-2xl font-bold leading-none tracking-[-.04em] text-[var(--color-ink)] transition group-hover:text-[var(--color-brand-yellow)]">
                          {code}
                        </span>
                        <p className="text-sm font-semibold leading-6 text-[var(--color-graphite)]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--color-border)] px-6 py-5 text-center">
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--color-ink)] bg-white px-5 py-3 font-semibold text-[var(--color-ink)] transition hover:-translate-y-1 hover:bg-[var(--color-ink)] hover:text-white"
                      onClick={() => setShowAllNaics((current) => !current)}
                    >
                      {showAllNaics ? "Show less" : "View more"}
                    </button>
                  </div>
                </article>
              </Reveal>
            </div>

            <aside className="self-start lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(23,23,23,.08)]">
                {expertise.map(([label, href]) => {
                  const active = href === "/markets/federal";
                  return (
                    <ButtonlessLink key={href} href={href} active={active}>
                      {label}
                    </ButtonlessLink>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function StateLocalPage() {
  const [openScope, setOpenScope] = useState<number | null>(0);
  const expertise = [
    ["Design / Build", "/services/design-build"],
    ["Federal", "/markets/federal"],
    ["State & Local", "/markets/state-local"],
    ["Residential", "/markets/residential"],
    ["Commercial", "/markets/commercial"],
    ["Associations & Property Managers", "/markets/associations-property-managers"],
  ];
  const cards = [
    {
      title: "Safe around public movement",
      copy: "Traffic, pedestrians, commuters, and active sites are planned around so work can continue with minimal disruption.",
      Icon: TrafficCone,
    },
    {
      title: "Trained full-time crews",
      copy: "Properly managed employees and wholly-owned equipment help M&F deliver safely, consistently, and on schedule.",
      Icon: HardHat,
    },
    {
      title: "Current with DOT standards",
      copy: "Leadership tracks evolving VDOT, DDOT, and MDOT requirements while job sites are monitored through every phase.",
      Icon: BadgeCheck,
    },
    {
      title: "Budget clarity from award to acceptance",
      copy: "Detailed review and constant communication reduce surprises and protect the customer relationship.",
      Icon: ClipboardCheck,
    },
  ];
  const scopes = [
    { title: "Highways, street and bridge construction", description: "Roadway repair, paving, traffic-sensitive work, and public infrastructure maintenance.", items: ["Paving", "Asphalt patching", "Highway maintenance", "Barrier wall repair", "Sidewalks", "Curb & gutter", "Drainage improvements", "Sewers", "Jersey walls"] },
    { title: "Poured concrete foundation and structure contractors", description: "Durable concrete and foundation capabilities for state and local project needs.", items: ["Foundations", "Flat work", "Retaining walls", "Structural walls", "Concrete services", "Footings"] },
    { title: "Commercial and institutional building construction", description: "Civil and construction support for public-facing facilities and institutional sites.", items: ["Site work", "Demolition", "Flat work", "Infrastructure", "Foundations", "Structural walls", "Utilities", "Stormwater maintenance"] },
    { title: "Heavy and civil engineering construction", description: "Infrastructure, retaining, repair, concrete, and hardscape scopes requiring field coordination.", items: ["Infrastructure", "Site work", "Concrete services", "Retaining walls", "Caulking", "Patching", "Foundations", "Additions", "Porous paving", "Hardscapes"] },
    { title: "Industrial building construction", description: "Site, foundation, utility, demolition, and structural support for industrial environments.", items: ["Site work", "Epoxy repairs", "Demolition", "Flat work", "Infrastructure", "Foundations", "Structural walls", "Utilities", "Stormwater maintenance"] },
    { title: "Specialty trade and site preparation", description: "Demolition, excavation, plan support, hardscapes, repairs, and exterior construction support.", items: ["Demolition", "Excavation", "Driveways", "Plan review", "Sidewalks", "Crushing & screening", "Walks", "Patios", "Bond release", "Maintenance and repair", "Additions"] },
  ];

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 md:pt-40"
        style={{ backgroundImage: `linear-gradient(rgba(246,245,240,.80), rgba(246,245,240,.80)), url(${statePageImage})` }}
      >
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-10">
            <div>
              <Reveal delay={0.04}>
                <div className="relative min-h-[34rem] p-1 text-[var(--color-ink)] md:p-2">
                  <nav className="mb-12 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)]" aria-label="Breadcrumb">
                    <Link href="/" className="transition hover:text-[var(--color-ink)]">Home</Link>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span>Expertise</span>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span className="text-[var(--color-ink)]">State & Local</span>
                  </nav>
                  <div className="flex min-h-[24rem] flex-col justify-center">
                    <div className="mb-5 w-fit rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-muted)] backdrop-blur">
                      Expertise
                    </div>
                    <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">
                      State & local construction
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-graphite)]">
                      Public work asks for safety, schedule discipline, budget control, and minimal disruption. M&F is built to meet those standards in active civic environments.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/get-started">Start a public project</Button>
                      <Button href="/contact" variant="text">Talk with M&F <ArrowUpRight size={18} /></Button>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cards.map(({ title, copy, Icon }, index) => (
                  <Reveal key={title} delay={0.08 + index * 0.04}>
                    <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 shadow-[0_18px_60px_rgba(23,23,23,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-8">
                      <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)] transition-colors duration-300 group-hover:text-[var(--color-brand-yellow)]">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <h2 className="relative z-10 mt-14 max-w-lg font-display text-3xl leading-[1.05] tracking-[-.03em]">{title}</h2>
                      <p className="relative z-10 mt-4 leading-7 text-[var(--color-muted)]">{copy}</p>
                      <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="relative my-8 overflow-hidden rounded-3xl bg-[var(--color-charcoal)] p-6 text-white shadow-[0_18px_60px_rgba(23,23,23,.12)] md:p-8">
                  <FaQuoteRight className="pointer-events-none absolute right-6 -top-6 text-white/15" size={106} aria-hidden="true" />
                  <p className="relative z-10 max-w-3xl font-display text-3xl leading-[1.08] tracking-[-.03em]">
                    The best overall choice can also be the safest choice. That is what state and local teams get with M&F.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-4 mb-5 md:grid-cols-2">
                {scopes.map(({ title, description, items }, index) => {
                  const expanded = openScope === index;
                  return (
                    <Reveal key={title} delay={0.08 + index * 0.025}>
                      <article className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(23,23,23,.06)] transition duration-300 hover:-translate-y-1">
                        <button
                          type="button"
                          className={`flex ${expanded ? "" : "min-h-[13rem]"} w-full items-start gap-4 p-6 text-left md:p-7`}
                          aria-expanded={expanded}
                          onClick={() => setOpenScope(expanded ? null : index)}
                        >
                          <MapPinned className="mt-1 shrink-0 text-[var(--color-brand-yellow)]" size={24} strokeWidth={2} />
                          <div className="min-w-0 flex-1">
                            <h2 className="font-display text-2xl tracking-[-.03em] text-[var(--color-ink)]">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
                          </div>
                          <ChevronDown className={`mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} size={22} strokeWidth={2.2} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] px-6 py-5 md:px-7">
                              {items.map((item) => (
                                <span key={item} className="rounded-full bg-[var(--color-surface-warm)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(23,23,23,.08)]">
                {expertise.map(([label, href]) => {
                  const active = href === "/markets/state-local";
                  return (
                    <ButtonlessLink key={href} href={href} active={active}>
                      {label}
                    </ButtonlessLink>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function ResidentialPage() {
  const [openScope, setOpenScope] = useState<number | null>(0);
  const expertise = [
    ["Design / Build", "/services/design-build"],
    ["Federal", "/markets/federal"],
    ["State & Local", "/markets/state-local"],
    ["Residential", "/markets/residential"],
    ["Commercial", "/markets/commercial"],
    ["Associations & Property Managers", "/markets/associations-property-managers"],
  ];
  const cards = [
    {
      title: "Reliable through every cycle",
      copy: "M&F has stayed steady through decades of residential market change.",
      Icon: Home,
    },
    {
      title: "Specialist in-house residential crews",
      copy: "Experienced employees arrive prepared, work on schedule, and focus on getting the job done right the first time.",
      Icon: HardHat,
    },
    {
      title: "Owned equipment for fast response",
      copy: "A large fleet of vehicles and equipment helps M&F mobilize quickly, even when residential schedules shift.",
      Icon: Truck,
    },
    {
      title: "Creative decorative concrete options",
      copy: "Stamped concrete opens combinations of color, texture, and pattern for strong starts and refined finishes.",
      Icon: Palette,
    },
  ];
  const scopes = [
    { title: "Residential site and civil work", description: "Groundwork and exterior construction support for residential contractors and communities.", items: ["Site work", "Road ways", "Curbs & gutter", "Paving"] },
    { title: "Foundations and structural starts", description: "Concrete and foundational scopes that set residential projects up for long-term stability.", items: ["Footings", "Foundations", "Walls", "Basements", "Garage slabs"] },
    { title: "Decorative and flatwork concrete", description: "Durable everyday surfaces and finish-focused concrete details for homes and outdoor spaces.", items: ["Patios", "Walkways", "Sidewalks", "Stoops", "Driveways", "Stairs", "Pool decks"] },
    { title: "Stamped concrete possibilities", description: "Decorative concrete with flexible combinations of color, texture, pattern, and exposed aggregate finish.", items: ["Stamped concrete", "Decorative concrete", "Exposed aggregate concrete", "All types of concrete work"] },
  ];

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 md:pt-40"
        style={{ backgroundImage: `linear-gradient(rgba(246,245,240,.80), rgba(246,245,240,.80)), url(${residentialPageImage})` }}
      >
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-10">
            <div>
              <div className="relative min-h-[34rem] p-1 text-[var(--color-ink)] md:p-2">
                <Reveal delay={0.02}>
                  <nav className="mb-12 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)]" aria-label="Breadcrumb">
                    <Link href="/" className="transition hover:text-[var(--color-ink)]">Home</Link>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span>Expertise</span>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span className="text-[var(--color-ink)]">Residential</span>
                  </nav>
                </Reveal>
                <div className="flex min-h-[24rem] flex-col justify-center">
                  <Reveal delay={0.06}>
                    <div className="mb-5 w-fit rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-muted)] backdrop-blur">
                      Expertise
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">
                      Residential construction
                    </h1>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-graphite)]">
                      Through the rise, fall, and return of the Mid-Atlantic residential market, M&F remains a sturdy, reliable construction partner.
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/contact">Contact M&F</Button>
                      <Button href="/get-started" variant="text">Start a residential project <ArrowUpRight size={18} /></Button>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cards.map(({ title, copy, Icon }, index) => (
                  <Reveal key={title} delay={0.08 + index * 0.04}>
                    <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 shadow-[0_18px_60px_rgba(23,23,23,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-8">
                      <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)] transition-colors duration-300 group-hover:text-[var(--color-brand-yellow)]">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <h2 className="relative z-10 mt-14 max-w-lg font-display text-3xl leading-[1.05] tracking-[-.03em]">{title}</h2>
                      <p className="relative z-10 mt-4 leading-7 text-[var(--color-muted)]">{copy}</p>
                      <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.12}>
                <div className="my-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.09)]">
                      <img
                        src={residentialPageImage}
                        alt="Residential construction work"
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.09)]">
                      <img
                        src={flatworkImage}
                        alt="Residential flatwork concrete"
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </div>
                  <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.1)]">
                    <img
                      src={paveworkImage}
                      alt="Residential paving and site work"
                      className="h-[24rem] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                      loading="lazy"
                        decoding="async"
                    />
                  </figure>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative my-8 overflow-hidden rounded-3xl bg-[var(--color-charcoal)] p-6 text-white shadow-[0_18px_60px_rgba(23,23,23,.12)] md:p-8">
                  <FaQuoteRight className="pointer-events-none absolute right-6 top-6 text-white/15" size={96} aria-hidden="true" />
                  <p className="relative z-10 max-w-3xl font-display text-3xl leading-[1.08] tracking-[-.03em]">
                    For a solid start or decorative finish to every residential project, the right call to make is 1-855-MFBUILD.
                  </p>
                  <div className="relative z-10 mt-6">
                    <Button href="/contact">Contact M&F</Button>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4 mb-5 md:grid-cols-2">
                {scopes.map(({ title, description, items }, index) => {
                  const expanded = openScope === index;
                  return (
                    <Reveal key={title} delay={0.08 + index * 0.025}>
                      <article className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(23,23,23,.06)] transition duration-300 hover:-translate-y-1">
                        <button
                          type="button"
                          className={`flex ${expanded ? "" : "min-h-[13rem]"} w-full items-start gap-4 p-6 text-left md:p-7`}
                          aria-expanded={expanded}
                          onClick={() => setOpenScope(expanded ? null : index)}
                        >
                          <Home className="mt-1 shrink-0 text-[var(--color-brand-yellow)]" size={24} strokeWidth={2} />
                          <div className="min-w-0 flex-1">
                            <h2 className="font-display text-2xl tracking-[-.03em] text-[var(--color-ink)]">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
                          </div>
                          <ChevronDown className={`mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} size={22} strokeWidth={2.2} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] px-6 py-5 md:px-7">
                              {items.map((item) => (
                                <span key={item} className="rounded-full bg-[var(--color-surface-warm)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(23,23,23,.08)]">
                {expertise.map(([label, href]) => {
                  const active = href === "/markets/residential";
                  return (
                    <ButtonlessLink key={href} href={href} active={active}>
                      {label}
                    </ButtonlessLink>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function CommercialPage() {
  const [openScope, setOpenScope] = useState<number | null>(0);
  const expertise = [
    ["Design / Build", "/services/design-build"],
    ["Federal", "/markets/federal"],
    ["State & Local", "/markets/state-local"],
    ["Residential", "/markets/residential"],
    ["Commercial", "/markets/commercial"],
    ["Associations & Property Managers", "/markets/associations-property-managers"],
  ];
  const cards = [
    {
      title: "Built for commercial pressure",
      copy: "M&F understands the scheduling, coordination, and budget pressure commercial builders carry every day.",
      Icon: BriefcaseBusiness,
    },
    {
      title: "Experienced in-house crews",
      copy: "Decades of commercial field experience help M&F adapt quickly when a project takes an unexpected turn.",
      Icon: HardHat,
    },
    {
      title: "Flexible resources when schedules shift",
      copy: "Owned equipment and responsive teams help reduce disruption and keep demanding commercial projects moving.",
      Icon: Gauge,
    },
    {
      title: "Transparent partner from start to finish",
      copy: "Clear communication and efficient work help contain costs without compromising craftsman-quality results.",
      Icon: Handshake,
    },
  ];
  const scopes = [
    { title: "Highways, street and bridge construction", description: "Paving, maintenance, sidewalks, drainage, and traffic-related exterior scopes.", items: ["Paving", "Asphalt patching", "Highway maintenance", "Barrier wall repair", "Sidewalks", "Curb & gutter", "Drainage improvements", "Sewers", "Jersey walls"] },
    { title: "Industrial building construction", description: "Site, infrastructure, foundation, utility, demolition, and structural support for commercial environments.", items: ["Site work", "Epoxy repairs", "Demolition", "Flat work", "Infrastructure", "Foundations", "Structural walls", "Utilities", "Stormwater maintenance"] },
    { title: "Commercial and institutional building construction", description: "Core commercial construction support from site preparation through building-related concrete and utility work.", items: ["Site work", "Demolition", "Flat work", "Infrastructure", "Foundations", "Structural walls", "Utilities", "Stormwater maintenance"] },
    { title: "Heavy and civil engineering construction", description: "Civil, structural, retaining, repair, hardscape, and foundation scopes for demanding projects.", items: ["Infrastructure", "Site work", "Concrete services", "Retaining walls", "Caulking", "Patching", "Foundations", "Superstructure repairs", "Additions", "Porous paving", "Hardscapes"] },
    { title: "Poured concrete foundation and structure contractors", description: "Foundational concrete and flatwork services that support durable commercial outcomes.", items: ["Foundations", "Flat work", "Retaining walls", "Structural walls", "Concrete services", "Footings"] },
    { title: "Specialty trade and site preparation", description: "Responsive support for demolition, excavation, plan review, paving, hardscapes, and maintenance.", items: ["Demolition", "Excavation", "Driveways", "Plan review", "Sidewalks", "Crushing & screening", "Walks", "Patios", "Bond release", "Maintenance and repair", "Additions"] },
  ];

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 md:pt-40"
        style={{ backgroundImage: `linear-gradient(rgba(246,245,240,.80), rgba(246,245,240,.80)), url(${foundationImage})` }}
      >
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-10">
            <div>
              <div className="relative min-h-[34rem] p-1 text-[var(--color-ink)] md:p-2">
                <Reveal delay={0.02}>
                  <nav className="mb-12 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)]" aria-label="Breadcrumb">
                    <Link href="/" className="transition hover:text-[var(--color-ink)]">Home</Link>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span>Expertise</span>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span className="text-[var(--color-ink)]">Commercial</span>
                  </nav>
                </Reveal>
                <div className="flex min-h-[24rem] flex-col justify-center">
                  <Reveal delay={0.06}>
                    <div className="mb-5 w-fit rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-muted)] backdrop-blur">
                      Expertise
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">
                      Commercial construction
                    </h1>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-graphite)]">
                      Commercial builders need partners who can protect schedule, budget, and quality. M&F brings the knowledge, experience, and capability to help projects finish strong.
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/get-started">Start a commercial project</Button>
                      <Button href="/contact" variant="text">Talk with M&F <ArrowUpRight size={18} /></Button>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cards.map(({ title, copy, Icon }, index) => (
                  <Reveal key={title} delay={0.08 + index * 0.04}>
                    <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 shadow-[0_18px_60px_rgba(23,23,23,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-8">
                      <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)] transition-colors duration-300 group-hover:text-[var(--color-brand-yellow)]">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <h2 className="relative z-10 mt-14 max-w-lg font-display text-3xl leading-[1.05] tracking-[-.03em]">{title}</h2>
                      <p className="relative z-10 mt-4 leading-7 text-[var(--color-muted)]">{copy}</p>
                      <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.12}>
                <div className="my-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.09)]">
                      <img src={foundation2Image} alt="Commercial foundation work" className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                    </figure>
                    <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.09)]">
                      <img src={foundation3Image} alt="Commercial concrete construction" className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                    </figure>
                  </div>
                  <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.1)]">
                    <img src={foundationImage} alt="Commercial foundation and site work" className="h-[24rem] w-full object-cover transition duration-500 group-hover:scale-[1.025]" loading="lazy" decoding="async" />
                  </figure>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative my-8 overflow-hidden rounded-3xl bg-[var(--color-charcoal)] p-6 text-white shadow-[0_18px_60px_rgba(23,23,23,.12)] md:p-8">
                  <FaQuoteRight className="pointer-events-none absolute right-6 top-6 text-white/15" size={96} aria-hidden="true" />
                  <p className="relative z-10 max-w-3xl font-display text-3xl leading-[1.08] tracking-[-.03em]">
                    We are more than a part. We are your partner in every commercial project.
                  </p>
                  <div className="relative z-10 mt-6">
                    <Button href="/contact">Contact M&F</Button>
                  </div>
                </div>
              </Reveal>

              <div className="mb-5 grid gap-4 md:grid-cols-2">
                {scopes.map(({ title, description, items }, index) => {
                  const expanded = openScope === index;
                  return (
                    <Reveal key={title} delay={0.08 + index * 0.025}>
                      <article className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(23,23,23,.06)] transition duration-300 hover:-translate-y-1">
                        <button type="button" className={`flex ${expanded ? "" : "min-h-[13rem]"} w-full items-start gap-4 p-6 text-left md:p-7`} aria-expanded={expanded} onClick={() => setOpenScope(expanded ? null : index)}>
                          <Building2 className="mt-1 shrink-0 text-[var(--color-brand-yellow)]" size={24} strokeWidth={2} />
                          <div className="min-w-0 flex-1">
                            <h2 className="font-display text-2xl tracking-[-.03em] text-[var(--color-ink)]">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
                          </div>
                          <ChevronDown className={`mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} size={22} strokeWidth={2.2} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] px-6 py-5 md:px-7">
                              {items.map((item) => (
                                <span key={item} className="rounded-full bg-[var(--color-surface-warm)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]">{item}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(23,23,23,.08)]">
                {expertise.map(([label, href]) => {
                  const active = href === "/markets/commercial";
                  return (
                    <ButtonlessLink key={href} href={href} active={active}>
                      {label}
                    </ButtonlessLink>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function AssociationsPropertyManagersPage() {
  const [openScope, setOpenScope] = useState<number | null>(0);
  const expertise = [
    ["Design / Build", "/services/design-build"],
    ["Federal", "/markets/federal"],
    ["State & Local", "/markets/state-local"],
    ["Residential", "/markets/residential"],
    ["Commercial", "/markets/commercial"],
    ["Associations & Property Managers", "/markets/associations-property-managers"],
  ];
  const cards = [
    {
      title: "Done right for active communities",
      copy: "Projects are planned around families, businesses, access, safety, and the polished appearance people expect.",
      Icon: Users,
    },
    {
      title: "Minimal disruption by design",
      copy: "M&F works around peak commuter and business hours defined by the customer whenever possible.",
      Icon: Clock3,
    },
    {
      title: "Professional crews and vehicles",
      copy: "Trained crews arrive in identifiable company clothing and well-maintained M&F vehicles.",
      Icon: BadgeCheck,
    },
    {
      title: "Clean, orderly, polished sites",
      copy: "Job sites are kept orderly daily and left in pristine condition when work is complete.",
      Icon: ShieldCheck,
    },
  ];
  const scopes = [
    { title: "Community and commercial-center improvements", description: "Turn-key contracting for visible, occupied properties where appearance and access matter.", items: ["Design build new features", "Improve existing structures", "Concrete walks", "Gutters", "Curbs", "Repair and replacement"] },
    { title: "Asphalt, striping, and paving", description: "Exterior access improvements for roads, parking lots, crosswalks, and high-use paved areas.", items: ["Asphalt repairs", "Paving", "Roadway striping", "Crosswalk striping", "Parking-lot striping", "Asphalt patching", "Cracking hot seal"] },
    { title: "Decorative and common-area concrete", description: "Polished concrete work for common areas, pedestrian paths, crossings, and pool environments.", items: ["Decorative concrete", "Common areas", "Walkways", "Crosswalks", "Pool decks", "Sidewalks", "Patios"] },
    { title: "Seasonal and emergency response", description: "Responsive support for urgent needs and planned seasonal property operations.", items: ["Pre-treatment", "Snow removal", "Emergency response", "On-site visits", "Maintenance and repair"] },
    { title: "Site, civil, and stormwater work", description: "Practical construction support for drainage, utilities, demolition, foundations, and property infrastructure.", items: ["Site work", "Demolition", "Excavation", "Pond and stormwater maintenance", "Drainage improvements", "Utilities", "Foundations", "Retaining walls"] },
    { title: "Specialty trade support", description: "Flexible services for property managers who need reliable planning, repair, and exterior construction support.", items: ["Plan review", "Plan development", "Bond release", "Hardscapes", "Driveways", "Walks", "Additions", "Alterations"] },
  ];

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 md:pt-40"
        style={{ backgroundImage: `linear-gradient(rgba(246,245,240,.80), rgba(246,245,240,.80)), url(${propertiesImage})` }}
      >
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-10">
            <div>
              <div className="relative min-h-[34rem] p-1 text-[var(--color-ink)] md:p-2">
                <Reveal delay={0.02}>
                  <nav className="mb-12 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)]" aria-label="Breadcrumb">
                    <Link href="/" className="transition hover:text-[var(--color-ink)]">Home</Link>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span>Expertise</span>
                    <MdKeyboardArrowRight size={18} className="text-[var(--color-muted)]/60" />
                    <span className="text-[var(--color-ink)]">Associations & Property Managers</span>
                  </nav>
                </Reveal>
                <div className="flex min-h-[24rem] flex-col justify-center">
                  <Reveal delay={0.06}>
                    <div className="mb-5 w-fit rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-muted)] backdrop-blur">
                      Expertise
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h1 className="max-w-5xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">
                      Associations & property managers
                    </h1>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-graphite)]">
                      M&F considers a job done right the same way association boards and property managers do: perfect work, controlled budgets, and minimal disruption.
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/contact">Schedule an on-site visit</Button>
                      <Button href="/get-started" variant="text">Start a property project <ArrowUpRight size={18} /></Button>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cards.map(({ title, copy, Icon }, index) => (
                  <Reveal key={title} delay={0.08 + index * 0.04}>
                    <article className="group relative min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface-warm)] p-6 shadow-[0_18px_60px_rgba(23,23,23,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-8">
                      <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--color-ink)] shadow-[0_10px_30px_rgba(23,23,23,.08)] transition-colors duration-300 group-hover:text-[var(--color-brand-yellow)]">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <h2 className="relative z-10 mt-14 max-w-lg font-display text-3xl leading-[1.05] tracking-[-.03em]">{title}</h2>
                      <p className="relative z-10 mt-4 leading-7 text-[var(--color-muted)]">{copy}</p>
                      <span className="pointer-events-none absolute -bottom-8 -right-5 font-display text-[10rem] font-bold leading-none tracking-[-.08em] text-[var(--color-ink)]/5 transition group-hover:text-[var(--color-brand-yellow)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.12}>
                <div className="my-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.09)]">
                      <img src={propertiesImage} alt="Property management construction services" className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                    </figure>
                    <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.09)]">
                      <img src={properties3Image} alt="Paving and site-conscious property work" className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                    </figure>
                  </div>
                  <figure className="group overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(23,23,23,.1)]">
                    <img src={properties2Image} alt="Concrete walks and common-area flatwork" className="h-[24rem] w-full object-cover transition duration-500 group-hover:scale-[1.025]" loading="lazy" decoding="async" />
                  </figure>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative my-8 overflow-hidden rounded-3xl bg-[var(--color-charcoal)] p-6 text-white shadow-[0_18px_60px_rgba(23,23,23,.12)] md:p-8">
                  <FaQuoteRight className="pointer-events-none absolute right-6 top-6 text-white/15" size={96} aria-hidden="true" />
                  <p className="relative z-10 max-w-3xl font-display text-3xl leading-[1.08] tracking-[-.03em]">
                    M&F is your turn-key solution for quality, site-conscious contracting.
                  </p>
                  <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                    <Button href="/contact">Email Info@MFBuild.com</Button>
                    <Button href="tel:18556328453" variant="secondary">Emergency: 1-855-MFBUILD</Button>
                  </div>
                </div>
              </Reveal>

              <div className="mb-5 grid gap-4 md:grid-cols-2">
                {scopes.map(({ title, description, items }, index) => {
                  const expanded = openScope === index;
                  return (
                    <Reveal key={title} delay={0.08 + index * 0.025}>
                      <article className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(23,23,23,.06)] transition duration-300 hover:-translate-y-1">
                        <button type="button" className={`flex ${expanded ? "" : "min-h-[13rem]"} w-full items-start gap-4 p-6 text-left md:p-7`} aria-expanded={expanded} onClick={() => setOpenScope(expanded ? null : index)}>
                          <Store className="mt-1 shrink-0 text-[var(--color-brand-yellow)]" size={24} strokeWidth={2} />
                          <div className="min-w-0 flex-1">
                            <h2 className="font-display text-2xl tracking-[-.03em] text-[var(--color-ink)]">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
                          </div>
                          <ChevronDown className={`mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} size={22} strokeWidth={2.2} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] px-6 py-5 md:px-7">
                              {items.map((item) => (
                                <span key={item} className="rounded-full bg-[var(--color-surface-warm)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]">{item}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-32 lg:h-fit">
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(23,23,23,.08)]">
                {expertise.map(([label, href]) => {
                  const active = href === "/markets/associations-property-managers";
                  return (
                    <ButtonlessLink key={href} href={href} active={active}>
                      {label}
                    </ButtonlessLink>
                  );
                })}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

function ButtonlessLink({ href, active, children }: { href: string; active?: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      className={`block border-b border-[var(--color-border)] px-6 py-5 text-sm font-semibold last:border-b-0 ${active ? "bg-[rgba(242,195,0,.16)] text-[var(--color-ink)]" : "text-[var(--color-muted)] transition hover:bg-[rgba(242,195,0,.1)] hover:text-[var(--color-ink)]"}`}
      onClick={(e) => {
        if (href.startsWith("/")) {
          e.preventDefault();
          history.pushState(null, "", href);
          window.dispatchEvent(new PopStateEvent("popstate"));
          window.scrollTo(0, 0);
        }
      }}
    >
      {children}
    </a>
  );
}

export function MarketsPage() {
  return (
    <Listing title="Markets" copy="Who M&F serves and the confidence each audience needs before beginning a project.">
      <div className="grid gap-5 md:grid-cols-2">{markets.map((m) => <MarketCard key={m.id} m={m} />)}</div>
    </Listing>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.marketIds.includes(filter) || p.serviceIds.includes(filter));
  return (
    <PageShell>
      <PageHero title="Projects" copy="Proof should be structured, filterable, and factual. Placeholder records below must be replaced with verified M&F case studies." />
      <Section>
        <Container wide>
          <div className="mb-8 flex flex-wrap gap-3">
            <button onClick={() => setFilter("all")} className={`min-h-11 rounded-xl border px-4 font-semibold transition hover:border-[var(--color-ink)] ${filter === "all" ? "bg-[var(--color-ink)] text-white" : "bg-white"}`}>
              All
            </button>
            {[...markets, ...services].map((x) => (
              <button key={x.id} onClick={() => setFilter(x.id)} className={`min-h-11 rounded-xl border px-4 font-semibold transition hover:border-[var(--color-ink)] ${filter === x.id ? "bg-[var(--color-ink)] text-white" : "bg-white"}`}>
                {x.name}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{shown.map((p) => <ProjectCard key={p.id} p={p} />)}</div>
          {shown.length === 0 && <p className="border border-[var(--color-border)] bg-white p-6">No verified project currently matches this filter.</p>}
        </Container>
      </Section>
      <CTA />
    </PageShell>
  );
}

function Listing({ title, copy, children }: { title: string; copy: string; children: ReactNode }) {
  return (
    <PageShell>
      <PageHero title={title} copy={copy} />
      <Section><Container>{children}</Container></Section>
      <CTA />
    </PageShell>
  );
}

export function PageHero({ title, copy, backgroundImage, centered = false }: { title: string; copy: string; backgroundImage?: string; centered?: boolean }) {
  return (
    <section
      className={`border-b border-[var(--color-border)] py-28 md:py-36 ${backgroundImage ? "relative overflow-hidden bg-cover bg-center text-white" : "arch-grid bg-white text-[var(--color-ink)]"}`}
      style={backgroundImage ? { backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.52) 48%, rgba(0,0,0,.24) 100%), url(${backgroundImage})` } : undefined}
    >
      <Container>
        <div className={centered ? "mx-auto max-w-4xl text-center" : ""}>
          <h1 className="font-display text-[clamp(2.5rem,4.5vw,5rem)] leading-none tracking-[-.04em]">{title}</h1>
          <p className={`mt-6 max-w-3xl text-lg leading-8 ${centered ? "mx-auto" : ""} ${backgroundImage ? "text-white/78" : "text-[var(--color-muted)]"}`}>{copy}</p>
        </div>
      </Container>
    </section>
  );
}

export function DetailPage({ kind, item }: { kind: "service" | "market" | "project"; item: Service | Market | Project }) {
  const title = "name" in item ? item.name : "";
  return (
    <PageShell>
      <PageHero title={title} copy={item.summary} />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <aside className="border-t border-[var(--color-border)] pt-5">
              <p className="font-semibold">{kind.toUpperCase()} DETAIL</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Verified business facts only. Missing details are intentionally visible during development.</p>
            </aside>
            <article className="prose max-w-none">
              <h2 className="font-display text-4xl tracking-[-.03em]">Overview</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{("description" in item && item.description) || item.summary}</p>
              {"capabilities" in item && item.capabilities && (
                <ul className="mt-8 grid gap-3">
                  {item.capabilities.map((c) => (
                    <li className={`border-t border-[var(--color-border)] py-4 ${isReq(c) ? "text-[var(--color-warning)]" : "text-[var(--color-ink)]"}`} key={c}>{c}</li>
                  ))}
                </ul>
              )}
              {kind === "project" && <ProjectNarrative p={item as Project} />}
            </article>
          </div>
        </Container>
      </Section>
      <CTA />
    </PageShell>
  );
}

function ProjectNarrative({ p }: { p: Project }) {
  const fields: Array<keyof Pick<Project, "scope" | "challenge" | "approach" | "execution" | "result" | "status">> = ["scope", "challenge", "approach", "execution", "result", "status"];
  return (
    <div className="mt-10 grid gap-6">
      <ImageFrame src={p.images[0].src} alt={p.images[0].alt} />
      {fields.map((k) => (
        <section key={k} className="border-t border-[var(--color-border)] pt-5">
          <h3 className="font-display text-2xl capitalize">{k}</h3>
          <p className="mt-2 leading-7 text-[var(--color-muted)]">{String(p[k] || contentRequired)}</p>
        </section>
      ))}
    </div>
  );
}

export function AboutPage() {
  const foundingPrinciples = [
    "Do what needs to be done to get the job done right — even when the work is unexpected.",
    "Offer sensible alternatives instead of promises that cannot be kept.",
    "Never miss a deadline, be late for an appointment, or make an excuse.",
    "Anticipate obstacles and educate customers on better alternatives.",
    "Partner with tradespeople who share the same standards.",
    "Good enough is never good enough.",
    "Always find a way to exceed customer expectations.",
  ];
  const missionCards = [
    { title: "Craftsmanship without compromise", copy: "Customers should never have to choose between quality, price, and confidence.", Icon: Award },
    { title: "Partnership over transaction", copy: "M&F works to understand the intent behind every proposal before the first move is made.", Icon: Handshake },
    { title: "Smarter long-term outcomes", copy: "Training, materials, and methods are weighed for durability, value, and environmental responsibility.", Icon: Leaf },
  ];
  const values = [
    {
      title: "Quality that stands the test of time",
      copy: "Finish properly, consult when needed, suggest better ways forward, and never release work likely to fail before its expected life.",
    },
    {
      title: "The best example in the industry",
      copy: "Be professional. Accept responsibility. Stay informed. Care for customers, coworkers, partners, suppliers, and every job site.",
    },
    {
      title: "Good to the earth",
      copy: "Find local solutions, reduce carbon footprints, use proper disposal facilities, and work with partners who share the same ideals.",
    },
  ];
  const featuredLeaders = [
    { name: "Marcos Silva", role: "President", image: marcosSilvaImage, linkedin: "https://www.linkedin.com/in/marcossilva1/" },
    { name: "Tiago Silva", role: "Field Management", image: tiagoSilvaImage, linkedin: "https://www.linkedin.com/in/tiago-silva-040678104/" },
  ];
  const leaders = [
    { name: "Jose Fernandez", role: "Field Management", image: joseFernandezImage },
    { name: "Walter McNeal", role: "Field Management", image: walterMcNealImage },
    { name: "Chris Munro", role: "Field Management", image: chrisMunroImage },
    { name: "Carlos Novais", role: "Field Management", image: carlosNovaisImage },
    { name: "Jack Serra", role: "Field Management", image: jackSerraImage },
    { name: "John Caporuscio", role: "Estimating", image: johnCaporuscioImage },
    { name: "Ricardo Parra", role: "Estimating", image: ricardoParraImage },
    { name: "Shelly Burgbacher", role: "Accounting", image: shellyBurgbacherImage },
    { name: "Levi Burgbacher", role: "Accounting", image: leviBurgbacherImage },
  ];

  return (
    <PageShell>
      <section
        className="relative flex min-h-[52vh] items-center overflow-hidden bg-cover bg-center px-0 py-28 text-white md:min-h-[60vh] md:py-36"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/75" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-surface-warm)] to-transparent" />
        <Container wide className="relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal delay={0.04}>
              <p className="text-sm font-semibold uppercase tracking-[.22em] text-[var(--color-brand-yellow)]">Know more</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-[clamp(4.5rem,10vw,10rem)] leading-[.82] tracking-[-.075em]">
                About Us
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden !py-12 md:!py-16 xl:!py-20">
        <Container wide>
          <div className="grid gap-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <Reveal delay={0.04}>
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-[var(--color-muted)]">History</p>
                <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-.03em] md:text-5xl">The American Dream, made concrete.</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <dl className="grid gap-5 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3 lg:border-0 lg:pt-0">
                  {[
                    ["Fernando Silva", "Founder"],
                    ["Marcos Silva", "Continuing the legacy"],
                    ["Honesty & reliability", "Founding principles"],
                  ].map(([name, detail]) => (
                    <div key={name}>
                      <dt className="font-display text-lg leading-6 text-[var(--color-ink)]">{name}</dt>
                      <dd className="mt-2 text-sm leading-5 text-[var(--color-muted)]">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <div className="grid items-stretch gap-5 lg:grid-cols-[.85fr_1.25fr]">
              <Reveal delay={0.1} className="h-full">
                <figure className="flex h-full min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-white p-8 md:p-12">
                  <img src={historyLogoImage} alt="Historic M&F Concrete, Inc. crest" width={267} height={300} loading="lazy" decoding="async" className="h-auto max-h-[34rem] w-full max-w-sm object-contain" />
                </figure>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <Reveal delay={0.14} className="h-full">
                  <article className="h-full rounded-3xl bg-[rgb(248,241,210)] p-6 md:p-8">
                    <h3 className="font-display text-2xl leading-tight tracking-[-.03em]">One man’s vision.</h3>
                    <p className="mt-4 leading-7 text-[var(--color-graphite)]">Fernando Silva’s pursuit of the American Dream became M&F. His advantage: honesty, reliability, attention to detail, and quality results delivered consistently.</p>
                  </article>
                </Reveal>
                <Reveal delay={0.18} className="h-full">
                  <article className="h-full rounded-3xl bg-white p-6 md:p-8">
                    <h3 className="font-display text-2xl leading-tight tracking-[-.03em]">A legacy carried forward.</h3>
                    <p className="mt-4 leading-7 text-[var(--color-muted)]">After Fernando’s passing, his son Marcos Silva continued to lead M&F forward. Today, the company delivers end-to-end construction across the Mid-Atlantic, Northeast, and Southeast.</p>
                  </article>
                </Reveal>
                <Reveal delay={0.22} className="sm:col-span-2">
                  <article className="rounded-3xl bg-white p-6 md:p-8">
                    <h3 className="font-display text-2xl leading-tight tracking-[-.03em]">The promise behind every build.</h3>
                    <p className="mt-4 leading-7 text-[var(--color-muted)]">From Design/Build to field execution, M&F’s founding standards remain unchanged. Owned equipment, vehicles, and tools help our teams mobilize reliably—even on short notice.</p>
                    <details className="group mt-5 border-t border-[var(--color-border)]">
                      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 pt-3 font-semibold [&::-webkit-details-marker]:hidden">Our founding principles <ChevronDown size={20} className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary>
                      <ul className="mt-4 space-y-3 pb-2">
                        {foundingPrinciples.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[var(--color-ink)]" aria-hidden="true" />{item}</li>)}
                      </ul>
                    </details>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[var(--color-ink)] text-white !py-12 md:!py-16 xl:!py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
        <Container wide>
          <Reveal delay={0.04}>
            <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-[var(--color-brand-yellow)]">Mission</p>
                <h2 className="mt-5 max-w-4xl text-black font-display text-[clamp(3rem,7vw,7rem)] leading-[.88] tracking-[-.065em]">Restoring confidence in construction.</h2>
              </div>
              <p className="text-lg font-medium leading-8 text-[var(--color-muted)]">
                M&F is recognized for delivering better than anticipated results, on time, adding value, minding environmental impact, and working at a fair price.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {missionCards.map(({ title, copy, Icon }, index) => (
              <Reveal key={title} delay={0.08 + index * 0.04}>
                <article className="group relative min-h-80 overflow-hidden rounded-[2rem] border border-white/20 bg-white p-7 text-[var(--color-ink)] shadow-[0_24px_80px_rgba(0,0,0,.22)] transition hover:-translate-y-1 hover:bg-[rgb(248,241,210)]">
                  <Icon className="relative z-10 text-[var(--color-brand-yellow)]" size={32} />
                  <h3 className="relative z-10 mt-20 font-display text-4xl leading-[.98] tracking-[-.05em]">{title}</h3>
                  <p className="relative z-10 mt-5 font-medium leading-7 text-[var(--color-graphite)]">{copy}</p>
                  <span className="absolute -bottom-10 -right-4 font-display text-[11rem] font-bold leading-none text-[var(--color-ink)]/[.06] group-hover:text-[var(--color-brand-yellow)]/20">0{index + 1}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="!py-12 md:!py-16 xl:!py-20">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <Reveal delay={0.04}>
              <div className="lg:sticky lg:top-32">
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-[var(--color-muted)]">Values</p>
                <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] leading-[.9] tracking-[-.06em]">Modest roots. Unmoving standards.</h2>
                <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">M&F remains aligned with the values that earned customer confidence from the beginning.</p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {values.map(({ title, copy }, index) => (
                <Reveal key={title} delay={0.08 + index * 0.04}>
                  <article className="group relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_18px_60px_rgba(23,23,23,.06)] transition hover:-translate-y-1 hover:bg-[rgb(248,241,210)] md:p-9">
                    <div className="relative z-10 grid gap-6 md:grid-cols-[8rem_1fr] md:items-start">
                      <span className="font-display text-6xl leading-none tracking-[-.06em] text-[var(--color-brand-yellow)]">0{index + 1}</span>
                      <div>
                        <h3 className="font-display text-4xl leading-[1] tracking-[-.05em]">{title}</h3>
                        <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">{copy}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-surface-warm)] !py-12 md:!py-16 xl:!py-20">
        <Container wide>
          <Reveal delay={0.04}>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-[var(--color-muted)]">Leadership</p>
                <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] leading-[.9] tracking-[-.06em]">People carrying the standard forward.</h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--color-muted)]">Square profile cards are ready for final headshots, names, and role confirmations.</p>
            </div>
          </Reveal>
          <div className="mt-12 space-y-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:max-w-[calc(50%-0.75rem)]">
              {featuredLeaders.map((leader, index) => (
                <Reveal key={`${leader.name}-${leader.role}-${index}`} delay={0.08 + index * 0.04}>
                  <article className="group">
                    <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(23,23,23,.07)] transition group-hover:-translate-y-1">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} LinkedIn profile (opens in a new tab)`}
                        className="absolute right-4 top-4 grid size-10 place-items-center rounded-md bg-[var(--color-brand-yellow)] text-[var(--color-white)] shadow-[0_12px_30px_rgba(0,0,0,.2)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-yellow-hover)]"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                    </div>
                    <h3 className="mt-5 font-display text-2xl tracking-[-.03em]">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[.12em] text-[var(--color-muted)]">{leader.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((leader, index) => (
                <Reveal key={`${leader.name}-${leader.role}-${index}`} delay={0.08 + index * 0.04}>
                  <article className="group">
                    <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(23,23,23,.07)] transition group-hover:-translate-y-1">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-2xl tracking-[-.03em]">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[.12em] text-[var(--color-muted)]">{leader.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTA />
    </PageShell>
  );
}

export { CareersPage } from "./careers";

export { ContactPage } from "./contact";

export function GetStartedPage() {
  return (
    <PageShell>
      <PageHero title="Get Started" copy="Share concise project context so M&F can understand fit, scope, market, service need, location, and timing." />
      <Section><Container><ContactForm /></Container></Section>
    </PageShell>
  );
}

function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="border border-[var(--color-border)] bg-white p-6 md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" required />
        <Field label="Company" />
        <Field label="Email" required type="email" />
        <Field label="Project location" />
        {!compact && <><Select label="Market" options={markets.map((m) => m.name)} /><Select label="Service needed" options={services.map((s) => s.name)} /><Field label="Timeline" /><Field label="Budget, if appropriate" /></>}
      </div>
      <label className="mt-5 block font-semibold">
        Project description <span className="text-[var(--color-error)]">*</span>
        <textarea required className="mt-2 min-h-36 w-full border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-3 focus:bg-white" />
      </label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit">Submit Inquiry</Button>
        <p className="text-sm text-[var(--color-muted)]">Submission integration: {contentRequired}</p>
      </div>
      {sent && <p role="status" className="mt-5 border border-[var(--color-warning)] bg-[var(--color-surface-warm)] p-4 text-[var(--color-warning)]">Frontend validation is ready. Real submission endpoint is {contentRequired}</p>}
    </form>
  );
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block font-semibold">
      {label} {required && <span className="text-[var(--color-error)]">*</span>}
      <input required={required} type={type} className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-surface-warm)] px-3 focus:bg-white" />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block font-semibold">
      {label}
      <select className="mt-2 min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-surface-warm)] px-3 focus:bg-white">
        <option value="">Select one</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

export function PrivacyPage() {
  return (
    <PageShell>
      <PageHero title="Privacy Policy" copy="Legal/privacy copy is required before launch." />
      <Section><Container><p className="border border-[var(--color-border)] bg-white p-6 text-[var(--color-warning)]">{contentRequired}</p></Container></Section>
    </PageShell>
  );
}

export function NotFound() {
  return (
    <PageShell>
      <section className="flex min-h-screen items-center bg-[var(--color-surface-warm)] px-0 py-28 md:py-36">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <img
              src={notFoundImage}
              alt="404 page not found illustration"
              className="max-h-[52vh] w-auto object-contain"
              decoding="async"
            />
            <div className="mt-10">
              <h1 className="font-display text-[clamp(2.5rem,4.5vw,5rem)] leading-none tracking-[-.04em]">
                Page not found
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                The page you’re looking for may have moved, been removed, or never existed.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/">Go back</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
