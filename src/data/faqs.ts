import type { Faq } from "@/types";

export const faqs: Faq[] = [
  {
    q: "What kind of engagements do you take on?",
    a: "Senior backend / Generative AI roles (full-time or contract) and freelance projects where I either ship a new AI product end-to-end or add AI capability to an existing system. Typical scope: 4–12 weeks for a focused build, longer for product partnerships.",
  },
  {
    q: "Where do you sit on the stack?",
    a: "Backend-heavy. I own API design, data modeling, async pipelines, LLM/RAG integration, billing, auth, and deployment. I work cleanly with frontend teams (React / Tailwind) and have shipped features against a React frontend on every recent project.",
  },
  {
    q: "What does 'production-grade' mean to you?",
    a: "Tenant boundaries enforced at the API edge, async pipelines for anything heavy, Stripe / billing entitlements wired to permissions, OpenAPI docs, a real test suite running in CI, observability through Sentry / Prometheus, and zero-surprise deploys via multi-stage Docker on Azure or AWS.",
  },
  {
    q: "Which LLMs and AI providers do you work with?",
    a: "Google Gemini, OpenAI, and Replicate are my daily drivers. I wrap them behind a typed service layer with retry, fallback, and cost telemetry — so swapping models or routing by tier is a config change, not a rewrite.",
  },
  {
    q: "How do you approach RAG?",
    a: "Vectors live next to the relational data — pgvector inside PostgreSQL, LangChain for orchestration, BGE embeddings hosted on RunPod for cost. I add deterministic fast paths so the LLM is skipped when a structured source can answer directly.",
  },
  {
    q: "Do you handle deployment and DevOps?",
    a: "Yes. I run Azure DevOps CI/CD across dev / staging / prod with multi-stage Docker, Supervisor for Gunicorn + workers + beat, Nginx, and Sentry. Comfortable on AWS (SES, RDS) and Azure Blob / Container Apps.",
  },
  {
    q: "How do we start?",
    a: "Email me with the problem, your stack, and a rough timeline. If it fits, I send back a short scoping doc within 48 hours and we agree on a fixed first milestone before any code.",
  },
];
