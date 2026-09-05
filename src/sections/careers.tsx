import { useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, ChevronDown, HeartPulse, PiggyBank, Palmtree, UsersRound } from "lucide-react";
import { careerOpenings } from "../data/careers";
import estimatorImage from "../assets/estimator.webp";
import defaultImage from "../assets/heroSectionImage.webp";
import { PageShell } from "./layout";
import { Button, Container, Reveal } from "./ui";

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-ink)] outline-offset-4 focus:border-[var(--color-ink)]";
const applicationEndpoint = import.meta.env.VITE_CAREERS_APPLICATION_ENDPOINT as string | undefined;

export function CareersPage() {
  const [position, setPosition] = useState("");
  const positionInput = useRef<HTMLSelectElement>(null);
  function apply(id = "") {
    setPosition(id);
    document.getElementById("career-application")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    positionInput.current?.focus({ preventScroll: true });
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--color-charcoal)] pb-20 pt-40 text-white md:pb-24 md:pt-44">
        <img src={defaultImage} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/70" />
        <Container wide className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <Reveal delay={0.04}><p className="text-sm font-semibold uppercase tracking-[.16em] text-[var(--color-brand-yellow)]">Careers at M&F · Now hiring</p></Reveal>
              <Reveal delay={0.1}><h1 className="mt-6 max-w-3xl font-display text-[clamp(3.25rem,6.5vw,6rem)] leading-[1.02] tracking-[-.04em]">Build your future.<br />Build with us.</h1></Reveal>
            </div>
            <Reveal delay={0.18}>
              <p className="max-w-lg text-lg leading-8 text-white/85">Bring your eye for detail, communication skills, and drive to learn to a family-owned company that celebrates teamwork.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => apply()} className="min-h-12 rounded-xl bg-[var(--color-brand-yellow)] px-6 py-3 font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-brand-yellow-hover)]">Apply now <ArrowUpRight className="ml-2 inline" size={18} /></button>
                <Button href="#hot-jobs" variant="secondaryLight">Explore roles <ArrowDown size={18} /></Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="hot-jobs" className="scroll-mt-28 bg-[var(--color-surface-warm)] py-20 md:py-28">
        <Container wide>
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="text-sm font-semibold uppercase tracking-[.16em] text-[var(--color-muted)]">Hot jobs</p><h2 className="mt-4 font-display text-4xl tracking-[-.03em] md:text-5xl">Find your next role.</h2></div>
              <p className="max-w-md leading-7 text-[var(--color-muted)]">Explore the responsibilities and requirements, then apply directly on this page.</p>
            </div>
          </Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            {careerOpenings.map((job, index) => (
              <Reveal key={job.id} delay={index * 0.05}>
                <article className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white">
                  <div className="relative h-52 overflow-hidden md:h-60">
                    <img src={job.vdot ? estimatorImage : defaultImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    <span className="absolute bottom-4 left-5 rounded-lg bg-[var(--color-brand-yellow)] px-3 py-2 text-xs font-semibold uppercase tracking-[.08em] text-[var(--color-ink)]">{job.specialty}</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-3xl leading-tight tracking-[-.03em]">{job.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--color-muted)]">{job.summary}</p>
                    <ul className="my-6 flex flex-wrap gap-2" aria-label="Key qualifications">{job.highlights.map((item) => <li key={item} className="rounded-lg bg-[var(--color-surface-warm)] px-3 py-2 text-xs font-medium text-[var(--color-graphite)]">{item}</li>)}</ul>
                    <details className="group border-y border-[var(--color-border)]">
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">Responsibilities & requirements <ChevronDown size={20} className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary>
                      <div className="space-y-6 pb-6">
                        {[{ title: "What you’ll do", items: job.duties }, { title: "What you’ll bring", items: job.requirements }].map((group) => <div key={group.title}><h4 className="mb-3 font-semibold">{group.title}</h4><ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
                      </div>
                    </details>
                    <button onClick={() => apply(job.id)} className="mt-6 flex min-h-12 items-center gap-3 rounded-xl bg-[var(--color-brand-yellow)] px-5 py-3 font-semibold transition hover:bg-[var(--color-brand-yellow-hover)]" aria-label={`Apply for ${job.title}`}>Apply for this role <ArrowUpRight size={18} /></button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-charcoal)] py-20 text-white md:py-28">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal><UsersRound size={32} className="text-[var(--color-brand-yellow)]" /><p className="mt-6 text-sm font-semibold uppercase tracking-[.16em] text-white/70">Careers @ M&F</p><h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-[-.03em] md:text-5xl">Family-owned.<br />Team-oriented.</h2><p className="mt-6 max-w-lg leading-8 text-white/80">M&F is a family-owned and family-oriented company that celebrates and rewards teamwork. As we grow, we’re looking for people ready to learn and innovate in an ever-changing industry.</p></Reveal>
            <div className="divide-y divide-white/20 border-y border-white/20">
              {[{ title: "401(k) plan", copy: "Plan for your future.", Icon: PiggyBank }, { title: "Healthcare", copy: "Support for your health.", Icon: HeartPulse }, { title: "Paid vacations", copy: "Time away from work.", Icon: Palmtree }].map(({ title, copy, Icon }) => <div key={title} className="flex items-center gap-6 py-8"><Icon size={28} className="shrink-0 text-[var(--color-brand-yellow)]" /><div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-white/75">{copy}</p></div></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section id="career-application" className="scroll-mt-28 bg-[var(--color-surface-warm)] py-20 md:py-28">
        <Container wide>
          <div className="grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div className="lg:sticky lg:top-32"><p className="text-sm font-semibold uppercase tracking-[.16em] text-[var(--color-muted)]">Your next step</p><h2 className="mt-4 font-display text-4xl tracking-[-.03em] md:text-5xl">Apply to M&F.</h2><p className="mt-6 max-w-sm leading-7 text-[var(--color-muted)]">Tell us about your experience and the work you’d like to do. Fields marked * are required.</p></div>
            <ApplicationForm position={position} setPosition={setPosition} positionInput={positionInput} />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

function ApplicationForm({ position, setPosition, positionInput }: { position: string; setPosition: (value: string) => void; positionInput: React.RefObject<HTMLSelectElement | null> }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fileError, setFileError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!applicationEndpoint || fileError || status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(applicationEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Application could not be sent");
      setStatus("sent");
      form.reset();
      setPosition("");
    } catch { setStatus("error"); }
  }
  return (
    <form onSubmit={submit} className="rounded-3xl border border-[var(--color-border)] bg-white p-6 md:p-9">
      {!applicationEndpoint && <p className="mb-7 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-4 text-sm leading-6" role="note">Online applications are not accepting submissions yet. You can explore the form, but nothing will be sent.</p>}
      <fieldset disabled={status === "sending"} className="space-y-6 disabled:opacity-60">
        <legend className="mb-6 font-display text-2xl">Contact & experience</legend>
        <label className="block text-sm font-semibold">Position *<select ref={positionInput} name="position" required value={position} onChange={(event) => { setPosition(event.target.value); setStatus("idle"); }} className={fieldClass}><option value="">Choose a position</option>{careerOpenings.map((job) => <option key={job.id} value={job.id}>{job.title}{job.vdot ? " — VDOT" : ""}</option>)}<option value="general">General application</option></select></label>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold">First name *<input name="firstName" autoComplete="given-name" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\p{N}/gu, ""); }} required maxLength={100} className={fieldClass} /></label>
          <label className="block text-sm font-semibold">Last name *<input name="lastName" autoComplete="family-name" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\p{N}/gu, ""); }} required maxLength={100} className={fieldClass} /></label>
          <label className="block text-sm font-semibold">Email *<input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} /></label>
          <label className="block text-sm font-semibold">Phone *<input name="phone" type="tel" autoComplete="tel" required maxLength={40} className={fieldClass} /></label>
        </div>
        <label className="block text-sm font-semibold">City & state *<input name="location" required maxLength={200} className={fieldClass} /></label>
        <label className="block text-sm font-semibold">Relevant experience *<textarea name="experience" required maxLength={5000} rows={5} className={fieldClass} aria-describedby="experience-hint" /><span id="experience-hint" className="mt-2 block font-normal text-[var(--color-muted)]">Include relevant roles, skills, and years of experience.</span></label>
        <label className="block text-sm font-semibold">Résumé <span className="font-normal text-[var(--color-muted)]">(optional)</span><input name="resume" type="file" accept=".pdf,.doc,.docx" aria-describedby="resume-hint resume-error" aria-invalid={!!fileError} className="mt-3 block w-full min-w-0 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--color-surface-warm)] file:px-4 file:py-3 file:font-semibold" onChange={(event) => {
          const file = event.target.files?.[0];
          const invalid = file && (!/\.(pdf|docx?)$/i.test(file.name) || file.size > 5 * 1024 * 1024);
          setFileError(invalid ? "Choose a PDF, DOC, or DOCX file smaller than 5 MB." : "");
          event.target.setCustomValidity(invalid ? "Choose a PDF, DOC, or DOCX file smaller than 5 MB." : "");
        }} /><span id="resume-hint" className="mt-2 block font-normal text-[var(--color-muted)]">PDF, DOC, or DOCX · Maximum 5 MB</span><span id="resume-error" className="mt-2 block text-[var(--color-error)]" role="alert">{fileError}</span></label>
        <label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" name="consent" required className="mt-1 size-5 shrink-0 accent-[var(--color-ink)]" /><span>I confirm that this information is accurate and agree to be contacted about my application. *</span></label>
        <button type="submit" disabled={!applicationEndpoint || !!fileError} className="min-h-12 rounded-xl bg-[var(--color-brand-yellow)] px-6 py-3 font-semibold transition hover:bg-[var(--color-brand-yellow-hover)] disabled:cursor-not-allowed disabled:opacity-50">{status === "sending" ? "Sending application…" : "Submit application"}</button>
      </fieldset>
      <div aria-live="polite" className="mt-4 text-sm leading-6">
        {status === "sent" && <p className="text-[var(--color-success)]">Your application was sent successfully. Thank you for your interest in M&F.</p>}
        {status === "error" && <p role="alert" className="text-[var(--color-error)]">We couldn’t send your application. Your entries are still here. Please try again.</p>}
      </div>
    </form>
  );
}
