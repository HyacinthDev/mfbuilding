# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: React + Vite + TypeScript + Tailwind CSS + Framer Motion, as mandated by README.md for this greenfield frontend-only redesign.

## Users

Primary visitors include government/federal procurement stakeholders, state and local clients, commercial clients and project managers, associations/property managers, residential clients/homeowners, and prospective employees. They need to understand whether M&F can deliver their type of construction project, prove relevant experience, and provide a clear inquiry or career path.

## Product Purpose

The website presents M&F as a capable construction project-delivery organization and converts qualified visitors toward a concise Get Started inquiry. Success means visitors quickly understand what M&F does, who it serves, why it is credible, how it works, and how to start a project or apply for work.

## Positioning

M&F is positioned around “From Concept to Completion”: a construction company able to move projects through planning, preparation, construction, and completion with capability, reliability, experience, precision, responsiveness, and trust.

## Operating Context

Visitors evaluate the company across services, markets, project proof, company history, safety/reliability cues, careers, contact information, and project inquiry. The site is frontend-only in this scope; content is local structured data prepared for future CMS/API integration.

## Capabilities and Constraints

Routes: `/`, `/services`, `/services/:slug`, `/markets`, `/markets/:slug`, `/projects`, `/projects/:slug`, `/about`, `/careers`, `/contact`, `/get-started`, `/privacy-policy`.

Constraints: no backend, no fabricated business facts, no fake statistics/testimonials/clients/certifications, Get Started is the global primary CTA, mobile-first responsive design, accessibility and performance are completion requirements.

## Brand Commitments

Brand name: M&F. Central narrative: “From Concept to Completion.” Visual direction: balanced premium industrial + architectural minimalism. Use restrained M&F yellow as accent/primary CTA, charcoal/ink structural typography, authentic construction imagery when available, and precise engineered layouts. Missing official brand assets and exact brand yellow must be verified before launch.

## Evidence on Hand

Evidence from `CONTEXT.md`, `DESIGN_PATTERN.md`, and `README.md`: service breadth, market categories, differentiators, required IA, design tokens, component inventory, accessibility/SEO/performance requirements, and frontend stack. Attempted current-site extraction from `mfbuilding.com` found a parked GoDaddy page, so no additional verified live-site facts were extracted. Missing facts must be marked `CONTENT REQUIRED — Verify with M&F before launch.`

## Product Principles

1. Clarity and conversion outrank decorative novelty.
2. Evidence builds trust; unsupported claims never ship as facts.
3. Services explain what M&F does; markets explain who M&F serves; projects prove both.
4. The interface should feel engineered, precise, premium, human, and built to last.
5. Mobile, accessibility, performance, and maintainable structure are first-class requirements.

## Accessibility & Inclusion

The frontend must use semantic HTML, keyboard-operable navigation and controls, visible focus states, persistent form labels, useful errors, sufficient contrast, descriptive alt text, reduced-motion support, and touch-friendly targets. Yellow must never be the only indicator of state.
