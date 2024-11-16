// types/profile.ts

export type SocialLink = {
  platform: string;
  url: string;
  icon: string; // Literal union type of available icons
};

export type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
};

export type Profile = {
  personal: {
    first_name: string;
    last_name: string;
    title: string;
    email: string;
    location: string;
    bio: string;
    avatar: string;
    dateOfBirth: string;
  };
  social: SocialLink[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: WorkExperience[];
  education: {
    institution: string;
    degree: string;
    field: string;
    graduationDate: string;
  }[];
  projects: Project[];
};
