-- flow.at: Logic, Workflow & Decision Orchestration
-- Migration: 00002_workflows
-- Tables: workflows, workflow_nodes, workflow_executions, execution_steps, templates

-- Workflow definitions
create table if not exists public.workflows (
  id uuid primary key default gen_random_uuid(),
  org_id uuid references public.organizations(id),
  name text not null,
  description text,
  status text default 'draft' check (status in ('draft', 'active', 'paused', 'archived')),
  trigger_type text not null check (trigger_type in ('manual', 'webhook', 'schedule', 'event')),
  trigger_config jsonb default '{}',
  created_by uuid references auth.users(id),
  version integer default 1,
  created_at timestamptz default now()
);

-- Nodes within a workflow (actions, conditions, approvals)
create table if not exists public.workflow_nodes (
  id uuid primary key default gen_random_uuid(),
  workflow_id uuid references public.workflows(id) on delete cascade,
  node_type text not null check (node_type in ('action', 'condition', 'approval', 'ai_invoke', 'webhook', 'delay', 'transform')),
  position jsonb default '{"x": 0, "y": 0}',
  config jsonb default '{}',
  next_nodes jsonb default '[]',
  created_at timestamptz default now()
);

-- Workflow execution instances
create table if not exists public.workflow_executions (
  id uuid primary key default gen_random_uuid(),
  workflow_id uuid references public.workflows(id) on delete cascade,
  trigger_data jsonb default '{}',
  status text default 'running' check (status in ('running', 'completed', 'failed', 'cancelled', 'waiting_approval')),
  started_at timestamptz default now(),
  completed_at timestamptz,
  current_node_id uuid references public.workflow_nodes(id),
  created_at timestamptz default now()
);

-- Individual step executions within a workflow run
create table if not exists public.execution_steps (
  id uuid primary key default gen_random_uuid(),
  execution_id uuid references public.workflow_executions(id) on delete cascade,
  node_id uuid references public.workflow_nodes(id),
  status text default 'pending' check (status in ('pending', 'running', 'completed', 'failed', 'skipped')),
  input jsonb default '{}',
  output jsonb default '{}',
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- Reusable workflow templates
create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  org_id uuid references public.organizations(id),
  name text not null,
  description text,
  category text,
  workflow_snapshot jsonb not null default '{}',
  is_public boolean default false,
  usage_count integer default 0,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.workflows enable row level security;
alter table public.workflow_nodes enable row level security;
alter table public.workflow_executions enable row level security;
alter table public.execution_steps enable row level security;
alter table public.templates enable row level security;

-- RLS Policies
create policy "Org members can manage workflows"
  on public.workflows for all
  using (
    org_id in (select org_id from public.profiles where id = auth.uid())
  );

create policy "Workflow access for nodes"
  on public.workflow_nodes for all
  using (
    workflow_id in (
      select id from public.workflows
      where org_id in (select org_id from public.profiles where id = auth.uid())
    )
  );

create policy "Workflow access for executions"
  on public.workflow_executions for all
  using (
    workflow_id in (
      select id from public.workflows
      where org_id in (select org_id from public.profiles where id = auth.uid())
    )
  );

create policy "Execution access for steps"
  on public.execution_steps for all
  using (
    execution_id in (
      select we.id from public.workflow_executions we
      join public.workflows w on w.id = we.workflow_id
      where w.org_id in (select org_id from public.profiles where id = auth.uid())
    )
  );

-- Public templates are readable by all authenticated users; org templates by org members
create policy "Read public or org templates"
  on public.templates for select
  using (
    is_public = true
    or org_id in (select org_id from public.profiles where id = auth.uid())
  );

create policy "Org members can manage own templates"
  on public.templates for all
  using (
    org_id in (select org_id from public.profiles where id = auth.uid())
  );
