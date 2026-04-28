import Link from "next/link";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/lib/config";
import {
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Activity,
  BookOpen,
  Play,
  CheckCircle2,
  CircleDot,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              {appConfig.name.charAt(0)}
            </div>
            <span className="font-semibold text-lg">{appConfig.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
          <Activity className="h-3.5 w-3.5" />
          Workflow orchestration for the AI age
        </div>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">IF/THEN</span>{" "}
          for the AI age
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Turn decisions, approvals, and logic into reliable automated workflows.
          Build in minutes. Execute with confidence. Trace every step.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0">
              Build your first workflow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Sign in
            </Button>
          </Link>
        </div>
      </section>

      {/* Workflow Preview */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-2xl border bg-gradient-to-b from-white to-primary/[0.02] p-8 md:p-12">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6 text-center">Workflow Preview</p>
          <div className="flex items-center justify-center gap-0 overflow-x-auto py-4">
            {/* Start Node */}
            <div className="flex flex-col items-center shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 border-2 border-green-200">
                <Play className="h-5 w-5" />
              </div>
              <span className="mt-2 text-xs font-medium text-muted-foreground">Start</span>
            </div>
            {/* Connector */}
            <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-green-300 to-violet-300 shrink-0" />
            {/* Condition Node */}
            <div className="flex flex-col items-center shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg rotate-45 bg-violet-100 border-2 border-violet-200">
                <CircleDot className="h-5 w-5 text-violet-600 -rotate-45" />
              </div>
              <span className="mt-2 text-xs font-medium text-muted-foreground">Condition</span>
            </div>
            {/* Connector */}
            <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-violet-300 to-purple-300 shrink-0" />
            {/* Action Node */}
            <div className="flex flex-col items-center shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-purple-100 text-purple-600 border-2 border-purple-200">
                <Zap className="h-5 w-5" />
              </div>
              <span className="mt-2 text-xs font-medium text-muted-foreground">Action</span>
            </div>
            {/* Connector */}
            <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-purple-300 to-emerald-300 shrink-0" />
            {/* End Node */}
            <div className="flex flex-col items-center shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-200">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="mt-2 text-xs font-medium text-muted-foreground">End</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-gradient-to-b from-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-center text-3xl font-bold">
            Everything you need to orchestrate decisions
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
            From simple approval chains to complex multi-step workflows, Flow gives you
            the building blocks to automate any business process.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <GitBranch className="h-6 w-6" />,
                title: "Visual Builder",
                desc: "Design workflows visually with conditions, actions, and approval gates. No code required.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Approval Chains",
                desc: "Route decisions through the right people. Multi-tier approvals with automatic escalation.",
              },
              {
                icon: <Activity className="h-6 w-6" />,
                title: "Execution Traces",
                desc: "Full visibility into every run. See inputs, outputs, and timing for every step.",
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Template Library",
                desc: "Start fast with pre-built workflows for HR, finance, engineering, and operations.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-white p-6 hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-center text-3xl font-bold">Start from a template</h2>
          <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
            Pre-built workflows for common business processes. Customize and deploy in minutes.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Expense Approval",
                category: "Finance",
                steps: 5,
                desc: "Route expense requests through manager and finance approval based on amount thresholds.",
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "Deploy Pipeline",
                category: "Engineering",
                steps: 7,
                desc: "Automated deployment with staging validation, approval gates, and rollback triggers.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "Content Review",
                category: "Marketing",
                steps: 4,
                desc: "Multi-stage content approval with legal review, brand check, and scheduled publishing.",
                color: "from-indigo-500 to-violet-500",
              },
            ].map((template) => (
              <div
                key={template.title}
                className="group rounded-xl border bg-white overflow-hidden hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
              >
                <div className={`h-1.5 bg-gradient-to-r ${template.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {template.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{template.steps} steps</span>
                  </div>
                  <h3 className="text-lg font-semibold">{template.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {template.desc}
                  </p>
                  <button className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Use template <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t bg-gradient-to-b from-primary/[0.03] to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { value: "2,400", label: "workflows built" },
              { value: "99.7%", label: "uptime" },
              { value: "12K", label: "approvals processed" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <h2 className="text-3xl font-bold">Ready to automate your decisions?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Join teams using {appConfig.name} to turn logic into reliable workflows.
          </p>
          <Link href="/signup" className="mt-8 inline-block">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0">
              Create free account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-sm text-muted-foreground">
          <span>
            &copy; {new Date().getFullYear()} {appConfig.name}. All rights
            reserved.
          </span>
          <span>A 12 Cities venture</span>
        </div>
      </footer>
    </div>
  );
}
