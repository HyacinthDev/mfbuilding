import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { PerspectiveGrid } from "../components/ui/perspective-grid";
import { Button, Container, Reveal, Section } from "./ui";

export function CTA() {
  return (
    <Section className="!py-20 bg-[var(--color-surface-muted)]">
      <Container wide>
        <Reveal delay={0.02}>
          <Card className="cta-glow-card group mx-auto max-w-6xl overflow-hidden">
            <PerspectiveGrid />
            <CardContent className="pointer-events-none relative z-20 flex min-h-[28rem] flex-col items-center justify-center px-6 py-16 text-center md:px-12 md:py-24">
              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,195,0,.55)] to-transparent" />
              <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[.96] tracking-[-.04em]">
                Ready to discuss a project?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                Share the scope, location, timeline, and project context. M&F can review the fit and help define the next practical step.
              </p>
              <div className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button href="/get-started">Get Started</Button>
                <Button href="/contact" variant="secondaryLight">
                  Contact us <ArrowUpRight size={18} strokeWidth={2.4} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
