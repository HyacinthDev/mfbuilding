# M&F Website Redesign — Design Pattern & UI System

> **Status:** Definitive visual and interaction system.
> **Rule:** Build pages from this system. Do not invent page-local visual languages.

## 1. Design North Star

**Physical construction through digital precision.**

The interface combines modern industrial design, premium industrial character, architectural minimalism, contemporary construction, engineering precision, and corporate credibility.

### Governing principles

1. **Less decoration. More structure.**
2. Strong hierarchy before visual effects.
3. Authentic project photography is evidence, not decoration.
4. Whitespace is structural.
5. Yellow is an accent, not a surface strategy.
6. Components should feel engineered and intentional.
7. Motion supports hierarchy; it never becomes the experience.
8. Mobile compositions are designed, not merely shrunk.

## 2. Color System — 60 / 30 / 10

Use approximately:

- **60% White / warm off-white** — primary surfaces and breathing room.
- **30% Charcoal / near-black** — typography, navigation, footer, structural contrast, selected dark sections.
- **10% M&F yellow** — CTA, active/interactive emphasis, small labels, key numbers, indicators.

### Proposed implementation tokens

These are implementation-ready design-system decisions. Before launch, compare `brand-yellow` against M&F's official current brand asset and adjust only if the verified brand value differs.

```css
:root {
  --color-brand-yellow: #F2C300;
  --color-brand-yellow-hover: #DDB200;
  --color-ink: #171717;
  --color-charcoal: #242424;
  --color-graphite: #3A3A38;
  --color-muted: #6E6E69;
  --color-border: #D8D8D2;
  --color-surface: #FFFFFF;
  --color-surface-warm: #F6F5F0;
  --color-surface-muted: #ECEBE5;
  --color-success: #247A4A;
  --color-warning: #9A6800;
  --color-error: #B42318;
}
```

### Usage rules

- Default body surface: warm white or white.
- Default text: ink/charcoal, never pure black unless technically necessary.
- Yellow is preferred for the primary CTA and concise emphasis.
- Do not create large yellow page sections without an exceptional brand reason.
- Never use yellow text on white for important copy.
- Never rely on yellow alone to communicate state.
- Dark sections should be selective and create meaningful section transitions.

## 3. Typography

### Recommended pairing

**Display / headings: Archivo**

Rationale: strong, engineered, contemporary grotesk character; confident at large sizes; appropriate for industrial/architectural composition without becoming experimental.

**Body / UI: Inter**

Rationale: neutral, highly readable, excellent at smaller sizes and in forms/navigation, with broad frontend support.

If licensing, availability, or brand requirements change, preserve the characteristics above rather than substituting a fashionable font arbitrarily.

### Weights

- Display: 600, 700
- Body: 400, 500, 600
- Labels/buttons: 600

### Fluid type tokens

```css
--text-display-xl: clamp(3.25rem, 7vw, 7.5rem);
--text-display-lg: clamp(2.75rem, 5.5vw, 6rem);
--text-h1: clamp(2.5rem, 4.5vw, 5rem);
--text-h2: clamp(2rem, 3.5vw, 3.75rem);
--text-h3: clamp(1.5rem, 2.2vw, 2.25rem);
--text-h4: clamp(1.25rem, 1.5vw, 1.5rem);
--text-body-lg: 1.125rem;
--text-body: 1rem;
--text-body-sm: 0.875rem;
--text-caption: 0.75rem;
```

### Typography behavior

- Display headlines: tight line-height around 0.92–1.02; restrained negative tracking where legible.
- H1/H2: 1.0–1.1 line-height.
- H3/H4: 1.15–1.25.
- Body: 1.55–1.7.
- Avoid long all-caps text. Uppercase may be used for short eyebrows/metadata with increased tracking.
- Limit prose line length to roughly 60–75 characters where possible.
- Do not use Poppins by default.

## 4. Spacing System

Use a consistent 4px-derived scale:

