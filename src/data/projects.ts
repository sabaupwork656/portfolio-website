import { loomLinks, profile } from './profile';

export type Project = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  outcome: string;
  problem: string;
  solution: string;
  architecture: string[];
  improvements: string[];
  links: {
    github: string;
    loom: string;
    demo: string;
  };
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  sourceNote: string;
};

export const projects: Project[] = [
  {
    title: 'LeadFlow CRM',
    slug: 'leadflow-crm',
    category: 'SaaS CRM / Lead Management',
    summary:
      'A realistic CRM SaaS MVP for local service businesses to manage leads, pipeline stages, follow-ups, teams, analytics, and CSV operations.',
    description:
      'LeadFlow CRM was detected from the workspace as a full-stack Rails API and React application. It is positioned as a portfolio-grade SaaS MVP for local service teams that need a shared pipeline instead of scattered spreadsheets and inboxes.',
    stack: ['Ruby on Rails API', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'JWT', 'Recharts'],
    features: [
      'Multi-tenant workspace architecture',
      'Lead CRUD and lead detail views',
      'Kanban-style pipeline board',
      'Dashboard metrics and charts',
      'Team roles for owner, manager, and staff',
      'CSV lead import and export',
      'Activity timeline and follow-up workflow',
      'Protected app routes and SaaS pricing flow',
    ],
    outcome:
      'Shows how a service-business CRM can move from idea to a usable SaaS workflow with role-aware access, analytics, and deployment-ready configuration.',
    problem:
      'Local service businesses often lose revenue when leads, notes, and follow-ups live across phone calls, spreadsheets, and inboxes.',
    solution:
      'A workspace-scoped CRM that centralizes lead intake, ownership, pipeline movement, team activity, and executive-level dashboard reporting.',
    architecture: [
      'Rails API with workspace-scoped records, JWT authentication, validations, CORS, and role-aware access.',
      'React and TypeScript frontend with protected routing, reusable UI components, charts, forms, and responsive dashboard layouts.',
      'Environment-driven deployment setup for a separate frontend and backend, including Vercel and Render/Railway-style configuration.',
    ],
    improvements: [
      'Add Stripe subscriptions and plan enforcement.',
      'Add email invitations and password reset flows.',
      'Add drag-and-drop pipeline updates and richer saved reporting views.',
    ],
    links: {
      github: profile.github,
      loom: loomLinks.leadflow,
      demo: '#',
    },
    screenshots: [
      {
        src: '/projects/leadflow-crm/leadflow-login.png',
        alt: 'LeadFlow CRM login screen',
        caption: 'Login and protected CRM access',
      },
      {
        src: '/projects/leadflow-crm/leadflow-dashboard.png',
        alt: 'LeadFlow CRM dashboard screen',
        caption: 'Executive dashboard with lead and revenue metrics',
      },
      {
        src: '/projects/leadflow-crm/leadflow-leads.png',
        alt: 'LeadFlow CRM leads table screen',
        caption: 'Lead management table with statuses and follow-ups',
      },
      {
        src: '/projects/leadflow-crm/leadflow-pipeline.png',
        alt: 'LeadFlow CRM pipeline board screen',
        caption: 'Pipeline board for moving leads through stages',
      },
      {
        src: '/projects/leadflow-crm/leadflow-team.png',
        alt: 'LeadFlow CRM team management screen',
        caption: 'Team workspace and role management',
      },
    ],
    sourceNote: 'Detected from ../LeadFLow_Crm/leadflow-crm README and frontend/backend structure.',
  },
  {
    title: 'EduFlow LMS',
    slug: 'eduflow-lms',
    category: 'EdTech / Learning Management System',
    summary:
      'A Rails 7 learning management platform with role-based dashboards for admins, instructors, and students.',
    description:
      'EduFlow was detected from the workspace as a Rails 7 EdTech LMS. It demonstrates course management, lesson authoring, enrollments, and progress tracking with a modern SaaS-style interface.',
    stack: ['Ruby on Rails 7.1', 'PostgreSQL', 'Devise', 'Tailwind CSS', 'Turbo', 'Stimulus', 'Action Text', 'Active Storage'],
    features: [
      'Admin, instructor, and student roles',
      'Role-specific dashboards',
      'Course and lesson CRUD',
      'Rich lesson content with Action Text',
      'Active Storage thumbnails',
      'Student enrollments',
      'Lesson completion and course progress',
      'Responsive tables, cards, and sidebar navigation',
    ],
    outcome:
      'Demonstrates how a Rails product can support multiple user types, structured learning workflows, and progress visibility from the first MVP.',
    problem:
      'Education teams need separate workflows for admins, instructors, and students without turning the product into a confusing permission maze.',
    solution:
      'A role-aware LMS with tailored dashboards, content management, enrollment flows, and progress tracking built around clear Rails models.',
    architecture: [
      'Rails 7.1 app with Devise authentication, role guards, PostgreSQL, Action Text, and Active Storage.',
      'Server-rendered SaaS UI using Tailwind CSS, Turbo, Stimulus, responsive layouts, cards, tables, and navigation patterns.',
      'Seeded demo accounts for admin, instructor, and student workflows.',
    ],
    improvements: [
      'Add paid course checkout and certificate generation.',
      'Add instructor analytics with deeper cohort reporting.',
      'Add automated tests around course enrollment and progress rules.',
    ],
    links: {
      github: profile.github,
      loom: loomLinks.eduflow,
      demo: '#',
    },
    sourceNote: 'Detected from ../EduFlow README, controllers, models, and views.',
  },
  {
    title: 'SaaS Flow',
    slug: 'saas-flow',
    category: 'Multi-Tenant SaaS / Project Management',
    summary:
      'A SaaS-style project and workflow demo focused on dashboard-based navigation, team work, and scalable Rails foundations.',
    description:
      'SaaS Flow was detected in the workspace with a sparse README and Rails/Tailwind structure. The portfolio copy keeps this positioned as a demo implementation rather than claiming live production usage.',
    stack: ['Ruby on Rails', 'Tailwind CSS', 'PostgreSQL-ready architecture', 'Server-rendered UI'],
    features: [
      'Project-oriented workflow structure',
      'Task and team workflow positioning',
      'Dashboard UI direction',
      'SaaS-ready Rails organization',
      'Responsive Tailwind styling foundation',
    ],
    outcome:
      'Works as a compact internal demo for project-management SaaS architecture and dashboard planning.',
    problem:
      'Founders often need to validate project, task, and team workflows before committing to a larger SaaS roadmap.',
    solution:
      'A Rails-based demo foundation that can be expanded into projects, tasks, user roles, and reporting screens.',
    architecture: [
      'Rails app structure with Tailwind CSS dependencies detected in the workspace.',
      'Designed to be extended into a multi-user project management product with dashboard-first workflows.',
      'Best treated as an MVP prototype foundation until deeper product features are added.',
    ],
    improvements: [
      'Add full project and task CRUD.',
      'Add workspace membership, roles, and activity history.',
      'Add dashboard analytics and deployment documentation.',
    ],
    links: {
      github: profile.github,
      loom: loomLinks.placeholder,
      demo: '#',
    },
    sourceNote: 'Detected from ../Saas_Flow README and Rails/Tailwind folder structure.',
  },
  {
    title: 'AI Voice Agent Demo',
    slug: 'ai-voice-agent-demo',
    category: 'AI Automation / Rails MVP',
    summary:
      'A Rails MVP for AI receptionist call flows with Twilio webhooks, speech capture, LLM responses, lead capture, appointment intent, and logs.',
    description:
      'The AI Voice Agent project was detected from the workspace README. It is a focused Rails MVP showing how communication, AI, and business workflow automation can fit into a practical web application.',
    stack: ['Ruby on Rails 7.1', 'SQLite', 'Twilio Voice', 'OpenAI Chat Completions API', 'TwiML'],
    features: [
      'Inbound and outbound call endpoints',
      'Speech gather and AI response loop',
      'Basic lead capture',
      'Appointment booking intent handling',
      'Call transcript and event logs',
      'Frontend-only local demo flow',
    ],
    outcome:
      'Shows how a Rails MVP can integrate voice, AI, and workflow logging for a practical automation demo.',
    problem:
      'Small service businesses miss calls and need a lightweight way to capture lead details and booking intent.',
    solution:
      'A Rails webhook flow that receives Twilio calls, gathers speech, asks an LLM for a reply, and logs each turn with useful business events.',
    architecture: [
      'Rails controllers expose Twilio-compatible endpoints for inbound calls, AI turns, status callbacks, and outbound calls.',
      'OpenAI integration powers the conversation loop, with fallback behavior when an API key is unavailable.',
      'Transcripts and event logs preserve call history for debugging and follow-up.',
    ],
    improvements: [
      'Add authentication and production-ready admin controls.',
      'Move call processing into background jobs with retries.',
      'Add observability, data retention controls, and live deployment documentation.',
    ],
    links: {
      github: profile.github,
      loom: loomLinks.placeholder,
      demo: '#',
    },
    sourceNote: 'Detected from ../Ai_voice_agent README.',
  },
];

export const featuredProjects = projects.slice(0, 3);
