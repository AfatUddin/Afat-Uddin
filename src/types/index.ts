export type Metric = {
  label: string;
  value: string;
  hint?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  industry: string;
  status: "Production" | "Live" | "Shipped";
  cover: string;
  gallery: string[];
  metrics: Metric[];
  problem: string;
  solution: string;
  innovation: string[];
  process: { title: string; body: string }[];
  outcomes: string[];
  clientValue: string;
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
};

export type Service = {
  icon: string;
  title: string;
  pitch: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Faq = { q: string; a: string };

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Profile = {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
  avatar: string;
  socials: { label: string; href: string; icon: string }[];
  availability: string;
  yearsExperience: number;
};
