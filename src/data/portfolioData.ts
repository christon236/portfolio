import type { NavItem, MetricItem, TechSkill, ProjectItem, TimelineMilestone, ContactInfo } from '../types/portfolio';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const heroData = {
  developerTag: '</ Full-Stack Developer />',
  name: 'JOHN CHRISTAN ',
  role: 'Python Django Full-Stack Developer',
  description: 'I build scalable web applications, modern user experiences, and reliable backend systems.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/christon236', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-christan', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:christon236@gmail.com', icon: 'mail' },
  ],
};

export const aboutData = {
  bio: "Aspiring Full-Stack Python Django Developer with hands-on experience building web applications using Python, Django, React, JavaScript, HTML, and SQL. Skilled in developing responsive user interfaces, backend APIs, and database-driven applications with a quality-focused mindset and continuous drive to learn and grow.",
  metrics: [
    {
      id: 'experience',
      icon: 'calendar',
      value: '1+',
      label: 'Years Experience',
    },
    {
      id: 'projects',
      icon: 'code',
      value: '10+',
      label: 'Projects Completed',
    },
    {
      id: 'problem-solver',
      icon: 'trophy',
      value: 'Problem Solver',
      label: 'and Builder',
    },
    {
      id: 'always-learning',
      icon: 'rocket',
      value: 'Always Learning',
      label: 'and Improving',
    },
  ] as MetricItem[],
};

export const skillsData: TechSkill[] = [
  // Row 1
  { name: 'Python', category: 'core', iconKey: 'python' },
  { name: 'Django', category: 'framework', iconKey: 'django' },
  { name: 'REST API', category: 'core', iconKey: 'restapi' },
  { name: 'React', category: 'framework', iconKey: 'react' },
  { name: 'TypeScript', category: 'core', iconKey: 'typescript' },
  { name: 'JavaScript', category: 'core', iconKey: 'javascript' },
  { name: 'HTML', category: 'core', iconKey: 'html' },
  { name: 'CSS', category: 'core', iconKey: 'css' },
  // Row 2
  { name: 'Bootstrap', category: 'framework', iconKey: 'bootstrap' },
  { name: 'TailwindCSS', category: 'framework', iconKey: 'tailwind' },
  { name: 'Git', category: 'tool', iconKey: 'git' },
  { name: 'GitHub', category: 'tool', iconKey: 'github' },
  { name: 'PostgreSQL', category: 'database', iconKey: 'postgresql' },
  { name: 'MySQL', category: 'database', iconKey: 'mysql' },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'entrix',
    title: 'ENTRIX – Gym Management Platform',
    name: 'ENTRIX',
    subtitle: 'Gym Management Platform',
    description: 'A comprehensive full-stack gym management system built with Django and Python. Features include member management, attendance tracking, workout plans, diet plans, subscriptions, and analytics dashboard.',
    image: '/images/project_entrix.jpg',
    tags: ['Django', 'Python', 'Bootstrap', 'MySQL'],
    liveUrl: 'https://github.com/christon236/entrix',
    githubUrl: 'https://github.com/christon236/entrix',
    featured: true,
  },
  {
    id: 'geosys',
    title: 'Geosys Corporate Website',
    name: 'Geosys',
    subtitle: 'Corporate Website',
    description: 'Official corporate website built with React, TypeScript, and modern frontend architecture for Geosys IT Solutions. Features clean UI/UX with smooth animations and fully responsive performance.',
    image: '/images/project_geosys.jpg',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    liveUrl: 'https://geosys.geoassets.co.in/',
    githubUrl: 'https://github.com/christon236/geosys',
    featured: true,
  },
];

export const timelineData: TimelineMilestone[] = [
  {
    year: 'JUNE 2026 – AUG 2026',
    title: 'Python Full Stack Developer ',
    description: 'GEOSYS IT SOLUTIONS • Developing real-time web applications using Python, Django, React, and MySQL. Designing and implementing backend APIs and responsive frontend features.',
  },
  {
    year: 'NOV 2025 – MAY 2026',
    title: 'Python Full Stack Developer Intern',
    description: 'LUMINAR TECHNOLAB • 6-month intensive full-stack internship developing dynamic web apps using Python, Django, JavaScript, React, REST API, HTML, CSS, Bootstrap, and MySQL.',
  },
  {
    year: 'DEC 2023 – OCT 2025',
    title: 'Quality Inspector',
    description: 'HYOSEONG ELECTRIC INDIA • Ensured product accuracy and engineering quality compliance by adhering to standard procedures and detailed inspection protocols.',
  },
  {
    year: 'APRIL 2022',
    title: 'Diploma in Electrical & Electronics Engineering',
    description: 'GOVERNMENT POLYTECHNIC COLLEGE (74%) • Graduated with strong foundation in engineering principles, mathematics, and software problem-solving.',
  },
];

export const contactData: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'christon236@gmail.com',
    href: 'mailto:christon236@gmail.com',
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'github.com/christon236',
    href: 'https://github.com/christon236',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/john-christan',
    href: 'https://www.linkedin.com/in/john-christan',
  },
  {
    type: 'location',
    label: 'Location',
    value: 'India',
  },
];
