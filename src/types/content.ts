export interface ProjectImage {
  src: string;
  alt: string;
  focalPoint?: string;
}
export interface ProjectMetric {
  label: string;
  value: string;
  verified: boolean;
}
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
