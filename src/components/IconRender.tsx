import {
  Activity,
  Brain,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Github,
  Layers,
  Linkedin,
  Mail,
  MessagesSquare,
  MessageSquare,
  Search,
  Sparkles,
  Workflow,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Activity,
  Brain,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Github,
  Layers,
  Linkedin,
  Mail,
  MessagesSquare,
  MessageSquare,
  Search,
  Sparkles,
  Workflow,
  Youtube,
};

export default function IconRender({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name] ?? Sparkles;
  return <Icon className={className} />;
}
