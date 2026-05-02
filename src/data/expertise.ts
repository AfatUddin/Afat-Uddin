export type ExpertisePillar = {
  icon: string;
  title: string;
  body: string;
  tags: string[];
};

export const expertise: ExpertisePillar[] = [
  {
    icon: "Brain",
    title: "Generative AI Systems",
    body: "Production LLM features behind a typed service layer — retry, fallback, cost telemetry, and observable traces — not glue code around an SDK.",
    tags: ["Gemini", "OpenAI", "Replicate", "Prompt Engineering"],
  },
  {
    icon: "Search",
    title: "RAG &amp; Semantic Search",
    body: "Retrieval pipelines that live next to your data: pgvector in Postgres, LangChain for orchestration, deterministic fast paths to skip the LLM when possible.",
    tags: ["LangChain", "pgvector", "BGE Embeddings", "Hybrid Search"],
  },
  {
    icon: "MessagesSquare",
    title: "AI Chatbots &amp; Agents",
    body: "Tool-calling agents with structured output validation, per-tenant memory, streaming responses, and abuse throttling — wired into real product surfaces.",
    tags: ["Tool Use", "Memory", "Streaming", "Guardrails"],
  },
  {
    icon: "Layers",
    title: "Multi-tenant SaaS Backends",
    body: "Workspace-scoped Django/DRF and FastAPI apps with OAuth, JWT, RBAC, Stripe-gated entitlements, and OpenAPI docs by default.",
    tags: ["Django", "DRF", "FastAPI", "Stripe", "OAuth2"],
  },
  {
    icon: "Activity",
    title: "Async &amp; Reliability",
    body: "Celery + Redis pipelines with status tracking, idempotent retries, and Sentry / Prometheus / Grafana visibility from day one.",
    tags: ["Celery", "Redis", "Sentry", "Prometheus"],
  },
  {
    icon: "Cloud",
    title: "Cloud Deployment",
    body: "Multi-stage Docker on Azure Container Apps and AWS, Azure DevOps CI/CD across dev / staging / prod, Nginx + Supervisor + Gunicorn.",
    tags: ["Azure", "AWS", "Docker", "Azure DevOps"],
  },
];
