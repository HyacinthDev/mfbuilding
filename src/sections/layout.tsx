import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { FaChevronDown, FaEnvelope, FaFacebookF, FaLinkedinIn, FaLocationDot, FaPhone, FaPrint } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { contentRequired, markets, services } from "../data/content";
import logoSrc from "../assets/logo.webp";
import { Button, Container, Link } from "./ui";

export const nav = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

const marketNav = [
  ["Design / Build", "/services/design-build"],
  ["Federal", "/markets/federal"],
  ["State & Local", "/markets/state-local"],
  ["Commercial", "/markets/commercial"],
  ["Residential", "/markets/residential"],
  ["Associations & Property Managers", "/markets/associations-property-managers"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const marketsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function closeMarkets(e: MouseEvent) {
      if (!marketsRef.current?.contains(e.target as Node)) {
        setMarketsOpen(false);
      }
    }

    document.addEventListener("mousedown", closeMarkets);
    document.addEventListener("mousemove", closeMarkets);
    return () => {
      document.removeEventListener("mousedown", closeMarkets);
      document.removeEventListener("mousemove", closeMarkets);
    };
  }, []);

  const currentPath = location.pathname;
  const navLinkClass = (href: string) => {
    const isDropdownRoute = currentPath.startsWith("/markets/") || currentPath === "/services/design-build";
    const active = !isDropdownRoute && (currentPath === href || currentPath.startsWith(`${href}/`));
    return `bg-[linear-gradient(var(--color-brand-yellow),var(--color-brand-yellow))] ${active ? "bg-[length:100%_2px] bg-[position:0%_100%] text-[var(--color-ink)]" : "bg-[length:0%_2px] bg-[position:100%_100%] text-[var(--color-graphite)]"} bg-no-repeat pb-1 text-sm font-semibold transition-[background-size,color] duration-300 hover:bg-[length:100%_2px] hover:bg-[position:0%_100%] hover:text-[var(--color-ink)]`;
  };

  const marketLinkClass = (href: string) => {
    const active = currentPath === href;
    return `rounded-2xl px-4 py-3 text-sm font-semibold transition ${active ? "bg-[rgba(242,195,0,.18)] text-[var(--color-ink)]" : "text-[var(--color-graphite)] hover:bg-[rgba(242,195,0,.14)] hover:text-[var(--color-ink)]"}`;
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[80%] -translate-x-1/2 rounded-3xl border border-[var(--color-border)] bg-[rgba(246,245,240,.92)] shadow-[0_18px_60px_rgba(23,23,23,.12)] backdrop-blur">
      <div className="px-5 md:px-7">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="inline-flex min-h-11 items-center" aria-label="M&F home">
            <img src={logoSrc} alt="M&F" className="h-16 w-auto object-contain" decoding="async" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.slice(0, 1).map(([l, h]) => (
              <Link key={h} href={h} className={navLinkClass(h)}>
                {l}
              </Link>
            ))}
            <div
              ref={marketsRef}
              className="group relative"
              onMouseEnter={() => setMarketsOpen(true)}
              onMouseLeave={() => setMarketsOpen(false)}
            >
              <button
                type="button"
                className="relative -top-[3px] inline-flex items-center gap-2 bg-[linear-gradient(var(--color-brand-yellow),var(--color-brand-yellow))] bg-[length:0%_2px] bg-[position:100%_100%] bg-no-repeat pb-1 text-sm font-semibold leading-none text-[var(--color-graphite)] transition-[background-size,color] duration-300 hover:bg-[length:100%_2px] hover:bg-[position:0%_100%] hover:text-[var(--color-ink)]"
                aria-expanded={marketsOpen}
                onClick={() => setMarketsOpen((current) => !current)}
              >
                Expertise <FaChevronDown size={11} className={`transition-transform duration-300 ${marketsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition duration-300 ${marketsOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}>
                <div className="rounded-3xl border border-[var(--color-border)] bg-[rgba(246,245,240,.96)] p-3 shadow-[0_18px_60px_rgba(23,23,23,.14)] backdrop-blur">
                  <div className="grid gap-1">
                    {marketNav.map(([label, href]) => (
                      <Link onClick={() => setMarketsOpen(false)} key={href} href={href} className={marketLinkClass(href)}>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {nav.slice(1).map(([l, h]) => (
              <Link key={h} href={h} className={navLinkClass(h)}>
                {l}
              </Link>
            ))}
            <Button href="/get-started">Get Started</Button>
          </nav>
          <button
            className="min-h-11 rounded-xl px-3 font-semibold transition hover:bg-black/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              setOpen(!open);
              if (open) setMobileMarketsOpen(false);
            }}
          >
            {open ? <HiX size={26} aria-label="Close menu" /> : <HiMenuAlt3 size={28} aria-label="Open menu" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-[calc(100%+.75rem)] z-50 max-h-[calc(100vh-8rem)] overflow-auto rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-5 shadow-[0_18px_60px_rgba(23,23,23,.12)] lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile primary">
            {nav.slice(0, 1).map(([l, h]) => (
              <Link onClick={() => setOpen(false)} key={h} href={h} className="border-b border-[var(--color-border)] py-5 font-display text-3xl">
                {l}
              </Link>
            ))}
            <div className="border-b border-[var(--color-border)] py-5">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left font-display text-3xl leading-none"
                aria-expanded={mobileMarketsOpen}
                onClick={() => setMobileMarketsOpen((current) => !current)}
              >
                Expertise
                <FaChevronDown size={18} className={`transition-transform duration-300 ${mobileMarketsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileMarketsOpen && (
                <div className="mt-4 grid gap-2">
                  {marketNav.map(([label, href]) => (
                    <Link
                      onClick={() => {
                        setOpen(false);
                        setMobileMarketsOpen(false);
                      }}
                      key={href}
                      href={href}
                      className={`${marketLinkClass(href)} bg-white/70`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {nav.slice(1).map(([l, h]) => (
              <Link onClick={() => setOpen(false)} key={h} href={h} className="border-b border-[var(--color-border)] py-5 font-display text-3xl">
                {l}
              </Link>
            ))}
            <div className="pt-6">
              <Button href="/get-started">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Foot({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 font-semibold">{title}</h3>
      <ul className="space-y-3 text-sm text-white/65">
        {items.map(([l, h]) => (
          <li key={h}>
            <Link href={h} className="hover:text-white">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebookF },
    { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedinIn },
    { label: "Email M&F", href: "mailto:info@mfbuild.com", Icon: FaEnvelope },
  ];

  return (
    <footer className="bg-[var(--color-ink)] py-14 text-white">
      <Container wide>
        <div className="grid gap-10 md:grid-cols-[1.15fr_2.25fr]">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center" aria-label="M&F home">
              <img src={logoSrc} alt="M&F" className="h-14 w-auto object-contain" loading="lazy" decoding="async" />
            </Link>
            <p className="mt-4 max-w-md text-white/70">
              M&F brings decades of experience, expertise, and a commitment to excellence to every construction project.
            </p>
            <div className="mt-6 flex gap-3" aria-label="Social media links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/75 transition hover:-translate-y-1 hover:border-[var(--color-brand-yellow)] hover:bg-[rgba(242,195,0,.14)] hover:text-[var(--color-brand-yellow)]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-4">
            <Foot title="Explore" items={nav} />
            <Foot title="Services" items={services.slice(0, 4).map((s) => [s.name, `/services/${s.slug}`])} />
            <Foot title="Expertise" items={markets.slice(0, 4).map((m) => [m.name, `/markets/${m.slug}`])} />
            <div>
              <h3 className="mb-4 font-semibold">Contact</h3>
              <ul className="space-y-4 text-sm text-white/65">
                <li>
                  <a href="tel:8556328453" className="flex gap-3 hover:text-white">
                    <FaPhone className="mt-1 text-white/45" />
                    <span>(855) MF-BUILD</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mfbuild.com" className="flex gap-3 hover:text-white">
                    <FaEnvelope className="mt-1 text-white/45" />
                    <span>info@mfbuild.com</span>
                  </a>
                </li>
                <li className="flex gap-3">
                  <FaLocationDot className="mt-1 shrink-0 text-white/45" />
                  <span>7720 Bethlehem Rd<br />Manassas, VA</span>
                </li>
                <li>
                  <a href="tel:5713798761" className="flex gap-3 hover:text-white">
                    <FaPhone className="mt-1 text-white/45" />
                    <span>Local (571) 379-8761</span>
                  </a>
                </li>
                <li className="flex gap-3">
                  <FaPrint className="mt-1 text-white/45" />
                  <span>Fax (703) 330-7183</span>
                </li>
              </ul>
              <Link href="/privacy-policy" className="mt-5 block text-sm text-white/60 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