```text
1: 4px   2: 8px   3: 12px   4: 16px
5: 20px  6: 24px  8: 32px  10: 40px
12: 48px 16: 64px 20: 80px 24: 96px
32: 128px 40: 160px
```

### Section spacing

- Mobile: 64–88px vertical
- Tablet: 80–112px
- Desktop: 112–160px
- Compact related sections may use less; major narrative transitions may use more.

Spacing must express hierarchy. Do not distribute identical padding mechanically across every section.

## 5. Containers and Grid

### Container tokens

```text
content:  760px   — long-form/editorial copy
standard: 1200px  — default page content
wide:     1440px  — projects, hero, large grids
full:     100%    — deliberate full-bleed imagery/sections
```

### Page gutters

- Mobile: 20px
- Small tablet: 28px
- Tablet: 40px
- Desktop: 56px
- Large desktop: 72px when composition permits

### Grid

- Mobile: 4 columns
- Tablet: 8 columns
- Desktop: 12 columns

Prefer asymmetric editorial spans over repetitive equal cards when content supports it. Alignment must remain rigorous.

## 6. Breakpoints

Use mobile-first breakpoints aligned to Tailwind configuration:

```text
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

Breakpoints are behavior thresholds, not a requirement to change every component at every size.

## 7. Geometry

### Radius

Use restrained radii:

```text
none: 0
sm:   2px
md:   4px
lg:   8px — exceptional UI only
full: pills/circular controls only when semantically appropriate
```

Do not make every card a rounded rectangle.

### Borders

- Default: 1px architectural border using `--color-border`.
- Dark surfaces: subtle lighter border with sufficient contrast.
- Use borders to define structure, metadata, rows, and interaction—not to box every piece of content.

### Shadows

Shadows are secondary. Prefer spacing, borders, contrast, and layering. If required, use subtle elevation only for overlays, dropdowns, or floating navigation states.

## 8. Component System

Components must represent meaningful reusable UI patterns, not arbitrary file-size abstractions.

### Foundations

- `Container`
- `Section`
- `SectionHeader`
- `Eyebrow`
- `Button`
- `LinkArrow`
- `Badge`
- `Divider`
- `ImageFrame`

### Navigation / layout

- `Navbar`
- `DesktopNavigation`
- `MobileNavigation`
- `Breadcrumbs`
- `Footer`

### Content

- `ServiceCard`
- `MarketCard`
- `ProjectCard`
- `ProjectGrid`
- `ProjectMeta`
- `StatBlock`
- `Testimonial`
- `ProcessTimeline`
- `JobCard`
- `Accordion`
- `Gallery`
- `FilterControls`

### Conversion / forms

- `CTASection`
- `ContactForm`
- `ProjectInquiryForm`
- `Field`
- `SelectField`
- `TextAreaField`
- `FormMessage`

### Motion / overlays

- `ImageReveal`
- `Reveal`
- `Modal`

Page sections compose these primitives. Avoid creating a unique card/button/form style for each route.

## 9. Button System

### Primary — Get Started

- Yellow background
- Ink text
- Medium/semibold label
- Strong but restrained geometry
- Minimum touch target: 44×44px
- Hover: controlled darkening or directional micro-interaction
- Focus: clearly visible outline independent of yellow
- Disabled: reduced emphasis while maintaining readable text

### Secondary

- Transparent or surface background
- Ink border/text
- Hover may invert to charcoal/ink surface

### Text / directional link

Use for lower-priority actions such as “View project” or “Explore services.” Pair with a restrained arrow where useful.

Do not create multiple competing primary CTAs in one viewport.

## 10. Navigation

### Desktop

- Sticky.
- Visually restrained.
- Clear active state.
- `Get Started` remains prominent.
- Dropdown/mega-menu only when it improves service/market discovery.
- Scrolled state may gain surface opacity/border; avoid dramatic transformations.

### Mobile

Design as a dedicated experience:

- Large readable navigation targets.
- Clear hierarchy for nested service/market links.
- Get Started remains easy to reach.
- No hover-dependent behavior.
- Prevent background scrolling while open.
- Keyboard and screen-reader behavior must be correct.

## 11. Homepage Hero

Required concept: **split-screen typography + authentic construction imagery**.

### Content

- Headline: **From Concept to Completion.**
- Supporting copy: communicate ability to take complex projects from planning through delivery.
- Primary CTA: **Get Started**.
- No secondary phone CTA.

### Composition

Desktop may use an asymmetric 5/7 or 6/6 split. Typography should feel editorial rather than like a centered marketing banner. Imagery should be large, deliberate, cinematic, and clearly related to construction capability.

Mobile should reorganize—not merely scale—the split layout. Protect headline readability and image focal points.

### Entrance sequence

A restrained sequence is allowed:

1. Brand/navigation settles
2. Hero image reveals
3. Headline reveals
4. Supporting copy reveals
5. CTA reveals

Keep total perceived entrance fast. Do not make users wait for content.

## 12. Service Cards

Service cards should explain capability, not behave like generic feature tiles.

Recommended anatomy:

- Eyebrow/category when needed
- Service title
- Concise description
- Optional relevant image
- Directional link

Prefer architectural rows, image/text compositions, or grid modules. Do not default to icon + heading + paragraph inside a rounded shadow card.

## 13. Market Cards

Market cards answer “Is M&F right for an organization/project like mine?”

Include:

- Market name
- Audience/problem framing
- Concise capability statement
- Relevant project image where verified
- Link to market detail

Markets should be visually distinct from services even though they share system primitives.

## 14. Projects and Case Studies

Projects are a major proof system.

### Project card

- Strong image-first composition
- Project name
- Location when verified
- Market / service metadata
- Restrained hover state
- Clear click target

Avoid excessive overlays that reduce image credibility.

### Project listing

- Responsive visual grid
- Market/service filters
- Accessible filter state
- Useful empty state
- URL/state strategy should permit future deep linking if implemented

### Case study

Recommended flow:

1. Project hero
2. Verified project metadata
3. Scope overview
4. Challenge
5. Approach
6. Execution
7. Result
8. Gallery / details
9. Related projects
10. Get Started CTA

Missing facts must display only as editorial/content TODOs during development, never as fabricated production content.

## 15. Statistics / Credibility

Statistics should feel architectural and factual. Use large numerals, compact labels, thin rules, and ample spacing. Yellow may accent a number or marker but should not turn the entire module yellow.

Only verified metrics may appear as facts.

## 16. Process Timeline

Represent the concept-to-completion journey. Candidate stages:

**Understand → Plan → Design → Prepare → Build → Complete**

Exact terminology must reflect verified M&F workflow.

Use strong typography, structural lines, restrained progression animation, and responsive reflow. On mobile, prioritize vertical readability over forcing a horizontal timeline.

## 17. Testimonials

Use only verified testimonial/client content. Keep presentation editorial and credible. Avoid oversized quote marks, carousel gimmicks, or fabricated identities.

If no verified testimonials exist, omit the section or mark it as content required.

## 18. FAQ / Accordion

FAQ is optional, not mandatory. Use it only where factual questions can be answered from verified content and it improves decision-making or reduces inquiry friction.

Accordion requirements:

- Native button semantics
- Keyboard operable
- Clear expanded/collapsed state
- No yellow-only state
- Restrained motion

## 19. Forms

Forms should feel like professional project intake.

### Field rules

- Persistent visible labels; do not rely on placeholder-only labels.
- Clear required/optional treatment.
- Helpful inline errors.
- Strong keyboard focus.
- Minimum 44px touch target where interactive.
- Group related fields logically.
- Avoid asking for information that is not useful at the initial inquiry stage.

### Get Started flow

Prefer one concise page or a carefully justified progressive form. Do not introduce a multi-step wizard merely because it looks sophisticated.

## 20. Footer

Architectural, substantial, but uncluttered. Include:

- M&F brand
- Concise company statement
- Services
- Markets
- Projects
- Company / About
- Careers
- Contact
- Legal / privacy
- Get Started

Use dark charcoal/near-black as the default footer surface unless the page composition gives a strong reason otherwise.

## 21. Image Treatment

- Prioritize authentic M&F imagery.
- Use deliberate aspect ratios: landscape for projects/hero, portrait selectively for editorial storytelling, square only when composition benefits.
- Protect focal points with responsive `object-position` decisions.
- Avoid generic stock-photo identity.
- Avoid gratuitous duotone/yellow overlays.
- Use overlays only to protect text contrast.
- Optimize images and provide responsive sources.

## 22. Iconography

Use icons sparingly. They must be simple, geometric, professional, and consistent. Icons support comprehension; they do not decorate empty space.

## 23. Motion System

Use Framer Motion intentionally.

### Motion character

- Subtle
- Premium
- Smooth
- Responsive
- Restrained

### Recommended timing

```text
micro interaction: 120–200ms
standard transition: 200–350ms
section/image reveal: 400–650ms
hero sequence: staggered but fast; avoid >900ms waits for core content
```

Preferred easing: smooth ease-in-out or a refined custom cubic-bezier with similar character.

Use motion for page/section reveals, hero entrance, image reveal, navigation, hover feedback, project interaction, and counters where appropriate.

Avoid excessive parallax, bouncing, spinning, dramatic scaling, or animation on every element.

`prefers-reduced-motion` must substantially reduce or remove non-essential motion.

## 24. Responsive Rules

### Mobile first

Design order:

**Mobile → Tablet → Desktop → Large Desktop**

Intentionally reconsider at each range:

- Navigation behavior
- Hero composition
- Type scale
- Section spacing
- Grid count
- Card composition
- Image crop/aspect ratio
- CTA placement
- Form layout
- Technical tables/data

No horizontal page scrolling. No tiny text. No hover-only affordances. No desktop-scale elements squeezed into mobile.

## 25. Interaction States

Every interactive component must define:

- Default
- Hover (where pointer exists)
- Focus-visible
- Active/pressed
- Disabled where applicable
- Loading where applicable
- Error/success where applicable

Focus states must be obvious and accessible. Do not remove outlines without providing a stronger replacement.

## 26. Correct vs Incorrect Usage

### Correct

- Large authentic project image + concise project metadata.
- Strong typographic hierarchy with generous whitespace.
- Thin structural borders and disciplined alignment.
- Yellow used on a primary CTA or small key accent.
- Asymmetric but grid-aligned editorial composition.
- Purposeful dark section creating narrative contrast.
- Subtle image reveal that does not delay reading.

### Incorrect

- Generic SaaS feature-card grid.
- Repetitive rounded rectangles everywhere.
- Glassmorphism.
- Excessive gradients or shadows.
- Random blobs or decorative geometry.
- Huge yellow background areas without purpose.
- Black/yellow hazard-stripe aesthetic.
- Stock construction imagery as the core identity.
- Multiple competing CTAs.
- Animation on every section.
- Arbitrary icons.
- Template-like layouts copied across every page.

## 27. Component Composition Example

```tsx
<PageShell>
  <Navbar />
  <main>
    <Hero />
    <Section>
      <Container>
        <SectionHeader />
        <ProjectGrid>
          <ProjectCard />
        </ProjectGrid>
      </Container>
    </Section>
    <CTASection />
  </main>
  <Footer />
</PageShell>
```

This illustrates system composition, not mandatory component nesting for every page.

## 28. Quality Gate

Before completion, evaluate:

- Is hierarchy immediately understandable?
- Does the page communicate construction/engineering rather than software/startup culture?
- Is yellow restrained?
- Is the CTA obvious without becoming aggressive?
- Is spacing intentional?
- Is typography disciplined?
- Is photography doing meaningful credibility work?
- Is the composition distinctive but usable?
- Does mobile feel designed?
- Are focus, contrast, keyboard, and reduced-motion behaviors correct?
- Is performance appropriate?
- Does anything exist only because it is trendy?

If a component/page fails, refine it before considering the implementation complete.
