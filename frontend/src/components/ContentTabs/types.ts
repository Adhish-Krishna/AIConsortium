export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  contributors: number;
  stars: number;
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
