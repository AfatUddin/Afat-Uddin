import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Afat built the entire AI backend behind our content platform — workspaces, RBAC, billing, and 20+ AI features over Gemini and Replicate. He thinks in systems, not features.",
    name: "Engineering Lead",
    role: "Engineering Lead",
    company: "CodefusionAI",
  },
  {
    quote:
      "He moved every heavy AI job onto Celery and cut our upload-to-ready time by ~80%. Customers stopped complaining about latency the week we shipped it.",
    name: "Product Manager",
    role: "Product Manager",
    company: "CreativeGenie",
  },
  {
    quote:
      "RAG inside Postgres, deterministic fast paths, page-level analytics — it's the cleanest AI ingestion pipeline I've seen on a Django stack.",
    name: "Senior Backend Engineer",
    role: "Peer Reviewer",
    company: "Creative Experience",
  },
];
