import {
  Activity,
  Code2,
  Database,
  Gauge,
  PlugZap,
  Wrench,
} from 'lucide-react';

export const services = [
  {
    title: 'SaaS MVP Development',
    icon: Gauge,
    problem: 'You need a working product fast without boxing yourself into a fragile prototype.',
    deliverables: 'Product scope, Rails data model, auth, dashboards, core workflows, and deployment-ready code.',
    description:
      'I turn early product ideas into clean SaaS MVPs with practical features, clear user flows, and foundations that can keep growing after launch.',
  },
  {
    title: 'CRM & Dashboard Development',
    icon: Activity,
    problem: 'Your team is stuck in spreadsheets, inboxes, or disconnected tools.',
    deliverables: 'Lead pipelines, admin dashboards, reporting views, roles, imports, exports, and workflow automation.',
    description:
      'I build focused CRMs, internal tools, and admin panels that help teams track work, make decisions, and move faster.',
  },
  {
    title: 'Ruby on Rails Backend Development',
    icon: Database,
    problem: 'Your product needs dependable business logic, data modeling, and secure APIs.',
    deliverables: 'Rails apps, API endpoints, PostgreSQL schemas, authentication, permissions, background jobs, and tests.',
    description:
      'I design Rails backends around maintainability, predictable data boundaries, and the operational details real products need.',
  },
  {
    title: 'React / Angular Frontend Development',
    icon: Code2,
    problem: 'Your app needs a polished interface that feels simple even when the workflow is complex.',
    deliverables: 'Responsive React or Angular UI, reusable components, forms, tables, charts, and protected app views.',
    description:
      'I create SaaS-style interfaces that are clean, fast, and easy for clients, admins, and internal teams to use every day.',
  },
  {
    title: 'API Integrations',
    icon: PlugZap,
    problem: 'Your product needs payments, email, AI, communication, or third-party data connected reliably.',
    deliverables: 'Stripe, SendGrid, Firebase, Twilio, OpenAI, REST APIs, webhooks, retry flows, and integration docs.',
    description:
      'I connect products to the services they need while keeping error states, security, and maintainability in view.',
  },
  {
    title: 'Existing App Improvements & Bug Fixes',
    icon: Wrench,
    problem: 'Your Rails or React app has bugs, slow areas, messy flows, or unfinished features.',
    deliverables: 'Issue triage, bug fixes, refactors, UI improvements, performance cleanup, and feature completion.',
    description:
      'I can step into existing codebases, understand the moving parts, and make focused improvements without creating churn.',
  },
];
