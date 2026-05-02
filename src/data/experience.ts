import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "CodefusionAI",
    role: "Software Engineer — Generative AI",
    period: "Jan 2025 — Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Lead backend for two production Generative AI SaaS platforms — CreativeGenie and Creative Experience — on Django + DRF with multi-tenant workspaces and role-based access control.",
      "Engineered LLM integrations with Google Gemini and Replicate behind a clean service layer, powering AI image and text generation, magic eraser/replace, upscaling, retouching, and AI-generated document descriptions.",
      "Built RAG and semantic search using LangChain + pgvector with RunPod-hosted BGE embeddings — vector search inside the existing PostgreSQL instance, lower inference cost.",
      "Designed async document- and asset-processing pipelines on Celery + Redis (with Celery Beat) and cut upload-to-ready time by 80% on heavy AI workloads.",
      "Implemented Stripe subscription billing (plans, checkout, webhooks, trials) plus custom DRF permissions to gate premium features.",
      "Shipped Meta, LinkedIn, and Twitter ads integrations: OAuth linking, account eligibility, campaign creation, and automated status sync.",
      "Authored CI/CD on Azure DevOps across dev / staging / prod, multi-stage Docker (Gunicorn + Nginx via Supervisor), and Sentry observability.",
      "Set up DRF throttling, normalized error envelope, drf-spectacular OpenAPI docs, and a pytest + factory_boy test suite wired into CI.",
    ],
  },
  {
    company: "Mediusware Ltd.",
    role: "Junior Software Engineer — Python / Django",
    period: "Jan 2023 — Dec 2024",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Developed and maintained scalable web applications using Python, Django, and DRF — designing APIs and backend systems for production traffic.",
      "Built a SaaS Review Management System with Google OAuth2 sign-in and Google Business API to retrieve reviews, plus Email / SMS / WhatsApp outreach for review requests.",
      "Integrated third-party APIs to monitor and verify customer reviews across platforms, with Celery + Redis handling async delivery.",
      "Implemented web scraping and automation pipelines (BeautifulSoup, Scrapy, Selenium, Requests) to streamline data collection across multiple sources.",
      "Containerized services with Docker for parity across local, staging, and production.",
      "Collaborated with frontend, design, QA, and product to ship reliable software.",
    ],
  },
];
