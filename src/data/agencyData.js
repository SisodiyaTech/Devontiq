export const BRAND = {
  name: "Devontiq",
  tagline: "Building What's Next.",
  subline: "Digital Engineering & Technology Partner",
  positioning: "We partner with visionary founders and enterprises to engineer high-performance digital products, scalable web applications, and intelligent cloud systems.",
  status: "Available for Q1/Q2 Product Engagements",
  email: "hello@devontiq.com",
  phone: "+1 (800) 492-3810",
  location: "Global Remote / Hubs in New York & Warsaw",
  copyright: `© ${new Date().getFullYear()} Devontiq Technologies Inc. All rights reserved.`,
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "X / Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "Dribbble" }
  ]
};

export const STATS = [
  { value: "99.4%", label: "Sprint Completion Rate", helper: "Predictable milestones, zero scope surprises" },
  { value: "<100ms", label: "P95 Performance Focus", helper: "Edge-cached & ultra-responsive architectures" },
  { value: "100%", label: "Client Code Ownership", helper: "Full IP handover & documented engineering" },
  { value: "0", label: "Vendor Lock-in", helper: "Open standard frameworks & clean codebases" }
];

export const TARGET_AUDIENCES = [
  {
    title: "Startups & Venture Founders",
    description: "Launch production-ready MVPs with rapid velocity, battle-tested architecture, and investor-ready technical foundations.",
    deliverables: ["Rapid MVP prototyping", "Scalable cloud foundations", "Fractional CTO advisory"]
  },
  {
    title: "Growing SMBs & Mid-Market",
    description: "Modernize legacy systems, automate complex manual workflows, and build proprietary digital tools that unlock operational margin.",
    deliverables: ["Custom business platforms", "ERP/CRM integrations", "Process automation"]
  },
  {
    title: "Enterprise Innovators",
    description: "Augment in-house engineering squads or spin up greenfield high-compliance digital ventures with zero tech debt.",
    deliverables: ["High-throughput microservices", "SOC2-compliant architectures", "Design system unification"]
  }
];

