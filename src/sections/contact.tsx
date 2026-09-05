import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import contactImage from "../assets/services.webp";
import { PageShell } from "./layout";
import { Container, Reveal, Link } from "./ui";

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 font-normal text-[var(--color-ink)] focus:border-[var(--color-ink)]";
const directions = "https://www.google.com/maps/search/?api=1&query=7720+Bethlehem+Rd+Manassas+VA";

export function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--color-charcoal)] pb-20 pt-40 text-white md:pb-24 md:pt-44">
        <img src={contactImage} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/70" />
        <Container wide className="relative">
          <Reveal delay={0.04}><h1 className="max-w-4xl font-display text-[clamp(3.25rem,6vw,6rem)] leading-[1.02] tracking-[-.04em]">Let’s talk about<br />your next project.</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-xl text-lg leading-8 text-white/85">A question, a new build, or work on an existing property. Get in touch with M&F and tell us what you have in mind.</p></Reveal>
        </Container>
      </section>

      <section className="bg-[var(--color-surface-warm)] py-20 md:py-28">
        <Container wide>
          <div className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <Reveal><h2 className="font-display text-4xl tracking-[-.03em]">Get in touch.</h2><p className="mt-4 max-w-sm leading-7 text-[var(--color-muted)]">Speak with us directly or send a project inquiry using the form.</p></Reveal>
              <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                <div className="flex gap-4 py-7"><Phone size={22} className="mt-1 shrink-0" aria-hidden="true" /><div><h3 className="text-sm font-semibold text-[var(--color-muted)]">Call M&F</h3><a href="tel:+18556328453" className="mt-2 inline-block font-display text-2xl hover:underline">(855) MF-BUILD</a><p className="mt-2 text-sm text-[var(--color-muted)]">Local: <a href="tel:+15713798761" className="underline underline-offset-4">(571) 379-8761</a></p><p className="mt-2 text-sm text-[var(--color-muted)]">Fax: (703) 330-7183</p></div></div>
                <div className="flex gap-4 py-7"><Mail size={22} className="mt-1 shrink-0" aria-hidden="true" /><div><h3 className="text-sm font-semibold text-[var(--color-muted)]">Email us</h3><a href="mailto:info@mfbuild.com" className="mt-2 inline-block break-all font-display text-2xl hover:underline">info@mfbuild.com</a></div></div>
                <div className="flex gap-4 py-7"><MapPin size={22} className="mt-1 shrink-0" aria-hidden="true" /><div><h3 className="text-sm font-semibold text-[var(--color-muted)]">Find us in Manassas</h3><address className="mt-2 text-lg not-italic leading-7">7720 Bethlehem Rd<br />Manassas, VA</address><a href={directions} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4">Get directions <ArrowUpRight size={17} /><span className="sr-only">(opens in a new tab)</span></a></div></div>
              </div>
              <div className="mt-8 rounded-2xl bg-[var(--color-charcoal)] p-6 text-white"><h3 className="font-display text-2xl">Looking to join the team?</h3><p className="mt-3 leading-7 text-white/80">Explore our openings and apply through the careers page.</p><Link href="/careers" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-brand-yellow)] hover:underline">Explore careers <ArrowUpRight size={18} /></Link></div>
            </div>
            <Reveal delay={0.08}><InquiryForm /></Reveal>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [messageLength, setMessageLength] = useState(0);
  function validate(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
    field.setCustomValidity("");
    const value = field.value.trim();
    if (field.name === "name" && (value.length < 2 || value.length > 100 || !/\p{L}/u.test(value))) {
      field.setCustomValidity("Enter your name using 2–100 characters, including at least one letter.");
    }
    if (["company", "location"].includes(field.name) && field.value && value.length < 2) {
      field.setCustomValidity("Enter at least 2 non-space characters, or leave this optional field empty.");
    }
    if (field.name === "phone" && field.value) {
      const digits = value.replace(/\D/g, "");
      if (!/^\+?[\d\s().-]+$/.test(value) || digits.length < 7 || digits.length > 15) {
        field.setCustomValidity("Enter 7–15 digits. Spaces, parentheses, hyphens, dots and a leading + are allowed.");
      }
    }
    if (field.name === "message" && (value.length < 20 || value.length > 2000)) {
      field.setCustomValidity("Please use 20–2,000 characters to describe your inquiry. Leading and trailing spaces do not count.");
    }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint || status === "sending") return;
    const form = event.currentTarget;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select").forEach(validate);
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") data.set(key, value.trim());
    }
    setStatus("sending");
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Unable to send inquiry");
      setStatus("sent");
      form.reset();
      setMessageLength(0);
    } catch { setStatus("error"); }
  }
  return (
    <form onSubmit={submit} onInput={(event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
        validate(field);
        if (field.name === "message") setMessageLength(field.value.length);
      }
    }} onBlur={(event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) validate(field);
    }} aria-labelledby="inquiry-title" className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-10">
      <h2 id="inquiry-title" className="font-display text-3xl tracking-[-.03em]">Tell us what you’re planning.</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Share a few details to start the conversation. Fields marked * are required.</p>
      {!endpoint && <p className="mt-6 rounded-xl bg-[var(--color-surface-warm)] p-4 text-sm leading-6" role="note">Online inquiries are not accepting submissions yet. Please <a href="mailto:info@mfbuild.com" className="font-semibold underline underline-offset-4">email us</a> or call (855) MF-BUILD to get in touch.</p>}
      <fieldset disabled={status === "sending"} className="mt-7 space-y-6 disabled:opacity-60">
        <legend className="sr-only">Your contact and project details</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold">Full name *<input name="name" autoComplete="name" required minLength={2} maxLength={100} className={inputClass} /></label>
          <label className="block text-sm font-semibold">Company <span className="font-normal text-[var(--color-muted)]">(optional)</span><input name="company" autoComplete="organization" minLength={2} maxLength={150} className={inputClass} /></label>
          <label className="block text-sm font-semibold">Email *<input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></label>
          <label className="block text-sm font-semibold">Phone <span className="font-normal text-[var(--color-muted)]">(optional)</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" onInput={(event) => {
            const field = event.currentTarget;
            field.value = field.value.replace(/[^0-9+().\s-]/g, "").replace(/(?!^)\+/g, "");
          }} maxLength={30} className={inputClass} /></label>
        </div>
        <label className="block text-sm font-semibold">What can we help with? *<select name="subject" required defaultValue="" className={inputClass}><option value="" disabled>Select an inquiry type</option><option>New construction project</option><option>Existing property or maintenance</option><option>Current project question</option><option>General inquiry</option></select></label>
        <label className="block text-sm font-semibold">Project location <span className="font-normal text-[var(--color-muted)]">(optional)</span><input name="location" minLength={2} maxLength={200} className={inputClass} aria-describedby="location-hint" /><span id="location-hint" className="mt-2 block font-normal text-[var(--color-muted)]">City and state are enough to start.</span></label>
        <label className="block text-sm font-semibold">Message *<textarea name="message" required rows={5} minLength={20} maxLength={2000} className={inputClass} aria-describedby="message-count" /><span id="message-count" className="mt-1 block text-right text-xs font-normal tabular-nums text-[var(--color-muted)]">{messageLength.toLocaleString()} / 2,000</span></label>
        <label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" name="consent" required className="mt-1 size-5 shrink-0 accent-[var(--color-ink)]" /><span>I agree to be contacted about this inquiry. *</span></label>
        <button type="submit" disabled={!endpoint} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-brand-yellow)] px-6 py-3 font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-brand-yellow-hover)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">{status === "sending" ? "Sending inquiry…" : "Send inquiry"}<ArrowUpRight size={18} aria-hidden="true" /></button>
      </fieldset>
      <div aria-live="polite" className="mt-4 text-sm leading-6">
        {status === "sent" && <p className="text-[var(--color-success)]">Your inquiry was sent successfully. Thank you for contacting M&F.</p>}
        {status === "error" && <p role="alert" className="text-[var(--color-error)]">We couldn’t send your inquiry. Your entries are still here. Please try again, or email info@mfbuild.com.</p>}
      </div>
    </form>
  );
}
