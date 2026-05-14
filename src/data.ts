export const personal = {
  name: 'Celso Leao',
  title: 'Senior Software Engineer',
  subtitle: 'Full Stack · AI Integration Specialist',
  location: 'Plantation, FL, USA',
  email: 'celsoleao@gmail.com',
  linkedin: 'www.linkedin.com/in/celso-leao-3a072329/',
  github: 'github.com/celsoleao',
  summary:
    'Senior Software Engineer with 20+ years of experience delivering enterprise-grade solutions across HR, insurance, finance, education, and telecom. Deep expertise in C# / .NET, SQL Server, and full-stack development with Angular, React, and TypeScript. Pioneering AI-assisted engineering practices — building autonomous agents and MCP integrations that connect AI models to real-world tools.',
  stats: [
    { value: '20+', label: 'Years Experience' },
    { value: '10+', label: 'SQL Server Years' },
    { value: '4', label: 'MCP Integrations' },
    { value: '5+', label: 'Industries Served' },
  ],
}

export const skills = [
  {
    category: 'Backend & APIs',
    color: 'violet',
    items: ['C# / .NET 6–8', 'ASP.NET Core', 'REST APIs', 'WCF', 'Entity Framework', 'GraphQL'],
  },
  {
    category: 'Frontend',
    color: 'cyan',
    items: ['React', 'Angular', 'TypeScript', 'Vue.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    category: 'AI & Automation',
    color: 'purple',
    items: ['Claude (Anthropic)', 'GitHub Copilot', 'Windsurf', 'AI Agents', 'MCP Protocol', 'Prompt Engineering'],
  },
  {
    category: 'Databases',
    color: 'blue',
    items: ['SQL Server (10+ yrs)', 'T-SQL', 'Oracle', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'sky',
    items: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform'],
  },
  {
    category: 'Observability',
    color: 'orange',
    items: ['Datadog', 'Kibana', 'Grafana', 'xUnit', 'Integration Testing', 'EchoTest'],
  },
  {
    category: 'Architecture',
    color: 'emerald',
    items: ['Microservices', 'Design Patterns', 'DDD', 'SOLID', 'TDD', 'Agile / Scrum'],
  },
  {
    category: 'Tools',
    color: 'rose',
    items: ['Git / GitHub', 'Jira', 'Confluence', 'Azure DevOps', 'Visual Studio', 'VS Code'],
  },
]

export const experience = [
  {
    company: 'UKG (Ultimate Kronos Group)',
    role: 'Senior Software Engineer',
    location: 'Pembroke Pines, FL, USA',
    period: 'March 2022 – Present',
    current: true,
    description:
      'Develop and maintain enterprise HR software used by Microsoft, Google, and Tesla — serving millions of users globally.',
    bullets: [
      'Engineer features using C# / .NET 6–8, SQL Server, and Docker microservices in a high-availability environment.',
      'Key contributor in migration from legacy .NET monolith to React, TypeScript, and GraphQL.',
      'Build and configure MCP integrations connecting AI agents to GitHub, Jira, Confluence, and Grafana.',
      'Create intelligent automation agents for code review, testing, deployment pipelines, and incident response.',
      'Implement observability with Datadog and Kibana for real-time system health monitoring.',
    ],
    tech: ['C# .NET 6–8', 'React', 'TypeScript', 'GraphQL', 'Docker', 'SQL Server', 'MCP', 'Datadog'],
  },
  {
    company: 'Genius SIS',
    role: 'Senior Software Engineer',
    location: 'Plantation, FL, USA',
    period: 'Jan 2015 – Mar 2022',
    current: false,
    description: 'Led full-stack development for a Student Information System serving educational institutions.',
    bullets: [
      'Designed and consumed RESTful and SAML APIs, integrating LMS platforms and payment gateways.',
      'Built responsive front-end experiences with Bootstrap, jQuery, and BEM/Utility-First CSS.',
      'Architected and deployed solutions on AWS, managing cloud infrastructure for high availability.',
    ],
    tech: ['C# .NET', 'MS SQL Server', 'AWS', 'REST APIs', 'SAML', 'Bootstrap'],
  },
  {
    company: 'Zurich Insurance',
    role: 'Senior Software Engineer',
    location: 'São Paulo, BR',
    period: 'Jan 2014 – Jan 2015',
    current: false,
    description: 'Developed insurance management systems with high-throughput data pipelines.',
    bullets: [
      'Built insurance management systems using C# .NET, Oracle, WCF, and WebMethods.',
      'Maintained high-throughput data pipelines for insurance claims processing.',
    ],
    tech: ['C# .NET', 'Oracle', 'WCF', 'WebMethods'],
  },
  {
    company: 'SolutionsOne',
    role: 'Senior Software Engineer',
    location: 'São Paulo, BR',
    period: 'Jun 2011 – Dec 2013',
    current: false,
    description: 'Led integration of payment processing systems, achieving PCI DSS certification.',
    bullets: [
      'Led payment processing integration with major credit card companies, achieved PCI DSS compliance.',
      'Built C# ASP.NET MVC applications and created internal NuGet packages.',
      'Developed Android mobile app (MeuSeguroEmDia) using Java/Eclipse.',
    ],
    tech: ['C# ASP.NET MVC', 'Entity Framework', 'NuGet', 'Android/Java', 'PCI DSS'],
  },
  {
    company: 'Serasa Experian',
    role: 'ASP.NET Developer',
    location: 'São Paulo, BR',
    period: 'Oct 2010 – Jun 2011',
    current: false,
    description: 'Migrated credit management systems and maintained internet-facing platforms.',
    bullets: [
      'Migrated credit management system from .NET Framework 1.1 to 3.5.',
      'Enhanced internet-facing systems and internal reporting platform.',
    ],
    tech: ['C# .NET', 'VB.NET', 'ASP.NET'],
  },
]

export const aiMCP = [
  {
    tool: 'GitHub MCP',
    emoji: '🐙',
    gradient: 'from-slate-700 to-slate-900',
    accent: '#6e7681',
    glow: 'rgba(110, 118, 129, 0.3)',
    description: 'Automated PR creation, code review comments, and branch management via AI agents.',
    actions: ['PR automation', 'Code review', 'Branch management', 'Issue tracking'],
  },
  {
    tool: 'Jira MCP',
    emoji: '📋',
    gradient: 'from-blue-700 to-blue-950',
    accent: '#0052cc',
    glow: 'rgba(0, 82, 204, 0.35)',
    description: 'AI-driven ticket creation, sprint management, and status updates from natural language.',
    actions: ['Ticket creation', 'Sprint mgmt', 'Status updates', 'NLP commands'],
  },
  {
    tool: 'Confluence MCP',
    emoji: '📝',
    gradient: 'from-teal-700 to-teal-950',
    accent: '#0ba7a7',
    glow: 'rgba(11, 167, 167, 0.35)',
    description: 'Automated documentation generation and knowledge base updates via AI agents.',
    actions: ['Doc generation', 'Knowledge base', 'Auto-updates', 'Wiki management'],
  },
  {
    tool: 'Grafana MCP',
    emoji: '📊',
    gradient: 'from-orange-700 to-orange-950',
    accent: '#f46800',
    glow: 'rgba(244, 104, 0, 0.35)',
    description: 'AI-triggered alert analysis, dashboard queries, and incident summarization.',
    actions: ['Alert analysis', 'Dashboard queries', 'Incident summary', 'Monitoring AI'],
  },
]

export const projects = [
  {
    title: 'Crypto Trading Bots & Market Intelligence',
    type: 'Hobby Project',
    emoji: '📈',
    description:
      'Autonomous Python trading bots operating 24/7, executing buy/sell strategies based on configurable rules and real-time market signals.',
    bullets: [
      'Operates autonomously 24/7 with configurable rules and real-time signals.',
      'Market monitoring system tracking prices, volume, and trend indicators.',
      'Integrated exchange APIs for live data, order execution, and portfolio tracking.',
      'Applied same production engineering rigor: modular design, logging, alerting, error recovery.',
    ],
    tech: ['Python', 'Exchange APIs', 'Real-Time Data', 'Algorithmic Trading', 'Automation'],
  },
]

export const education = [
  {
    degree: 'MBA – Software Engineering',
    institution: 'FIAP',
    location: 'São Paulo, BR',
    period: '2012',
    emoji: '🎓',
  },
  {
    degree: 'B.S. – Computer Engineering',
    institution: 'IESAM',
    location: 'Belém, Pará, BR',
    period: '2003 – 2006',
    emoji: '🎓',
  },
]

export const certifications = [
  {
    name: 'Microsoft Certified Technology Specialist (MCTS)',
    detail: '.NET Framework 3.5, ASP.NET Applications',
    date: 'December 2011 – Present',
    emoji: '🏆',
  },
]

export const languages = [
  { language: 'English', level: 'Fluent', pct: 95 },
  { language: 'Portuguese', level: 'Native', pct: 100 },
  { language: 'Spanish', level: 'Intermediate', pct: 60 },
]
