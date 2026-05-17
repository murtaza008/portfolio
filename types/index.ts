export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  type: string;
  demoUrl: string;
  codeUrl: string;
  delayMs: number;
}

export interface SkillCategoryType {
  id: string;
  title: string;
  iconClass: string;
  iconBgColor: string;
  iconColor: string;
  skills: string[];
  proficiency: number;
  delayMs: number;
}

export interface ExperienceItemType {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
  delayMs: number;
}

export interface EducationItemType {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  bullets: string[];
  delayMs: number;
}

export interface CertificationItemType {
  id: string;
  title: string;
  issuer: string;
  year: string;
  verifyUrl: string;
  iconClass: string;
  color: string;
  delayMs: number;
}
