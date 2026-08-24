export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  id: string;
  icon: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface TechSkill {
  name: string;
  category: 'core' | 'framework' | 'tool' | 'database';
  iconKey: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  type: 'email' | 'github' | 'linkedin' | 'location';
  label: string;
  value: string;
  href?: string;
}
