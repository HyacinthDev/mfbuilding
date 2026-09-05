import card1Image from "../assets/card1.webp";
import type {
  Job,
  Market,
  Project,
  Service,
  Statistic,
} from "../types/content";

export const contentRequired =
  "CONTENT REQUIRED — Verify with M&F before launch.";

export const services: Service[] = [
  {
    id: "design-build",
    slug: "design-build",
    name: "Design / Build",
    category: "Construction & Delivery",
    summary:
      "Planning-aware construction delivery that connects early decisions with field execution.",
    description:
      "M&F should be presented as a capable project-delivery organization able to support work from concept through completion. Verify exact design/build scope with M&F before launch.",
    capabilities: [
      "Concept-to-completion planning",
      "Project preparation",
      "Construction coordination",
      contentRequired,
    ],
    relatedMarketIds: ["federal", "commercial", "residential"],
  },
  {
    id: "government-construction",
    slug: "government-construction",
    name: "Government Construction",
    category: "Construction & Delivery",
    summary:
      "Professional, compliance-minded construction capability for public-sector stakeholders.",
    capabilities: [
      "Federal project experience",
      "State and local construction needs",
      "Responsive coordination",
      contentRequired,
    ],
    relatedMarketIds: ["federal", "state-local"],
  },
  {
    id: "commercial-residential",
    slug: "commercial-residential",
    name: "Commercial & Residential Construction",
    category: "Construction & Delivery",
    summary:
      "Clear construction services for commercial project teams and residential clients.",
    capabilities: [
      "Commercial scopes",
      "Residential construction",
      "Maintenance and repairs",
      contentRequired,
    ],
    relatedMarketIds: ["commercial", "residential"],
  },
  {
    id: "civil-infrastructure",
    slug: "civil-infrastructure",
    name: "Site Work, Paving & Infrastructure",
    category: "Infrastructure & Civil",
    summary:
      "Civil and site-related services spanning preparation, drainage, paving, utilities, and heavy work.",
    capabilities: [
      "Site work",
      "Paving",
      "Drainage",
      "Utilities",
      "Heavy/civil construction",
    ],
    relatedMarketIds: ["federal", "state-local", "commercial"],
  },
  {
    id: "concrete-structural",
    slug: "concrete-structural",
    name: "Foundations, Concrete & Structural Work",
    category: "Infrastructure & Civil",
    summary:
      "Foundational and structural capabilities for durable built outcomes.",
    capabilities: [
      "Foundations",
      "Concrete",
      "Structural work",
      contentRequired,
    ],
    relatedMarketIds: ["commercial", "residential", "state-local"],
  },
  {
    id: "managed-services",
    slug: "managed-services",
    name: "Demolition, Maintenance & Managed Services",
    category: "Specialized / Managed Services",
    summary:
      "Responsive construction support for demolition, repairs, property management, landscaping, and hardscapes.",
    capabilities: [
      "Demolition",
      "Maintenance",
      "Repair",
      "Landscaping / hardscapes",
      "Property-management related work",
    ],
    relatedMarketIds: ["associations-property", "commercial", "residential"],
  },
];

