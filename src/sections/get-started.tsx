import { useState, type FormEvent } from "react";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { markets, services } from "../data/content";
import { PageShell } from "./layout";
import { Container, Reveal } from "./ui";
import { CTA } from "./cta";

const endpoint = import.meta.env.VITE_PROJECT_INQUIRY_ENDPOINT as string | undefined;
const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 font-normal text-[var(--color-ink)] outline-offset-4 focus:border-[var(--color-ink)]";

export function GetStartedPage() {
  return (
    <PageShell>
      <section className="bg-[var(--color-surface-warm)] pb-16 pt-32 md:pb-20 md:pt-40">
        <Container>
          <Reveal delay={0.08}>
            <ProjectInquiryForm />
          </Reveal>
        </Container>
      </section>
      <CTA />
    </PageShell>
  );
}

function ProjectInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);

  function validate(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
    field.setCustomValidity("");
    const value = field.value.trim();
    if (field.name === "name" && (value.length < 2 || value.length > 100 || !/\p{L}/u.test(value))) field.setCustomValidity("Enter a name using 2–100 characters, including at least one letter.");
    if (field.name === "phone" && field.value) {
      const digits = value.replace(/\D/g, "");
      if (!/^\+?[\d\s().-]+$/.test(value) || digits.length < 7 || digits.length > 15) field.setCustomValidity("Enter a valid phone number.");
    }
    if (field.name === "description" && (value.length < 20 || value.length > 2000)) field.setCustomValidity("Describe the project in 20–2,000 characters.");
  }

  function syncSubmitState(form: HTMLFormElement) {
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select").forEach(validate);
    setCanSubmit(form.checkValidity());
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select").forEach(validate);
    if (status === "sending" || !form.reportValidity()) return;
    if (!endpoint) {
      toast.error("Project inquiry submission is not configured", { description: "Please call (855) MF-BUILD or use the contact page." });
      return;
    }
    const data = new FormData(form);
    for (const [key, value] of data.entries()) if (typeof value === "string") data.set(key, value.trim());
    setStatus("sending");
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Project inquiry could not be sent");
      setStatus("sent");
      toast.success("Project inquiry sent", { description: "Thank you. M&F can review your project context." });
      form.reset();
      setDescriptionLength(0);
    } catch {
      setStatus("error");
      toast.error("Project inquiry not sent", { description: "Please try again or contact M&F directly." });
    }
  }

  return (
    <form
      onSubmit={submit}
      onInput={(event) => {
        const field = event.target;
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
          validate(field);
          if (field.name === "description") setDescriptionLength(field.value.length);
          syncSubmitState(event.currentTarget);
        }
      }}
      onChange={(event) => syncSubmitState(event.currentTarget)}
      className="rounded-3xl bg-white p-6 md:p-9"
    >
      <div className="mb-7 flex items-start gap-4 border-b border-[var(--color-border)] pb-6">
        <Clock3 className="mt-1 shrink-0 text-[var(--color-brand-yellow)]" size={26} aria-hidden="true" />
        <div>
          <h2 className="font-display text-3xl tracking-[-.03em]">Project inquiry</h2>
          <p className="mt-2 leading-7 text-[var(--color-muted)]">The form is structured for construction context, not generic lead capture.</p>
        </div>
      </div>
      {!endpoint && <p className="mb-7 rounded-xl bg-[var(--color-surface-warm)] p-4 text-sm leading-6" role="note">Online inquiry submission is not configured yet. Please call (855) MF-BUILD or use the contact page.</p>}
      <fieldset disabled={status === "sending"} className="space-y-6 disabled:opacity-60">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold">Full name *<input name="name" autoComplete="name" required minLength={2} maxLength={100} className={inputClass} /></label>
          <label className="block text-sm font-semibold">Email *<input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></label>
          <label className="block text-sm font-semibold">Phone <span className="font-normal text-[var(--color-muted)]">(optional)</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30} className={inputClass} onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/[^0-9+().\s-]/g, "").replace(/(?!^)\+/g, ""); }} /></label>
          <label className="block text-sm font-semibold">Project location *<input name="location" required maxLength={200} className={inputClass} /></label>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold">Market *<select name="market" required defaultValue="" className={inputClass}><option value="" disabled>Select market</option>{markets.map((market) => <option key={market.id}>{market.name}</option>)}</select></label>
          <label className="block text-sm font-semibold">Service needed *<select name="service" required defaultValue="" className={inputClass}><option value="" disabled>Select service</option>{services.map((service) => <option key={service.id}>{service.name}</option>)}</select></label>
        </div>
        <label className="block text-sm font-semibold">Budget range <span className="font-normal text-[var(--color-muted)]">(optional)</span><input name="budget" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={12} className={inputClass} onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, ""); }} /></label>
        <label className="block text-sm font-semibold">Project description *<textarea name="description" required minLength={20} maxLength={2000} rows={6} className={inputClass} aria-describedby="description-count" /><span id="description-count" className="mt-1 block text-right text-xs font-normal tabular-nums text-[var(--color-muted)]">{descriptionLength.toLocaleString()} / 2,000</span></label>
        <label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" name="consent" required className="mt-1 size-5 shrink-0 accent-[var(--color-ink)]" /><span>I agree to be contacted about this project inquiry. *</span></label>
        <button type="submit" disabled={status === "sending" || !canSubmit} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-brand-yellow)] px-6 py-3 font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-brand-yellow-hover)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">{status === "sending" ? "Sending inquiry…" : "Submit project inquiry"}<ArrowUpRight size={18} aria-hidden="true" /></button>
      </fieldset>
      <div aria-live="polite" className="mt-4 text-sm leading-6">
        {status === "sent" && <p className="text-[var(--color-success)]">Your project inquiry was sent successfully. Thank you.</p>}
        {status === "error" && <p role="alert" className="text-[var(--color-error)]">We couldn’t send your inquiry. Your entries are still here. Please try again.</p>}
      </div>
    </form>
  );
}
