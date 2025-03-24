export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
}

export interface Contributor {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  expertise: string;
}

// Project type used in the ContentTabs UI components
export interface Project {
  id: string;
  image: string;
  title: string;
  contributors: number;
  description: string;
}

export interface Member {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  expertise: string[];
  contact?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TimelineItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

// Publication type for publications list
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  date: string;
  description: string;
  link?: string;
  image?: string;
}
