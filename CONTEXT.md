# M&F Website Redesign — Product & Business Context

> **Status:** Source of truth for product, business, UX, content, and brand intent.
> **Audience:** Designers, frontend engineers, and AI coding agents working on the M&F redesign.
> **Read order:** Read this file first, then `DESIGN_PATTERN.md`, then `README.md`.

## 1. Purpose

This redesign must elevate M&F from an established construction company with a conventional web presence into a modern premium digital brand without weakening the credibility, history, terminology, or factual business information already present on the existing M&F website.

This is not a cosmetic refresh and not a generic construction template. It is a strategic redesign of information architecture, UX, visual hierarchy, storytelling, conversion, project presentation, mobile experience, accessibility, performance, and brand perception.

The website must feel like **a modern architectural presentation of a company that actually knows how to build**.

## 2. Business Understanding

M&F is a construction company serving the Mid-Atlantic and surrounding regions. Its work spans design/build, government construction, commercial and residential construction, property-management related work, site work, paving, foundations, concrete, infrastructure, heavy/civil construction, structural work, demolition, drainage, utilities, landscaping/hardscapes, maintenance, and repair.

The business should be understood as a capable project-delivery organization, not merely a collection of trade services. Its differentiators include decades of experience, experienced in-house crews, owned equipment and vehicles, rapid mobilization, government/federal experience, safety, reliability, responsiveness, quality workmanship, schedule discipline, budget awareness, transparency, adaptability, and end-to-end capability.

### Core qualities to communicate

**Capability + Reliability + Experience + Precision + Responsiveness + Trust**

## 3. Brand Positioning

### Primary positioning idea

**From Concept to Completion.**

This is the central narrative, not a phrase to repeat mechanically. The website should demonstrate that M&F can help move projects through a lifecycle such as:

**Concept → Planning → Design → Preparation → Construction → Completion**

The brand should feel:

- Engineered
- Precise
- Confident
- Premium
- Human
- Built to last

M&F must not look like a small local-contractor template, a SaaS company, a startup, or a generic corporate construction site.

## 4. Target Audiences

The architecture and content must work for audiences with different levels of construction knowledge:

1. **Government / federal procurement and project stakeholders** — need credibility, compliance-minded professionalism, relevant capabilities, reliability, and evidence.
2. **State and local clients** — need delivery confidence, responsiveness, relevant civil/infrastructure capabilities, and clear contact paths.
3. **Commercial clients and project managers** — need scope clarity, schedule/budget confidence, project evidence, and an efficient inquiry path.
4. **Associations and property managers** — need responsiveness, maintenance/repair capability, reliability, and clear service fit.
5. **Residential clients / homeowners** — need understandable services, trust, process clarity, and confidence without excessive technical language.
6. **Prospective employees** — need a credible employer story, clear job information, and an easy application path.

## 5. User Intent Model

The redesign should organize information around the questions visitors actually have:

- **What can M&F do?** → Services
- **Does M&F understand my type of organization/project?** → Markets
- **Can M&F prove it?** → Projects / Case Studies / Credibility
- **How does M&F work?** → Process / Design-Build / About
- **Can I trust this company?** → History / Safety / Experience / People / Equipment / Projects
- **How do I start a project?** → Get Started
- **Can I work here?** → Careers

## 6. Business and Website Goals

The website must:

- Establish capability and credibility immediately.
- Make M&F's breadth understandable without overwhelming visitors.
- Turn real project work into persuasive evidence.
- Separate Services (what M&F does) from Markets (who M&F serves).
- Preserve meaningful history and company credibility while improving consumption.
- Create a consistent, professional conversion path.
- Improve mobile usability and accessibility.
- Improve SEO foundations and project/service discoverability.
- Remain performant despite photography and restrained motion.
- Provide an architecture that is maintainable and ready for future structured content sources without implementing a backend now.

## 7. Priority Order

When requirements compete, use this order:

1. **Conversion and business clarity**
2. **Design quality and brand credibility**
3. **Maintainable frontend architecture**
4. **Motion and decorative effects**

Never sacrifice clarity, accessibility, performance, or credibility for visual novelty.

## 8. Conversion Strategy

The global primary CTA is exactly:

**Get Started**

Use it consistently. Do not make the phone number the primary CTA.

The Get Started experience should collect useful project context while remaining concise. Candidate fields include name, company, email, project type, market, service needed, project location, description, timeline, budget where appropriate, and additional details.

### Conversion funnel

**Understand M&F → Find relevant capability/market → See proof → Build trust → Understand process → Get Started**

Not every page needs every stage, but every major page should intentionally advance the visitor toward confidence or inquiry.

## 9. Information Architecture

Treat these as real routes/pages:

- `/` — Home
- `/services` — Services overview
- `/services/:slug` — Service detail
- `/markets` — Markets overview
- `/markets/:slug` — Market detail
- `/projects` — Projects listing/filtering
- `/projects/:slug` — Project / case study
- `/about` — About / history / capabilities
- `/careers` — Careers
- `/contact` — Contact
- `/get-started` — Project inquiry
- `/privacy-policy` — Privacy

### Primary navigation

**Logo | Services | Markets | Projects | About | Careers | Contact | Get Started**

Desktop navigation may use carefully designed dropdowns/mega menus where they improve discovery. Mobile navigation must be purpose-built rather than a thoughtless desktop collapse.

## 10. Homepage Baseline

Use this as the baseline funnel, but section order may change when there is a clear UX/conversion reason:

1. Editorial hero
2. Immediate credibility / trust indicators
3. Core capabilities / services
4. Markets served
5. Featured projects
6. Why M&F / differentiators
7. Credibility / experience statistics
8. Concept-to-completion process
9. Company / history preview
10. Safety, reliability, responsiveness, or client trust
11. Testimonials when verified content exists
12. FAQ only when useful, factual questions can be supported
13. Careers preview
14. Final Get Started CTA
15. Footer

