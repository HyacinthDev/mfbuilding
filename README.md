# M&F Website Redesign — Frontend Implementation Blueprint

> **Project type:** Production-quality frontend redesign, architected for future production integration.
> **Backend:** None in this scope.
> **Authority:** `CONTEXT.md` → `DESIGN_PATTERN.md` → this `README.md`.

## 1. Project Overview

Build a complete strategic redesign of the M&F website. The implementation must preserve verified M&F business facts while substantially improving information architecture, UX, visual hierarchy, storytelling, conversion, project presentation, responsive behavior, accessibility, performance, and modern brand perception.

The result must not resemble a generic construction template or generic AI-generated SaaS interface. It should feel engineered, precise, confident, premium, human, and built to last.

## 2. Objectives

1. Communicate M&F capability and credibility immediately.
2. Establish **From Concept to Completion** as the central narrative.
3. Make Services, Markets, Projects, About, Careers, and conversion paths easy to understand.
4. Turn projects into structured evidence/case studies.
5. Make **Get Started** the consistent primary conversion action.
6. Build a reusable component-based design system.
7. Treat mobile as a first-class experience.
8. Meet strong accessibility, SEO, and performance standards.
9. Keep content/data separated from presentation so a CMS/API can be added later without major frontend restructuring.

## 3. Implementation Priority

When tradeoffs occur:

1. **Conversion and business clarity**
2. **Design quality**
3. **Maintainable frontend architecture**
4. **Animation / decorative effects**

## 4. Required Technology Stack

These are mandatory unless the project owner explicitly changes them:

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

Do not switch to Next.js, Bootstrap, Material UI, Chakra, Ant Design, or another UI framework without explicit approval. Additional tools/libraries may be used only when they solve a concrete need and do not override the custom design system.

Use modern React patterns and strict TypeScript. Avoid unnecessary dependencies.

## 5. Frontend-Only Scope

There is no backend implementation in this redesign scope.

Use structured local data/content so the frontend can later connect to a CMS or API. Do not build a fake backend simply to simulate production architecture.

Forms may implement frontend validation and a clearly isolated submission adapter/interface. If no real submission endpoint exists, mark integration as required rather than pretending submission succeeded.

## 6. Suggested Setup

Example initialization (adapt to the installed Tailwind/Vite versions rather than blindly copying version-specific commands):

```bash
npm create vite@latest mf-website -- --template react-ts
cd mf-website
npm install
npm install framer-motion
```

Install/configure Tailwind CSS according to the version selected for the project. Keep configuration explicit and map the design tokens from `DESIGN_PATTERN.md` into the Tailwind theme/CSS variables.

### Expected scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

Add type-check/test scripts if they are not already included.