export const SERVICES = [
  {
    id: "custom-software",
    num: "01",
    title: "Custom Software Engineering",
    category: "Architecture & Core Systems",
    shortDesc: "End-to-end bespoke software built from the ground up for resilience, concurrency, and effortless horizontal scaling.",
    fullDesc: "We design and develop purpose-built backend and distributed systems tailored to your unique operational workflow. By eschewing off-the-shelf compromises, our engineers build robust data pipelines, scalable API layers, and event-driven architectures that give your enterprise lasting competitive advantage.",
    highlights: [
      "Distributed microservices & robust API design (REST/GraphQL/gRPC)",
      "Database schema architecture & caching layers (PostgreSQL, Redis)",
      "High-concurrency background job processing & asynchronous queues",
      "Enterprise security, authentication, and role-based access controls"
    ],
    tech: ["Go", "Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
    deliverableTime: "4 - 12 Weeks per Phase"
  },
  {
    id: "web-apps-saas",
    num: "02",
    title: "Web Applications & SaaS Platforms",
    category: "Cloud Products",
    shortDesc: "High-velocity web apps and multi-tenant SaaS products designed for high conversion, retention, and rapid user adoption.",
    fullDesc: "From multi-tenant software architectures to interactive real-time client dashboards, we turn complex product logic into effortless, blazing-fast browser experiences. We handle everything from subscription billing mechanics to multi-tenant data isolation and edge deployment.",
    highlights: [
      "Multi-tenant SaaS architectures with automated tenant isolation",
      "Real-time dashboards, WebSockets, and collaborative interfaces",
      "Stripe / LemonSqueezy billing, meter tracking, and customer portals",
      "Comprehensive analytics, telemetry, and automated audit trails"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    deliverableTime: "6 - 16 Weeks"
  },
  {
    id: "digital-product-design",
    num: "03",
    title: "UI/UX & Digital Product Design",
    category: "Experience Engineering",
    shortDesc: "Pixel-perfect, human-centric interfaces backed by cognitive user research, design systems, and interaction physics.",
    fullDesc: "Design at Devontiq is not mere decoration; it is functional problem-solving. We translate intricate business logic into frictionless user flows that maximize retention and reduce cognitive load. Every screen is documented with an atomic design system ready for engineering handoff.",
    highlights: [
      "User journey mapping, wireframing, and interactive clickable prototypes",
      "Scalable multi-brand Design Systems and tokenized Figma libraries",
      "Accessibility compliance (WCAG 2.1 AA) and micro-interaction design",
      "Usability testing, heuristic audits, and conversion rate optimization"
    ],
    tech: ["Figma", "Design Systems", "Prototyping", "Design Tokens", "WCAG"],
    deliverableTime: "3 - 8 Weeks"
  },
  {
    id: "modern-websites",
    num: "04",
    title: "Modern Website Engineering",
    category: "Brand & Conversion",
    shortDesc: "High-performance brand flagship websites with editorial typography, sub-second load times, and structured headless CMS.",
    fullDesc: "Your digital storefront should reflect the premium quality of your offering. We engineer editorial, motion-infused marketing websites that score 95+ on Google Lighthouse, rank on search engines, and convert visitors into qualified sales pipeline.",
    highlights: [
      "Sub-second First Contentful Paint and 100% Core Web Vitals targets",
      "Headless CMS integration (Sanity, Strapi, Contentful) for frictionless editing",
      "Technical SEO hierarchy, OpenGraph schemas, and dynamic sitemaps",
      "Subtle hardware-accelerated animations that delight without lagging"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Vite", "Sanity CMS", "Vercel"],
    deliverableTime: "3 - 6 Weeks"
  },
  {
    id: "mobile-apps",
    num: "05",
    title: "Mobile Application Development",
    category: "Cross-Platform Mobility",
    shortDesc: "Fluid iOS and Android applications with native device integrations, offline-first reliability, and App Store readiness.",
    fullDesc: "Whether launching a customer companion app or an enterprise field-service tool, we craft high-framerate mobile experiences. With shared cross-platform logic and native UI fidelity, your product reaches both app stores without doubling maintenance budgets.",
    highlights: [
      "Cross-platform React Native and Flutter engineering with 60fps fluidity",
      "Biometric security, push notification pipelines, and deep linking",
      "Offline-first synchronization with conflict resolution protocols",
      "Complete App Store and Google Play publishing and review management"
    ],
    tech: ["React Native", "Expo", "iOS / Swift", "Android / Kotlin", "Firebase"],
    deliverableTime: "8 - 18 Weeks"
  },
  {
    id: "ai-solutions",
    num: "06",
    title: "AI-Powered Solutions & Automation",
    category: "Applied Intelligence",
    shortDesc: "Pragmatic AI integrations, proprietary retrieval-augmented generation (RAG) agents, and automated workflow orchestrations.",
    fullDesc: "We cut through the AI hype to deliver tangible enterprise utility. From deploying custom retrieval-augmented agents grounded in your private enterprise documentation to automating repetitive multi-step customer operations, we engineer reliable intelligence into your software.",
    highlights: [
      "Custom RAG architectures with hybrid vector search (Pinecone / pgvector)",
      "Autonomous workflow agents and intelligent document processing",
      "LLM latency optimization, caching, prompt versioning, and guardrails",
      "Local model hosting and self-hosted private inference pipelines"
    ],
    tech: ["OpenAI API", "Anthropic Claude", "LangChain", "pgvector", "Python", "FastAPI"],
    deliverableTime: "4 - 10 Weeks"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprinting",
    duration: "Week 1 - 2",
    description: "We deconstruct your business model, technical constraints, target users, and competitive landscape into an actionable engineering blueprint.",
    outcomes: ["Technical Architecture Document (TAD)", "Entity-relationship diagrams & API specs", "Fixed milestone roadmap and team allocation"]
  },
  {
    step: "02",
    title: "UI/UX & Prototype Testing",
    duration: "Week 2 - 4",
    description: "We craft interactive wireframes and high-fidelity prototypes, stress-testing usability and edge cases before a single line of backend code is committed.",
    outcomes: ["Complete Figma design system", "Clickable user journey walkthroughs", "Design approval & token synchronization"]
  },
  {
    step: "03",
    title: "Sprint-Driven Engineering",
    duration: "Week 4 - 12",
    description: "Our dedicated engineers write type-safe, cleanly architected code across bi-weekly sprints, featuring automated CI/CD and staging deployments.",
    outcomes: ["Bi-weekly live staging releases", "Direct Slack / Discord engineering communication", "Clean Git commits & automated test suites"]
  },
  {
    step: "04",
    title: "QA, Security & Performance Hardening",
    duration: "Week 12 - 14",
    description: "We subject the codebase to load testing, cross-browser audits, penetration vulnerability scans, and Core Web Vital optimizations.",
    outcomes: ["Sub-100ms API response benchmark", "Accessibility (WCAG) audit report", "Zero known high-severity vulnerabilities"]
  },
  {
    step: "05",
    title: "Production Launch & Scale Support",
    duration: "Post-Launch",
    description: "We execute zero-downtime DNS cutovers, monitor live telemetry, and provide hypercare SLA support to guarantee stability at scale.",
    outcomes: ["Full code repository & credential handover", "Real-time error logging with Sentry/Datadog", "Optional ongoing retainers & continuous optimization"]
  }
];

export const PROJECTS = [
  {
    id: "novafin",
    title: "NovaFin Terminal",
    category: "FinTech & Web App",
    year: "2026",
    tagline: "Ultra-low-latency institutional trading interface and portfolio analytics engine.",
    thumbnailBg: "bg-[#1E1E1E]",
    accentColor: "#3a00ff",
    client: "Nova Financial Group (Concept Build)",
    challenge: "Traditional trading dashboards suffered from heavy UI re-renders and 800ms+ websocket latencies during peak market volatility.",
    solution: "Architected a zero-overhead WebGL-driven candlestick chart engine with Web Workers managing incoming binary tick streams.",
    metrics: [
      { label: "Render Latency", value: "<16ms (60 FPS)" },
      { label: "Websocket Throughput", value: "50k msgs/sec" },
      { label: "Client Crash Rate", value: "0.001%" }
    ],
    tags: ["React 19", "Web Workers", "WebSockets", "Tailwind CSS", "Go Engine"]
  },
  {
    id: "aurora-health",
    title: "Aurora Telehealth",
    category: "HealthTech & Mobility",
    year: "2025",
    tagline: "HIPAA-compliant patient consultation portal and automated prescription dispatch.",
    thumbnailBg: "bg-[#1E1E1E]",
    accentColor: "#c5ff00",
    client: "Aurora Medical Systems",
    challenge: "Fragmented patient scheduling and disjointed video consultations resulted in 24% appointment drop-off rates.",
    solution: "Built an integrated, end-to-end encrypted WebRTC video consultation suite with automated SMS reminders and pharmacy API sync.",
    metrics: [
      { label: "Appointment Adherence", value: "+38%" },
      { label: "Time-to-Consult", value: "3.2 minutes" },
      { label: "Security", value: "100% HIPAA Audit" }
    ],
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Node.js", "Docker"]
  },
  {
    id: "kinetix-ai",
    title: "Kinetix Enterprise Copilot",
    category: "AI & Automation",
    year: "2026",
    tagline: "Autonomous multi-agent document comprehension system for legal and compliance teams.",
    thumbnailBg: "bg-[#1E1E1E]",
    accentColor: "#3a00ff",
    client: "Kinetix Compliance Partners",
    challenge: "Compliance analysts spent 6+ hours manually cross-referencing multi-hundred-page regulatory filings against internal standards.",
    solution: "Engineered a hybrid RAG pipeline with chunk-level attribution, strict hallucination guardrails, and deterministic export formats.",
    metrics: [
      { label: "Review Speedup", value: "6.8x Faster" },
      { label: "Attribution Accuracy", value: "99.1%" },
      { label: "Time Saved / Analyst", value: "18 hrs/week" }
    ],
    tags: ["Python", "FastAPI", "Pinecone", "Claude 3.5 API", "React"]
  },
  {
    id: "veloce-commerce",
    title: "Veloce Headless Commerce",
    category: "Modern E-Commerce",
    year: "2025",
    tagline: "Sub-second global luxury storefront with edge computing and dynamic inventory syncing.",
    thumbnailBg: "bg-[#1E1E1E]",
    accentColor: "#c5ff00",
    client: "Veloce Design Lab",
    challenge: "Monolithic storefront had 4.8s mobile load times, resulting in cart abandonment and declining international organic traffic.",
    solution: "Rebuilt as a headless architecture deployed to Cloudflare Workers with stale-while-revalidate caching and instant checkouts.",
    metrics: [
      { label: "Mobile PageSpeed", value: "99/100" },
      { label: "Conversion Lift", value: "+27.4%" },
      { label: "First Contentful Paint", value: "0.4s" }
    ],
    tags: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Edge CDN"]
  },
  {
    id: "strata-cloud",
    title: "Strata Control Plane",
    category: "Cloud SaaS",
    year: "2025",
    tagline: "Multi-cluster Kubernetes observability console with automated incident triage.",
    thumbnailBg: "bg-[#1E1E1E]",
    accentColor: "#3a00ff",
    client: "Strata Systems",
    challenge: "DevOps teams lacked a unified single pane of glass to diagnose multi-region microservice outages across AWS and GCP.",
    solution: "Created an interactive topological service graph with real-time distributed tracing and instant root-cause analysis.",
    metrics: [
      { label: "MTTR Reduction", value: "-45% Downtime" },
      { label: "Active Clusters", value: "1,200+" },
      { label: "Daily Queries", value: "14 Million" }
    ],
    tags: ["React", "TypeScript", "D3.js Visuals", "Golang", "gRPC"]
  },
  {
    id: "pulse-logistics",
    title: "Pulse Telematics Platform",
    category: "IoT & Logistics",
    year: "2026",
    tagline: "Real-time fleet route optimization and predictive maintenance telemetry.",
    thumbnailBg: "bg-[#1E1E1E]",
    accentColor: "#c5ff00",
    client: "Pulse Global Freight",
    challenge: "Unplanned fleet breakdowns caused substantial contract penalties and inefficient fuel consumption patterns.",
    solution: "Integrated CAN-bus IoT hardware streaming to an anomaly-detection ML engine with proactive maintenance dispatch.",
    metrics: [
      { label: "Fuel Efficiency", value: "+14.2%" },
      { label: "Breakdowns Avoided", value: "320+ Cases" },
      { label: "ROI Payback", value: "3.5 Months" }
    ],
    tags: ["React Native", "TimescaleDB", "MQTT", "Python", "Google Maps Platform"]
  }
];

export const INDUSTRIES = [
  {
    icon: "Landmark",
    name: "FinTech & Banking",
    description: "Trading platforms, payment gateways, wealth management portals, and automated regulatory reporting suites."
  },
  {
    icon: "HeartPulse",
    name: "HealthTech & MedTech",
    description: "HIPAA-compliant telemedicine platforms, diagnostic telemetry dashboards, and electronic health record integrations."
  },
  {
    icon: "Layers",
    name: "B2B SaaS & Enterprise",
    description: "Subscription software platforms, developer tooling, workflow engines, and collaborative multi-tenant cloud software."
  },
  {
    icon: "ShoppingBag",
    name: "Modern E-Commerce",
    description: "Headless omnichannel storefronts, bespoke product configurators, high-concurrency drop infrastructure."
  },
  {
    icon: "Bot",
    name: "AI & Applied Intelligence",
    description: "Domain-specific AI copilots, retrieval pipelines, semantic knowledge graphs, and predictive analytics tools."
  },
  {
    icon: "Truck",
    name: "Logistics & Supply Chain",
    description: "Real-time dispatch tracking, warehouse automation interfaces, and dynamic routing engines."
  }
];

export const COMPARISONS = [
  {
    aspect: "Engineering Leadership",
    traditional: "Junior staff or outsourced sub-contractors with frequent turnover",
    devontiq: "Direct collaboration with senior engineers & system architects from day one"
  },
  {
    aspect: "Code Quality & Standards",
    traditional: "Brittle templates, hasty copy-pastes, and undocumented technical debt",
    devontiq: "Type-safe, fully tested, modular architectures following strict clean-code principles"
  },
  {
    aspect: "IP & Code Ownership",
    traditional: "Proprietary agency platforms, hidden lock-ins, or hostage maintenance contracts",
    devontiq: "100% full IP transfer with comprehensive repository handoff and setup guides"
  },
  {
    aspect: "Delivery Velocity",
    traditional: "Bureaucratic scope creep, prolonged meetings, and missed quarterly deadlines",
    devontiq: "Two-week agile sprint cadences with demonstrable staging deployments every 14 days"
  },
  {
    aspect: "Performance & Security",
    traditional: "Treated as an afterthought after UI sign-off, resulting in sluggish apps",
    devontiq: "Baked into CI/CD: sub-100ms response targets, strict security audits, and WCAG AA"
  }
];

export const TESTIMONIALS = [
  {
    id: "01",
    quote: "Devontiq completely altered our trajectory. They didn't just write code; they challenged our assumptions, optimized our database bottlenecks, and delivered our enterprise SaaS platform two weeks ahead of schedule. Truly elite engineering.",
    author: "Elena Rostova",
    role: "VP of Product Engineering",
    company: "Apex Cloud Technologies",
    project: "Multi-tenant Cloud Orchestration Suite",
    rating: 5
  },
  {
    id: "02",
    quote: "In my 15 years in tech, I have rarely seen an agency with this level of aesthetic taste combined with hardcore engineering rigor. Our app load time dropped from 4 seconds to under 400 milliseconds, and our mobile conversion jumped 27%.",
    author: "Marcus Vance",
    role: "Co-Founder & Chief Technology Officer",
    company: "Kinetix Systems",
    project: "AI-Powered Compliance Copilot",
    rating: 5
  },
  {
    id: "03",
    quote: "Finding a development partner that treats your product with the same obsessive care as your own founding team is nearly impossible. Devontiq became that partner. Transparent, proactive, and remarkably skilled across modern stacks.",
    author: "Sarah Lindqvist",
    role: "Head of Digital Innovation",
    company: "Nordic Commerce Lab",
    project: "Headless Omnichannel Platform",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "How does Devontiq structure project pricing and engagements?",
    a: "We offer two transparent engagement models depending on your stage: 1) Fixed-Scope Milestone Delivery (ideal for well-defined MVPs and website builds with guaranteed deliverables and set budgets), and 2) Dedicated Product Sprint Squads (monthly sprint capacity with dedicated senior engineers for evolving SaaS platforms and complex products). We never hit you with hidden surprise fees."
  },
  {
    q: "Who owns the code and intellectual property produced?",
    a: "You do, 100%. From the very first commit, all source code, design system tokens, database schemas, CI/CD scripts, and documentation belong exclusively to your business. We do not lock you into proprietary runtimes or restrictive agency licenses."
  },
  {
    q: "What is your typical project timeline from kickoff to launch?",
    a: "While timelines depend on project scope, our rapid MVP engagements typically deliver in 6 to 10 weeks. Flagship web engineering projects take 4 to 6 weeks, while large-scale custom enterprise platforms span 12 to 18 weeks broken into 2-week staging sprints."
  },
  {
    q: "How will our team communicate with the Devontiq team during development?",
    a: "We believe in radical transparency. You are embedded directly into a shared Slack or Discord channel with our senior developers and tech lead. You participate in bi-weekly sprint reviews, inspect live staging URLs, and have direct access to your project's GitHub repository."
  },
  {
    q: "Do you offer post-launch maintenance, SLAs, and continuous optimization?",
    a: "Yes. Every project includes a 30-day warranty and hypercare period post-launch. Afterwards, we offer tailored ongoing retainers for continuous feature iterations, DevOps monitoring, security patching, and infrastructure scaling."
  },
  {
    q: "Can you modernize or rebuild an existing codebase with high technical debt?",
    a: "Yes. We frequently conduct comprehensive Technical Audits to diagnose performance bottlenecks, security flaws, and architectural rot. We can either execute a phased modular refactoring (strangler pattern) or engineer a clean ground-up rebuild with zero downtime data migration."
  }
];