Do not force FAQ or testimonials merely to fill a template. Unsupported content becomes a content requirement.

## 11. Services, Markets, and Projects Relationship

### Services
Explain **what M&F does**. Potential groupings include Construction & Delivery, Infrastructure & Civil, and Specialized / Managed Services, but the final taxonomy must follow verified M&F content rather than blindly copying these labels.

### Markets
Explain **who M&F serves and what problems M&F solves for them**. Candidate markets include Federal, State & Local, Commercial, Residential, and Associations & Property Managers.

### Projects
Provide **proof** connecting services and markets. Projects are structured case studies, not image galleries.

A project may reference multiple services and one or more relevant markets. Service and market pages should surface relevant verified projects where available.

## 12. Project Storytelling

Project pages should use structured information where verified:

- Project name
- Location
- Market
- Project type
- Services performed
- Scope
- Challenge
- Approach / solution
- Execution
- Outcome / result
- Status
- Imagery
- Metrics, only when verified

Preferred narrative:

**Challenge → Approach → Execution → Result**

Never invent missing project information.

## 13. Trust-Building Strategy

Trust should be built through evidence, not generic adjectives. Use verified information such as:

- Company history / years of experience
- Government experience
- Owned equipment and vehicles
- Experienced/trained crews
- Safety practices
- Responsiveness / rapid mobilization
- Project examples
- Certifications/approvals
- Regions served
- Notable clients/agencies when legally appropriate

### Factual protection rule

**Never invent M&F project numbers, clients, certifications, revenue, workforce statistics, years of experience, locations, capabilities, awards, performance claims, or other business facts.**

If information is unavailable, mark it:

> **CONTENT REQUIRED — Verify with M&F before launch.**

Placeholders must never be presented as real facts in production UI.

## 14. Content Strategy

Use the existing M&F website as the factual source of truth. Preserve verified facts, history, capabilities, terminology, and relevant job information, but rewrite and restructure presentation for:

- Clarity
- Professionalism
- Scannability
- SEO
- Conversion
- Mobile consumption

Do not blindly preserve the existing site's page structure or long-form formatting. Convert dense material into concise summaries, editorial sections, statistics, project examples, pull quotes, cards, timelines, and expandable technical information where appropriate.

## 15. Messaging Principles

Copy should be confident, specific, mature, and direct.

Prefer:

- Evidence over hype
- Concrete capability over vague superlatives
- Clear construction language over marketing jargon
- Short, purposeful headlines
- Scannable supporting copy
- Professional calls to action

Avoid startup language, exaggerated claims, empty phrases, and generic AI copy.

## 16. Visual Direction

The visual language is:

**Modern Industrial + Premium Industrial + Architectural Minimalism + Contemporary Construction + Engineering Precision + Corporate Credibility**

The conceptual expression is:

**Physical construction through digital precision.**

Think architectural drawings, engineered systems, authentic premium construction photography, restrained editorial design, strong grids, intentional typography, and precise alignment.

The governing principle is:

**Less decoration. More structure.**

## 17. Imagery Strategy

Photography is a major credibility layer. Prioritize authentic M&F imagery showing:

- Real construction sites
- Equipment
- Employees / teams
- Projects
- Infrastructure
- Architectural details
- Finished work
- Construction in progress

Treatment should feel editorial, cinematic, natural, clean, and architectural. Avoid building the identity around obvious stock photography. Temporary imagery must be clearly identified as placeholder content.

## 18. Accessibility Goals

The frontend must support semantic HTML, keyboard navigation, visible focus, accessible forms, labels, appropriate ARIA, sufficient contrast, alt text, reduced-motion preferences, accessible navigation/buttons, useful error messaging, and touch-friendly interaction.

Yellow must never be the only indicator of state.

## 19. SEO Goals

Provide a strong frontend SEO foundation: unique titles/descriptions, semantic headings, canonical strategy, social metadata, structured data where appropriate, descriptive alt text, clean routes, sitemap/robots planning, internal linking, location/service relevance, and indexable project pages. Never keyword-stuff.

## 20. Performance Goals

Prioritize optimized responsive imagery, lazy loading where appropriate, modern formats, code splitting where useful, minimal JavaScript, efficient motion, font optimization, semantic HTML, and stable layouts. Do not sacrifice performance for effects.

## 21. Impeccable + Taste Quality Gate

When Impeccable and Taste capabilities are available, they are mandatory design-quality tools, not decorative labels.

Before a page is considered complete, critique and refine:

- Hierarchy
- Spacing
- Typography
- Color and contrast
- Layout and balance
- Responsiveness
- Interaction quality
- Component consistency
- Accessibility
- CTA clarity
- Brand distinctiveness
- Restraint
- Visual polish

Ask whether the page feels unmistakably like a premium construction/engineering company and whether any element competes without purpose. If the answer is no, revise.

## 22. AI Modification Contract

Before modifying or creating the website, an AI agent must:

1. Read this file completely.
2. Read `DESIGN_PATTERN.md` completely.
3. Read `README.md` completely.
4. Understand the business before writing components.
5. Preserve verified M&F facts.
6. Never invent business claims.
7. Use the component system rather than creating arbitrary page-local patterns.
8. Follow the design tokens and responsive rules.
9. Treat mobile as a first-class design.
10. Validate accessibility and performance.
11. Use motion intentionally and respect reduced motion.
12. Perform an Impeccable/Taste refinement pass when available.
13. Do not deviate from these documents without explicit instruction or a documented technical/accessibility reason.