## 7. Recommended Architecture

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── brand/
├── components/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── projects/
│   ├── services/
│   ├── markets/
│   └── sections/
├── data/
│   ├── projects.ts
│   ├── services.ts
│   ├── markets.ts
│   ├── careers.ts
│   ├── testimonials.ts
│   ├── statistics.ts
│   └── navigation.ts
├── pages/
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   ├── ServiceDetailPage.tsx
│   ├── MarketsPage.tsx
│   ├── MarketDetailPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── AboutPage.tsx
│   ├── CareersPage.tsx
│   ├── ContactPage.tsx
│   ├── GetStartedPage.tsx
│   └── PrivacyPolicyPage.tsx
├── hooks/
├── lib/
├── styles/
│   └── globals.css
├── types/
│   └── content.ts
├── utils/
├── App.tsx
└── main.tsx
```

### Why this structure exists

- `data/` owns structured business/content data.
- `types/` owns reusable domain contracts.
- `components/` owns reusable UI/system patterns.
- `pages/` owns route composition, not raw business datasets.
- `sections/` contains reusable page-level compositions only when they recur or represent a meaningful system pattern.
- `lib/` owns integration adapters/helpers that are not generic utilities.
- `styles/` owns global tokens/base behavior; component styling remains Tailwind/system-driven.

Do not over-componentize. A component should exist because it represents meaningful reuse, behavior, or design-system consistency.

## 8. Routing

Recommended routes:

```text
/
/services
/services/:slug
/markets
/markets/:slug
/projects
/projects/:slug
/about
/careers
/contact
/get-started
/privacy-policy
```

Use a routing solution appropriate for a Vite React SPA. Route definitions should be centralized and typed where practical.

## 9. Page Inventory and Intent

### Home
Establish credibility, capability, proof, positioning, and conversion.

Baseline sequence:

1. Hero
2. Credibility indicators
3. Capabilities / services
4. Markets
5. Featured projects
6. Why M&F
7. Experience/statistics
8. Process
9. About/history preview
10. Safety/reliability/trust
11. Verified testimonials if available
12. Useful verified FAQ if available
13. Careers preview
14. Final CTA
15. Footer

Order may change when conversion/UX reasoning clearly supports it.

### Services
Organize verified capabilities into an intuitive taxonomy. Provide overview and detail routes. Connect services to relevant markets and projects.

### Markets
Explain who M&F serves, their needs/challenges, relevant capabilities, proof, and next action.

### Projects
Major proof experience with visual cards, filters, and structured case studies. Do not reduce projects to a gallery.

### About
Preserve meaningful history while redesigning consumption through editorial storytelling, timeline, principles, capabilities, people/equipment/geographic reach where verified.

### Careers
Preserve verified listings/requirements. Use clear job cards and professional recruiting presentation.

### Contact
Provide company contact information and lower-friction contact paths without competing with the primary project-inquiry CTA.

### Get Started
Professional project inquiry experience. Keep concise and useful.

## 10. Component Strategy

Build from the design system in `DESIGN_PATTERN.md`.

Core components include:

```text
Navbar
DesktopNavigation
MobileNavigation
Button
Container
Section
SectionHeader
Eyebrow
Breadcrumbs
ServiceCard
MarketCard
ProjectCard
ProjectGrid
ProjectMeta
StatBlock
Testimonial
ProcessTimeline
ImageReveal
CTASection
ContactForm
ProjectInquiryForm
JobCard
FilterControls
Gallery
Accordion
Badge
Modal
Footer
```

### Component rules

- Components consume typed props/data; they do not own large hardcoded business content.
- Variants must correspond to meaningful design use cases.
- Do not add arbitrary variants to solve one page's spacing problem.
- Shared interaction states must remain consistent.
- Page-specific composition can be unique while primitives remain systematic.

## 11. Data Strategy

Keep content separate from presentation.

Use structured data for:

- Projects
- Services
- Markets
- Careers/jobs
- Testimonials
- Statistics
- Navigation

This enables future CMS/API migration without rewriting visual components.

### Content-source rule

The existing M&F website is the factual source of truth for the redesign. Preserve facts but rewrite/restructure copy for clarity, professionalism, SEO, scannability, and conversion.

Never invent missing business information.

Use:

> **CONTENT REQUIRED — Verify with M&F before launch.**

for unverified content requirements during development.

## 12. TypeScript Domain Types

Recommended starting contracts:

```ts
export interface Project {
  id: string;
  slug: string;
  name: string;
  location?: string;
  marketIds: string[];
  serviceIds: string[];
  projectType?: string;
  summary: string;
  scope?: string;
  challenge?: string;
  approach?: string;
  execution?: string;
  result?: string;
  status?: string;
  metrics?: ProjectMetric[];
  images: ProjectImage[];
  featured?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  verified: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  focalPoint?: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  category?: string;
  summary: string;
  description?: string;
  capabilities?: string[];
  relatedProjectIds?: string[];
  relatedMarketIds?: string[];
}

