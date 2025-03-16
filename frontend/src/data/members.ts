export interface Member {
  id: string;
  name: string;
  position: string;
  avatar: string;
  bio: string;
  expertise: string[];
  contact?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const members: Member[] = [
  {
    id: '1',
    name: "Dr. Sarah Chen",
    position: "Director",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Leading AI researcher specializing in machine learning ethics and neural network optimization.",
    expertise: ["Machine Learning", "AI Ethics", "Neural Networks"],
    contact: {
      email: "sarah.chen@aiconsortium.org",
      linkedin: "sarahchen"
    }
  },
  {
    id: '2',
    name: "Prof. Michael Wong",
    position: "Head of Research",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Former tech industry leader with 15 years experience in deep learning systems.",
    expertise: ["Deep Learning", "Computer Vision", "AI Infrastructure"],
    contact: {
      email: "m.wong@aiconsortium.org",
      twitter: "@mwongai"
    }
  },
  {
    id: '3',
    name: "Dr. Amara Johnson",
    position: "Secretary",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Computational linguist focused on natural language processing and sentiment analysis.",
    expertise: ["NLP", "Sentiment Analysis", "Chatbots"],
    contact: {
      email: "a.johnson@aiconsortium.org",
      linkedin: "amaraj"
    }
  },
  {
    id: '4',
    name: "Thomas Reeves",
    position: "Treasurer",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    bio: "Financial technology expert with experience in AI-driven financial analysis systems.",
    expertise: ["FinTech", "Data Analysis", "Risk Assessment"],
    contact: {
      email: "t.reeves@aiconsortium.org"
    }
  },
  {
    id: '5',
    name: "Dr. Leila Patel",
    position: "Head of Ethics Committee",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    bio: "Specializes in the intersection of AI ethics, policy and regulation at international level.",
    expertise: ["AI Ethics", "Policy", "Regulation"],
    contact: {
      email: "l.patel@aiconsortium.org",
      linkedin: "leilapatel",
      twitter: "@leilaAIethics"
    }
  },
  {
    id: '6',
    name: "James Wilson",
    position: "Industry Liaison",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Bridges academia and industry to facilitate knowledge transfer and practical applications.",
    expertise: ["Technology Transfer", "Partnerships", "Strategic Planning"],
    contact: {
      email: "j.wilson@aiconsortium.org",
      linkedin: "jameswilsonai"
    }
  }
];
