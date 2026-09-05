import { ArrowUpRight } from "lucide-react";
import designImage from "../assets/design.webp";
import foundationImage from "../assets/foundation.webp";
import paveworkImage from "../assets/pavework.webp";
import propertiesImage from "../assets/properties.webp";
import residentialImage from "../assets/residential.webp";
import stateImage from "../assets/state.webp";
import type { Market, Project, Service } from "../types/content";
import { ImageFrame, Link } from "./ui";

const serviceImages: Record<string, string> = {
  "design-build": designImage,
  "government-construction": stateImage,
  "commercial-residential": residentialImage,
  "civil-infrastructure": paveworkImage,
  "concrete-structural": foundationImage,
  "managed-services": propertiesImage,
};

export function ServiceCard({ s, index = 0, variant = "row" }: { s: Service; index?: number; variant?: "row" | "overlay" }) {
  if (variant === "overlay") {
    return (
      <article className="group">
        <Link href={`/services/${s.slug}`} className="relative block min-h-[25rem] overflow-hidden rounded-3xl md:min-h-[30rem]">
          <img
            src={serviceImages[s.id]}
            alt={`${s.name} service background`}
            className="absolute inset-0 h-full w-full object-cover grayscale-[10%] transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
                        decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.8)_0%,rgba(0,0,0,.5)_36%,rgba(0,0,0,.16)_68%,transparent_100%)]" />
          <span className="absolute right-5 top-5 flex size-14 items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-sm transition duration-300 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:bg-white/55">
            <ArrowUpRight size={34} strokeWidth={2.7} />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--color-brand-yellow)]">
              {s.category}
            </p>
            <h3 className="mt-3 min-h-[4.5rem] font-display text-3xl leading-[1.08] tracking-[-.03em]">
              {s.name}
            </h3>
            <p className="mt-3 min-h-[5.25rem] max-w-md leading-7 text-white/78">
              {s.summary}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <Link
      href={`/services/${s.slug}`}
      className="service-row group grid gap-4 border-t border-[var(--color-border)] px-3 py-7 transition-colors duration-300 md:grid-cols-[5.5rem_1fr_auto] md:items-center md:px-5"
    >
      <span className="service-number font-display text-5xl font-bold leading-none tracking-[-.06em] text-[var(--color-muted)] md:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="max-w-3xl">
        <h3 className="font-display text-2xl tracking-[-.02em]">{s.name}</h3>
        <p className="mt-2 max-w-2xl leading-7 text-[var(--color-muted)]">{s.summary}</p>
      </div>
      <span className="flex size-14 items-center justify-center justify-self-start text-[var(--color-ink)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 md:justify-self-end">
        <ArrowUpRight size={90} strokeWidth={2} />
      </span>
    </Link>
  );
}

export function MarketCard({ m }: { m: Market }) {
  return (
    <article className="flex min-h-72 flex-col justify-between border border-[var(--color-border)] bg-white p-6">
      <div>
        <p className="text-sm font-semibold text-[var(--color-muted)]">{m.audience}</p>
        <h3 className="mt-6 font-display text-3xl tracking-[-.03em]">{m.name}</h3>
        <p className="mt-4 leading-7 text-[var(--color-muted)]">{m.summary}</p>
      </div>
      <Link href={`/markets/${m.slug}`} className="mt-8 font-semibold">
        View market →
      </Link>
    </article>
  );
}

export function ProjectCard({ p, variant = "default" }: { p: Project; variant?: "default" | "overlay" }) {
  if (variant === "overlay") {
    return (
      <article className="group">
        <Link href={`/projects/${p.slug}`} className="relative block min-h-[28rem] overflow-hidden rounded-3xl md:min-h-[34rem]">
          <img
            src={p.images[0].src}
            alt={p.images[0].alt}
            className="absolute inset-0 h-full w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
                        decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.78)_0%,rgba(0,0,0,.48)_32%,rgba(0,0,0,.12)_66%,transparent_100%)]" />
          <span className="absolute right-5 top-5 flex size-14 items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-sm transition duration-300 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:bg-white/55">
            <ArrowUpRight size={34} strokeWidth={2} />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
            <h3 className="min-h-[4.5rem] font-display text-3xl leading-[1.08] tracking-[-.03em]">
              {p.name}
            </h3>
            <p className="mt-3 min-h-[5.25rem] max-w-md leading-7 text-white/78">
              {p.summary}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group bg-white">
      <Link href={`/projects/${p.slug}`} className="block">
        <ImageFrame src={p.images[0].src} alt={p.images[0].alt} />
        <div className="border-x border-b border-[var(--color-border)] p-5">
          <h3 className="font-display text-2xl tracking-[-.02em]">{p.name}</h3>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{p.location}</p>
          <p className="mt-4 leading-7 text-[var(--color-muted)]">{p.summary}</p>
          <span className="mt-5 inline-block font-semibold group-hover:underline">Read case study →</span>
        </div>
      </Link>
    </article>
  );
}
