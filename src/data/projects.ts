import type { CaseStudy } from "@/types";

const cgGallery = Array.from({ length: 10 }, (_, i) =>
  `/projects/creative-genie/${String(i + 1).padStart(2, "0")}.png`,
);
const cxGallery = Array.from({ length: 9 }, (_, i) =>
  `/projects/creative-experience/${String(i + 1).padStart(2, "0")}.png`,
);

export const projects: CaseStudy[] = [
  {
    slug: "creative-genie",
    name: "CreativeGenie",
    tagline: "AI content creation SaaS — image, video, ads, and asset workflows for marketing teams.",
    role: "Backend Lead — Generative AI",
    year: "2025",
    industry: "MarTech / Creative AI",
    status: "Production",
    cover: cgGallery[0],
    gallery: cgGallery,
    metrics: [
      { label: "Modular Django apps", value: "20+", hint: "Tenant-isolated AI features" },
      { label: "Upload-to-ready time", value: "−80%", hint: "Async pipelines on Celery + Redis" },
      { label: "Ad platforms integrated", value: "3", hint: "Meta, LinkedIn, Twitter" },
      { label: "Environments shipped", value: "Dev · Staging · Prod", hint: "Azure DevOps CI/CD" },
    ],
    problem:
      "Marketing teams stitched together five separate AI tools — image gen, background tooling, ad platforms, billing, asset libraries — with no tenant boundary, no audit trail, and no way to gate premium features. Latency on heavy AI tasks blocked customer adoption.",
    solution:
      "A single multi-tenant Django + DRF backend that wraps Google Gemini and Replicate behind a clean service layer, offloads heavy work to Celery, and exposes a typed REST API consumed by a React frontend. Every CRUD is workspace- and role-aware by default.",
    innovation: [
      "Reusable BaseModel + BaseModelViewSet abstractions enforce tenant isolation on every CRUD without bespoke code per app.",
      "20+ AI feature apps share a unified service layer over Gemini and Replicate — cost, retry, and fallback live in one place.",
      "Stripe billing is wired to custom DRF permissions (IsValidSubscription, IsUserInWorkspace) so premium features are gated at the API edge, not in templates.",
      "Hermetic CI: pytest + factory_boy with auto-mocked Sentry and Azure Blob — tests run fast and never touch real infrastructure.",
    ],
    process: [
      {
        title: "Domain modeling &amp; tenant boundaries",
        body: "Mapped workspaces, roles (admin / client / creative / media), and feature gates first — so every app inherits isolation rather than reinventing it.",
      },
      {
        title: "AI service layer",
        body: "Wrapped Gemini and Replicate calls behind a typed service interface with retry, fallback, and cost telemetry — so feature teams don't touch SDKs directly.",
      },
      {
        title: "Async pipelines",
        body: "Moved every heavy job — image generation, campaign optimization, asset processing — onto Celery 5.4 + Redis with Celery Beat schedules and per-stage status tracking.",
      },
      {
        title: "Billing &amp; entitlements",
        body: "Stripe plans seeded via management commands, trial assignment on signup, cancel-at-period-end sync, and custom DRF permissions enforcing entitlements at every endpoint.",
      },
      {
        title: "Ads platform integrations",
        body: "OAuth linking, ad-account eligibility checks, campaign creation, and automated status synchronization for Meta, LinkedIn, and Twitter.",
      },
      {
        title: "Productionization",
        body: "Multi-stage Docker (Nginx + Supervisor for Gunicorn + workers), Azure Pipelines across dev / staging / prod, Sentry observability, and OpenAPI docs via drf-spectacular.",
      },
    ],
    outcomes: [
      "Cut upload-to-ready time by ~80% on heavy AI workloads by moving generation off the request path.",
      "Shipped 20+ AI features behind a single tenant boundary — no per-app permission drift.",
      "Premium feature gating is enforced at the API edge, eliminating accidental access.",
      "CI runs the full pytest suite hermetically — no live Azure or Sentry calls in tests.",
    ],
    clientValue:
      "A single platform replaces five point tools, brings billing + ads + AI under one workspace model, and gives the team a runway to ship new AI features in days instead of weeks.",
    stack: [
      "Django 4.2",
      "Django REST Framework",
      "PostgreSQL",
      "Celery 5.4 + Redis",
      "Google Gemini",
      "Replicate",
      "Stripe",
      "Azure Blob Storage",
      "Azure Container Apps",
      "Azure DevOps Pipelines",
      "Docker (multi-stage)",
      "Nginx + Supervisor + Gunicorn",
      "Sentry",
      "drf-spectacular",
      "pytest + factory_boy",
    ],
    highlights: [
      "Multi-tenant SaaS with workspace-scoped access control and four-role RBAC",
      "20+ modular AI feature apps over Gemini + Replicate",
      "Stripe-gated entitlements via custom DRF permissions",
      "Meta / LinkedIn / Twitter ads integrations",
      "Async-first pipelines on Celery + Redis",
      "Hermetic CI with auto-mocked external services",
    ],
    links: [
      { label: "Visit live app", href: "https://app.creativegenie.ai/" },
    ],
  },
  {
    slug: "creative-experience",
    name: "Creative Experience",
    tagline: "AI-powered document analytics + RAG platform for sales and revenue teams.",
    role: "Backend Engineer — RAG &amp; AI",
    year: "2025",
    industry: "Sales Enablement / DocTech",
    status: "Production",
    cover: cxGallery[0],
    gallery: cxGallery,
    metrics: [
      { label: "Related models", value: "~30", hint: "Rich document analytics layer" },
      { label: "Migrations shipped", value: "50+", hint: "Versioned, reversible schema" },
      { label: "Vector store", value: "pgvector", hint: "RAG inside Postgres — no extra DB" },
      { label: "Pipeline stages", value: "6", hint: "Locked, status-tracked task chain" },
    ],
    problem:
      "Sales teams shared PDFs and decks blindly — no signal on who read what, no answers about the content, and no way to search across an entire library. Existing tools either ignored AI or bolted it on without analytics.",
    solution:
      "A multi-tenant Django 5 + DRF backend that ingests documents, runs a coordinated async pipeline (preview → render → TOC → AI description → embedding), and exposes both a rich analytics layer and a RAG-powered semantic search — all consumed by a React frontend.",
    innovation: [
      "RAG inside PostgreSQL via pgvector + LangChain — no separate vector database, no duplicated source of truth.",
      "RunPod-hosted BGE embeddings keep inference cost low while preserving quality.",
      "Deterministic fast path: PyMuPDF parses TOC where possible; Gemini fallback handles the rest — the LLM is skipped when not needed.",
      "Coordinated Celery task chain with select_for_update locking and per-stage status tracking — no half-processed documents.",
    ],
    process: [
      {
        title: "Document model &amp; auth",
        body: "UUID-keyed, email-login User model with django-allauth + JWT + Google OAuth, plus reusable abstract mixins (TimestampMixin, UserStampedMixin) used across every app.",
      },
      {
        title: "Async ingestion pipeline",
        body: "Celery + Redis chain: preview-image extraction → page rendering → TOC parsing → AI description → vector embedding. select_for_update locking and per-stage status keep concurrent uploads safe.",
      },
      {
        title: "RAG &amp; semantic search",
        body: "LangChain orchestrates retrieval over pgvector with RunPod-hosted BGE embeddings, keeping vectors next to relational data.",
      },
      {
        title: "Document analytics",
        body: "~30 related models capture page-level views, dwell time, device + geo breakdowns, click maps, and per-user / aggregate roll-ups.",
      },
      {
        title: "Billing &amp; subscriptions",
        body: "Stripe plans, checkout, and webhooks with seedable plan data via Django management commands.",
      },
      {
        title: "Productionization",
        body: "Azure DevOps CI/CD, multi-stage Dockerfiles, Supervisor running Gunicorn + worker + beat + Nginx sidecar for Azure Container Apps health checks.",
      },
    ],
    outcomes: [
      "Documents become queryable knowledge — semantic search returns answers, not just hits.",
      "Sales teams see exactly which slide a prospect spent time on, on which device, in which region.",
      "RAG runs inside Postgres — one DB to back up, one DB to scale.",
      "Deterministic fast paths cut LLM cost on structured PDFs to near zero.",
    ],
    clientValue:
      "Documents stop being dead PDFs and become an active sales surface — measurable, searchable, and ready for AI-grounded conversations with prospects.",
    stack: [
      "Django 5.2",
      "Django REST Framework",
      "PostgreSQL + pgvector",
      "Celery + Redis",
      "LangChain",
      "BGE Embeddings (RunPod)",
      "Google Gemini",
      "PyMuPDF",
      "Stripe",
      "Azure Blob Storage",
      "Azure Container Apps",
      "Azure DevOps",
      "Docker + Supervisor + Nginx",
      "drf-spectacular",
    ],
    highlights: [
      "Multi-tenant Django 5 backend with JWT + Google OAuth + django-allauth",
      "Coordinated Celery pipeline with select_for_update locking",
      "RAG over pgvector with BGE embeddings",
      "Page-level analytics: dwell, device, geo, heatmaps",
      "PyMuPDF fast path with Gemini fallback",
      "Azure Container Apps deployment with worker + beat sidecars",
    ],
    links: [
      { label: "Visit live app", href: "https://app.creativexperience.ai/" },
    ],
  },
  {
    slug: "review-management-system",
    name: "Review Management System",
    tagline: "Multi-channel SaaS for collecting, monitoring, and verifying customer reviews.",
    role: "Backend Engineer",
    year: "2024",
    industry: "Customer Experience SaaS",
    status: "Shipped",
    cover: "/projects/review-management-system/cover.svg",
    gallery: [],
    metrics: [
      { label: "Channels supported", value: "3", hint: "Email · SMS · WhatsApp" },
      { label: "Auth", value: "Google OAuth2", hint: "Plus Google Business API" },
      { label: "Async delivery", value: "Celery + Redis", hint: "Reliable retries" },
      { label: "Container parity", value: "Docker", hint: "Local · staging · prod" },
    ],
    problem:
      "Local businesses lost visibility on customer feedback scattered across review sites and missed easy wins because they had no consistent way to ask for reviews.",
    solution:
      "A SaaS platform that signs users in via Google, pulls business reviews via the Google Business API, and orchestrates Email / SMS / WhatsApp outreach for new review requests — all with reliable async delivery.",
    innovation: [
      "One funnel for every review channel — operators stop juggling tabs.",
      "Async-first delivery so transient API failures don't lose review requests.",
      "Container parity across local, staging, and production minimizes deploy surprises.",
    ],
    process: [
      { title: "OAuth + Google Business", body: "Sign-in via Google OAuth2 plus Google Business API integration to pull location reviews." },
      { title: "Multi-channel outreach", body: "Email / SMS / WhatsApp delivery via Celery + Redis with idempotent task design." },
      { title: "Verification &amp; monitoring", body: "Third-party APIs to monitor and verify reviews across platforms." },
      { title: "Productionization", body: "Dockerized services for parity across environments." },
    ],
    outcomes: [
      "Operators run review collection from a single dashboard.",
      "Async delivery survives upstream provider blips.",
      "New environments spin up from the same container images.",
    ],
    clientValue:
      "More reviews, less manual work, and a clear picture of how a business looks across the platforms customers actually check.",
    stack: ["Django", "DRF", "PostgreSQL", "Celery + Redis", "Mailgun", "Docker"],
    highlights: [
      "Google OAuth2 + Google Business API",
      "Email / SMS / WhatsApp outreach",
      "Async, retry-safe delivery via Celery",
      "Containerized across all environments",
    ],
  },
  {
    slug: "mediusware-platform",
    name: "Mediusware — APIs &amp; HR System",
    tagline:
      "Two-track backend work at Mediusware: REST APIs powering mediusware.com, plus an internal Django-Admin HR system managing ~100 employees end to end.",
    role: "Backend Engineer (Python / Django)",
    year: "2023 — 2024",
    industry: "Software Services · HR Internal Tooling",
    status: "Live",
    cover: "/projects/mediusware/cover.svg",
    gallery: [],
    metrics: [
      { label: "Employees managed", value: "~100", hint: "HR system company-wide" },
      { label: "HR modules shipped", value: "6", hint: "Profile · Attendance · Leave · Payroll · Salary · Payments" },
      { label: "REST endpoints", value: "30+", hint: "mediusware.com public &amp; admin APIs" },
      { label: "Deploy parity", value: "Docker", hint: "Local · staging · prod" },
    ],
    problem:
      "Two distinct gaps at Mediusware. Externally, mediusware.com needed a clean backend for contact, lead capture, and content delivery on the company site. Internally, HR ran off scattered spreadsheets — employee records, attendance, monthly salary sheets, and payment confirmations sitting in different files owned by different people. Payroll for ~100 staff was manual, error-prone, and unsustainable.",
    solution:
      "Two tracks, one Django foundation. Track A: I built REST APIs in Django + DRF behind mediusware.com — leads, contact, blog/content, and admin endpoints consumed by the marketing frontend. Track B: I built an internal HR system on Django Admin (no separate frontend needed) covering ~100 employees — profiles, attendance, leave, payroll generation, salary sheets, and payment records — with role-aware access for HR, finance, managers, and employees.",
    innovation: [
      "Shared Django foundation with two delivery surfaces — DRF for the public site, customized Django Admin for HR — so the team didn't ship two stacks.",
      "Django Admin used as the HR product surface: customized list filters, change forms, inline relations, custom admin actions for monthly salary generation, and role-scoped querysets.",
      "Single source of truth for employees — profiles, designations, departments, and salary structure all reference one canonical model the payroll engine reads from.",
      "Attendance + leave feed directly into the salary sheet engine — no copying numbers between sheets.",
      "Role-based access on both sides: DRF permissions on the public APIs, Django Admin permissions + custom querysets on the HR side.",
    ],
    process: [
      {
        title: "Public APIs (mediusware.com)",
        body: "Django + DRF endpoints for leads, contact, content, and admin — clean serializers, permission classes, and OpenAPI docs consumed by the marketing frontend.",
      },
      {
        title: "Employee data model",
        body: "Normalized models for employees, designations, departments, salary components, leave balances, and payment records — every HR module reads from the same canonical schema.",
      },
      {
        title: "HR via Django Admin",
        body: "Customized Django Admin (list_filter, search_fields, inlines, fieldsets, custom admin actions) so HR and finance run the whole system without a separate frontend.",
      },
      {
        title: "Attendance &amp; leave",
        body: "Daily attendance logging with check-in/check-out, leave requests with manager approval flow, and balance calculations feeding directly into monthly payroll.",
      },
      {
        title: "Payroll &amp; salary sheets",
        body: "Salary engine combining base pay, attendance, deductions, bonuses, and tax — generates per-employee payslips and a consolidated monthly sheet for finance via a custom admin action.",
      },
      {
        title: "Payment records &amp; audit",
        body: "Payment ledger linking each salary disbursement to bank/account info with status, date, and reference — full audit trail per employee.",
      },
      {
        title: "Role-based access",
        body: "DRF permission classes on public APIs; Django Admin permissions plus custom get_queryset overrides on the HR side so HR / finance / managers / employees see only what they should.",
      },
      {
        title: "Productionization",
        body: "Dockerized services for parity across local, staging, and production; Celery + Redis for async tasks like monthly payroll exports; cross-functional delivery with frontend, design, and QA.",
      },
    ],
    outcomes: [
      "mediusware.com runs on a clean Django + DRF backend instead of bespoke per-page logic.",
      "Replaced HR spreadsheets with one Django-Admin system covering ~100 employees end to end.",
      "Cut monthly payroll cycle from manual reconciliation to a generated salary sheet via a single admin action.",
      "Audit-ready payment records — every disbursement linked to attendance + salary structure.",
      "Same Docker images ran locally, in staging, and in production — predictable deploys.",
    ],
    clientValue:
      "Mediusware got two systems on one stack: a clean public-site backend and an internal HR platform that runs through Django Admin without a separate frontend. HR and finance stopped chasing spreadsheets, and the company site stopped depending on hand-rolled glue code.",
    stack: [
      "Python",
      "Django",
      "Django Admin (customized)",
      "Django REST Framework",
      "PostgreSQL",
      "Celery + Redis",
      "Google OAuth2",
      "JWT Auth",
      "Mailgun",
      "Docker",
      "drf-spectacular",
    ],
    highlights: [
      "Public REST APIs powering mediusware.com",
      "HR system for ~100 employees built on customized Django Admin",
      "Profiles · Attendance · Leave · Payroll · Salary sheets · Payments",
      "Custom admin actions for monthly salary sheet generation",
      "Role-based access: DRF permissions + Django Admin querysets",
      "Async tasks on Celery + Redis; Dockerized for parity across environments",
    ],
    links: [
      { label: "Visit mediusware.com", href: "https://mediusware.com/" },
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
