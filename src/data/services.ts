import type { Service } from "@/types";

export const services: Service[] = [
  {
    icon: "Sparkles",
    title: "Generative AI Product Engineering",
    pitch:
      "End-to-end LLM products — from prompt design to multi-tenant SaaS — built on Django, FastAPI, and a clean service layer over Gemini, OpenAI, and Replicate.",
    bullets: [
      "LLM service abstractions with cost, retry, and fallback baked in",
      "Async generation pipelines on Celery + Redis with status tracking",
      "Tenant isolation, role-based access, and Stripe-gated premium features",
    ],
  },
  {
    icon: "Database",
    title: "RAG &amp; Semantic Search Systems",
    pitch:
      "Production retrieval pipelines using LangChain, pgvector, and BGE embeddings — vector search that lives next to your relational data, not in a separate stack.",
    bullets: [
      "Document ingestion → chunking → embedding → re-ranking",
      "Hybrid keyword + vector search with deterministic fast paths",
      "Cost-aware inference: RunPod-hosted embeddings, cached responses",
    ],
  },
  {
    icon: "MessageSquare",
    title: "AI Chatbots &amp; Conversational Agents",
    pitch:
      "Domain-grounded chat experiences with memory, tool use, and guardrails — wired into your existing data, auth, and analytics so the bot actually does work.",
    bullets: [
      "Tool-calling agents with structured output validation",
      "Conversation memory + per-tenant knowledge isolation",
      "Streaming responses, abuse throttling, and observable traces",
    ],
  },
  {
    icon: "Workflow",
    title: "AI Integration into Existing Products",
    pitch:
      "I add AI features to systems you already run — without rewrites. Behind a service layer, behind feature flags, with sensible failure modes.",
    bullets: [
      "Drop-in AI endpoints behind DRF / FastAPI permission classes",
      "Stripe-gated entitlements, usage metering, and admin dashboards",
      "Sentry, Prometheus, Grafana hooks so quality is visible day one",
    ],
  },
  {
    icon: "Cpu",
    title: "Backend Architecture &amp; Multi-tenant SaaS",
    pitch:
      "Workspace-scoped Django/DRF or FastAPI backends with OAuth, JWT, RBAC, and Azure/AWS deployment patterns proven across 20+ production apps.",
    bullets: [
      "Multi-tenant data models with workspace + role enforcement",
      "OpenAPI docs, error envelopes, throttling, and a real test suite",
      "CI/CD on Azure DevOps, multi-stage Docker, Nginx + Supervisor",
    ],
  },
  {
    icon: "Gauge",
    title: "AI Performance &amp; Cost Optimization",
    pitch:
      "Existing AI feature too slow or too expensive? I cut latency and inference spend without sacrificing quality.",
    bullets: [
      "Async offloading, batching, and request coalescing",
      "Deterministic fast paths that skip the LLM when possible",
      "Embedding cache, prompt cache, and model-tier routing",
    ],
  },
];