export const markets: Market[] = [
  {
    id: "federal",
    slug: "federal",
    name: "Federal",
    audience:
      "Procurement teams, contracting officers, and federal project stakeholders.",
    summary:
      "Reliability, documentation discipline, responsive mobilization, and relevant government construction experience.",
    serviceIds: [
      "government-construction",
      "design-build",
      "civil-infrastructure",
    ],
  },
  {
    id: "state-local",
    slug: "state-local",
    name: "State & Local",
    audience:
      "Public works, agencies, municipalities, and local project stakeholders.",
    summary:
      "Civil, infrastructure, repair, and construction services where schedule discipline and public accountability matter.",
    serviceIds: [
      "government-construction",
      "civil-infrastructure",
      "concrete-structural",
    ],
  },
  {
    id: "commercial",
    slug: "commercial",
    name: "Commercial",
    audience: "Owners, operators, developers, and project managers.",
    summary:
      "Construction and site delivery support shaped around scope clarity, budget awareness, schedule, and communication.",
    serviceIds: [
      "commercial-residential",
      "design-build",
      "civil-infrastructure",
    ],
  },
  {
    id: "residential",
    slug: "residential",
    name: "Residential",
    audience: "Homeowners and residential clients.",
    summary:
      "Understandable construction services with process clarity, trust, and quality workmanship.",
    serviceIds: [
      "commercial-residential",
      "concrete-structural",
      "managed-services",
    ],
  },
  {
    id: "associations-property",
    slug: "associations-property-managers",
    name: "Associations & Property Managers",
    audience: "Associations, communities, and property-management teams.",
    summary:
      "Responsive maintenance, repair, site, hardscape, and managed construction support.",
    serviceIds: ["managed-services", "civil-infrastructure"],
  },
];

const placeholderImage = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1400&q=78`;
export const projects: Project[] = [
  {
    id: "project-verification",
    slug: "verified-project-inventory-required",
    name: "Verified Project Inventory Required",
    location: contentRequired,
    marketIds: ["commercial"],
    serviceIds: ["design-build", "civil-infrastructure"],
    projectType: contentRequired,
    summary:
      "Structured case-study space prepared for verified M&F work. Replace this development record with real project information from M&F before launch.",
    scope: contentRequired,
    challenge: contentRequired,
    approach: contentRequired,
    execution: contentRequired,
    result: contentRequired,
    status: contentRequired,
    images: [
      {
        src: card1Image,
        alt: "Temporary placeholder construction site photography; replace with verified M&F project imagery.",
      },
    ],
    featured: true,
  },
  {
    id: "infrastructure-verification",
    slug: "infrastructure-case-study-required",
    name: "Infrastructure Case Study Required",
    location: contentRequired,
    marketIds: ["state-local", "federal"],
    serviceIds: ["civil-infrastructure", "concrete-structural"],
    summary:
      "A future proof point for civil, site, drainage, paving, or utility work once verified details are supplied.",
    challenge: contentRequired,
    approach: contentRequired,
    result: contentRequired,
    images: [
      {
        src: placeholderImage("photo-1541888946425-d81bb19240f5"),
        alt: "Temporary placeholder infrastructure construction photography; replace with verified M&F imagery.",
      },
    ],
    featured: true,
  },
  {
    id: "managed-services-verification",
    slug: "managed-services-project-required",
    name: "Managed Services Project Required",
    location: contentRequired,
    marketIds: ["associations-property"],
    serviceIds: ["managed-services"],
    summary:
      "A future project example for property management, repair, maintenance, landscaping, hardscape, or demolition work.",
    scope: contentRequired,
    images: [
      {
        src: placeholderImage("photo-1518005020951-eccb494ad742"),
        alt: "Temporary placeholder built-environment detail; replace with verified M&F imagery.",
      },
    ],
    featured: true,
  },
];

export const statistics: Statistic[] = [
  {
    id: "experience",
    value: contentRequired,
    label: "Years of experience",
    context: "Verify company history/founding information.",
    verified: false,
  },
  {
    id: "equipment",
    value: contentRequired,
    label: "Owned equipment and vehicles",
    context: "Verify inventory language before launch.",
    verified: false,
  },
  {
    id: "government",
    value: contentRequired,
    label: "Government project experience",
    context: "Verify references and permitted claims.",
    verified: false,
  },
];

export const jobs: Job[] = [
  {
    id: "careers-content",
    slug: "current-openings-required",
    title: "Current Openings Required",
    location: contentRequired,
    employmentType: contentRequired,
    summary:
      "Career listings and requirements must be verified with M&F before launch.",
    active: true,
    responsibilities: [contentRequired],
    requirements: [contentRequired],
  },
];