export interface Market {
  id: string;
  slug: string;
  name: string;
  summary: string;
  audience?: string;
  challenges?: string[];
  serviceIds?: string[];
  projectIds?: string[];
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  location?: string;
  employmentType?: string;
  summary?: string;
  responsibilities?: string[];
  requirements?: string[];
  active: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  organization?: string;
  verified: boolean;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  context?: string;
  verified: boolean;
}

export interface ContactInquiry {
  name: string;
  company?: string;
  email: string;
  projectType?: string;
  market?: string;
  serviceNeeded?: string;
  projectLocation?: string;
  description: string;
  timeline?: string;
  budget?: string;
  additionalDetails?: string;
}
```

Do not expose `verified: false` claims in production UI as factual metrics/testimonials.

## 13. Content Requirements

Before launch, verify and populate:

- Official M&F brand assets and exact brand yellow
- Current service taxonomy/copy
- Current markets served
- Company history/founding information
- Project inventory and case-study details
- Project imagery and alt text
- Verified statistics
- Certifications/approvals
- Client/agency references where legally appropriate
- Current careers/job listings
- Testimonials if used
- Contact information
- Privacy/legal copy
- Form submission destination/integration

Do not create fake content to make layouts look complete.

## 14. Image Requirements

Prefer authentic M&F photography. Required categories may include active sites, heavy equipment, infrastructure, concrete/structural work, team, architectural details, finished projects, and project process imagery.

For each image, define useful alt text and responsive crop behavior. Optimize formats/sizes and avoid layout shift.

Temporary imagery must be marked as placeholder content.

## 15. Responsive Strategy

Build mobile-first:

**Mobile → Tablet → Desktop → Large Desktop**

Do not merely shrink desktop.

Explicitly validate:

- Mobile navigation
- Hero re-composition
- Fluid typography
- Project/service/market card layouts
- Filters
- Forms
- Image focal points
- CTA visibility
- Touch targets
- Technical content/tables
- No horizontal overflow

## 16. Motion / Animation

Use Framer Motion for intentional hierarchy and feedback:

- Hero entrance
- Section reveals
- Image reveals
- Navigation transitions
- Project interactions
- CTA feedback
- Counters where appropriate

Avoid excessive parallax, bouncing, spinning, scaling, and universal animation.

Hero entrance may sequence brand/navigation → imagery → headline → supporting copy → CTA, but core content must become available quickly.

Respect `prefers-reduced-motion`.

## 17. Accessibility

Minimum requirements:

- Semantic landmarks/headings
- Keyboard navigation
- Visible focus states
- Accessible mobile/desktop navigation
- Form labels and useful errors
- ARIA only when necessary
- Sufficient contrast
- Descriptive image alt text
- 44px-class touch targets where practical
- Reduced-motion support
- Accessible modals/accordions/filters
- Yellow never used as the only state indicator

Accessibility defects block completion.

## 18. SEO Foundation

Implement/prepare:

- Unique page titles
- Meta descriptions
- Semantic heading structure
- Canonical URLs
- Open Graph metadata
- X/Twitter metadata where relevant
- Structured data where appropriate
- Descriptive image alt text
- Clean URLs/slugs
- Sitemap strategy
- robots.txt
- Internal linking
- Service/location relevance without keyword stuffing
- Indexable project detail pages

If SPA rendering creates SEO limitations for the final deployment model, document the limitation and production mitigation rather than silently switching frameworks.

## 19. Performance

Prioritize:

- Responsive optimized images
- Lazy loading below the fold
- Appropriate modern formats
- Code splitting where useful
- Minimal JavaScript/dependencies
- Efficient Framer Motion usage
- Font optimization
- Stable image dimensions/layout
- Semantic markup
- Avoiding layout shifts

Visual effects never outrank performance.

## 20. Testing Strategy

At minimum validate:

### Functional
- Navigation and routes
- Filters
- Forms and validation
- Links/CTAs
- Mobile menu
- Accordions/modals

### Responsive
- 320–375px narrow mobile
- Common mobile widths
- Tablet portrait/landscape
- Laptop
- Desktop
- Large desktop

### Accessibility
- Keyboard-only pass
- Focus order/visibility
- Screen-reader-friendly labels/semantics
- Contrast
- Reduced motion

### Quality
- TypeScript build passes
- Lint passes
- Production build passes
- No console errors
- No broken images/routes
- No horizontal overflow

## 21. Implementation Sequence

1. Read all three documentation files.
2. Audit/extract verified M&F content before inventing page copy.
3. Configure project, TypeScript, Tailwind, fonts, and global tokens.
4. Build foundational primitives (`Container`, `Section`, typography, buttons, image treatment).
5. Build navigation and footer.
6. Define domain types and structured data.
7. Build reusable service/market/project/stat/form components.
8. Build homepage and establish visual language.
9. Perform Impeccable/Taste quality pass on homepage when available.
10. Build Services and detail pages.
11. Build Markets and detail pages.
12. Build Projects listing/filtering and case studies.
13. Build About, Careers, Contact, Get Started, Privacy.
14. Add restrained motion.
15. Perform responsive/accessibility/performance passes.
16. Validate factual content and placeholders.
17. Final visual refinement and QA.

Do not animate or polish deeply before the information architecture, component system, and responsive foundations are stable.

## 22. AI Coding Assistant Rules

The coding AI must:

1. Read `CONTEXT.md` first.
2. Read `DESIGN_PATTERN.md` second.
3. Read this file third.
4. Treat the three files as a strict implementation contract.
5. Understand M&F before coding pages.
6. Preserve verified business information.
7. Never invent claims or statistics.
8. Clearly mark missing content requirements.
9. Use the defined component system.
10. Keep business data/content out of visual components where practical.
11. Use strict TypeScript.
12. Use Tailwind consistently.
13. Use Framer Motion intentionally.
14. Build mobile-first and validate all major ranges.
15. Validate accessibility.
16. Optimize performance.
17. Avoid generic SaaS/template patterns.
18. Apply Impeccable and Taste principles when available.
19. Perform a visual refinement pass before completion.
20. Do not deviate from the system without explicit instruction or a documented technical/accessibility necessity.

## 23. Definition of Done

A page is not complete merely because it renders.

It is complete when:

- Its purpose and hierarchy are obvious.
- It feels unmistakably appropriate for a premium construction/engineering company.
- Verified content is accurate; missing facts are clearly flagged.
- Get Started is appropriately visible.
- Components follow the design system.
- Yellow follows the restrained 60/30/10 intent.
- Typography, spacing, imagery, and composition feel intentional.
- Mobile is purpose-built.
- Keyboard/focus/contrast/reduced-motion behavior works.
- The page is performant.
- There are no obvious layout, TypeScript, console, route, or content errors.
- It does not look like an AI-generated template.
- An Impeccable/Taste-style critique has been performed when available and identified issues have been refined.

## 24. Final Quality Checklist

Before declaring the redesign complete, ask:

- **Brand:** Does this feel like M&F, elevated?
- **Hierarchy:** Can visitors immediately understand what M&F does?
- **Conversion:** Is Get Started obvious without being aggressive?
- **Visual design:** Is the experience modern, industrial, architectural, and premium?
- **Color:** Is yellow controlled?
- **Typography:** Does the type system feel engineered and professional?
- **Imagery:** Does photography demonstrate real capability?
- **UX:** Can visitors quickly find services, markets, projects, company information, and contact?
- **Mobile:** Does the experience feel intentionally designed?
- **Accessibility:** Can users navigate and understand it regardless of ability?
- **Performance:** Does the experience remain fast and stable?
- **Content:** Is important M&F information preserved without walls of text?
- **Distinctiveness:** Does it avoid generic construction and AI-template aesthetics?

If any answer is no, revise before completion.
