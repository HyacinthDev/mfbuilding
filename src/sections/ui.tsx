import { useState } from "react";
import type { AnimationEventHandler, MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

export type ButtonVariant = "primary" | "secondary" | "secondaryLight" | "text";

export const isReq = (v?: string) => !!v?.includes("CONTENT REQUIRED");

export function Link({
  href,
  children,
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  onAnimationEnd,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  onAnimationEnd?: AnimationEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={onAnimationEnd}
      onClick={(e) => {
        if (href.startsWith("/")) {
          e.preventDefault();
          history.pushState(null, "", href);
          window.dispatchEvent(new PopStateEvent("popstate"));
          window.scrollTo(0, 0);
          onClick?.();
        }
      }}
    >
      {children}
    </a>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  type?: "button" | "submit";
}) {
  const [swipeState, setSwipeState] = useState<"idle" | "entering" | "leaving">("idle");
  const cls =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-brand-yellow)] px-5 py-3 font-semibold text-[var(--color-charcoal)] transition hover:-translate-y-1 hover:bg-[var(--color-brand-yellow-hover)] active:translate-y-px"
      : variant === "secondary"
        ? "inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--color-ink)] bg-white px-5 py-3 font-semibold text-[var(--color-ink)] transition hover:-translate-y-1 hover:bg-[var(--color-ink)] hover:text-white"
        : variant === "secondaryLight"
          ? `btn-secondary-light is-${swipeState} inline-flex min-h-11 items-center justify-center rounded-xl border border-white/80 bg-black/20 px-5 py-3 font-semibold text-white hover:-translate-y-1`
          : `btn-secondary-ink is-${swipeState} inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--color-ink)] bg-transparent px-5 py-3 font-semibold text-[var(--color-ink)] hover:-translate-y-1`;
  const swipeHandlers =
    variant === "secondaryLight" || variant === "text"
      ? {
          onMouseEnter: () => setSwipeState("entering"),
          onMouseLeave: () => setSwipeState("leaving"),
          onAnimationEnd: () => {
            if (swipeState === "leaving") setSwipeState("idle");
          },
        }
      : {};
  return href ? (
    <Link href={href} className={cls} {...swipeHandlers}>
      <span className="relative z-10 inline-flex items-center gap-2 leading-none">{children}</span>
    </Link>
  ) : (
    <button type={type} className={cls} {...swipeHandlers}>
      <span className="relative z-10 inline-flex items-center gap-2 leading-none">{children}</span>
    </button>
  );
}

export function Container({
  children,
  wide = false,
  className = "",
}: {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return <div className={`${wide ? "container-wide" : "container-x"} ${className}`}>{children}</div>;
}

export function Section({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`${dark ? "bg-[var(--color-charcoal)] text-white" : "bg-[var(--color-surface-warm)] text-[var(--color-ink)]"} py-20 md:py-28 xl:py-36 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  copy,
  action,
}: {
  title: string;
  copy?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1.1fr_.9fr] md:items-end">
      <h2 className="font-display text-[clamp(2rem,3.5vw,3.75rem)] leading-[1.03] tracking-[-.03em] text-balance">
        {title}
      </h2>
      <div className="max-w-xl text-base leading-7 text-[var(--color-muted)] md:justify-self-end">
        {copy && <p>{copy}</p>} {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ImageFrame({
  src,
  alt,
  placeholder = true,
}: {
  src: string;
  alt: string;
  placeholder?: boolean;
}) {
  return (
    <figure className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
      <img
        src={src}
        alt={alt}
        className="aspect-[4/3] h-full w-full object-cover grayscale-[15%]"
        loading="lazy"
                        decoding="async"
      />
      {placeholder && (
        <figcaption className="absolute bottom-3 left-3 bg-[rgba(23,23,23,.78)] px-3 py-2 text-xs font-semibold text-white">
          Temporary placeholder imagery
        </figcaption>
      )}
    </figure>
  );
}
