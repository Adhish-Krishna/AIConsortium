interface Author {
  name: string;
  department: string,
  rollno: string,
  affiliation?: string;
}

interface Mentor{
  name: string,
  department: string,
}

// Define Publication type
export interface Publication {
  id: string;
  title: string;
  authors: string | Author[];
  mentors: string | Mentor[];
  abstract: string;
  journal: string;
  year: string;
  imageUrl?: string;
  doi?: string;
  keywords?: string[];
  citations?: number;
  pdfLink?: string;
  collaborators?: string[];
}

// Sample publications data
export const publications: Publication[] = [
  {
    id: "pub-001",
    title: "Deep Learning Approaches for Natural Language Processing in Educational Contexts",
    authors: [
      { name: "Priya Sharma", department: "Computer Science", rollno: "CS2021-45", affiliation: "AI Research Lab" },
      { name: "Rahul Verma", department: "Computer Science", rollno: "CS2021-62" }
    ],
    mentors: [
      { name: "Dr. Anil Kumar", department: "Computer Science" },
      { name: "Dr. Meera Patel", department: "Linguistics" }
    ],
    abstract: "This paper explores novel deep learning architectures for improving natural language understanding in educational technology applications, with a focus on automated essay grading and personalized learning feedback systems.",
    journal: "Journal of Educational Technology & AI",
    year: "2023",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.1234/jeta.2023.001",
    keywords: ["Deep Learning", "NLP", "Education Technology", "Automated Grading"],
    citations: 34,
    pdfLink: "/pdfs/deep-learning-nlp-education.pdf",
    collaborators: ["National Institute of Education", "EdTech Solutions Inc."]
  },
  {
    id: "pub-002",
    title: "Machine Learning for Sustainable Agricultural Practices: A Case Study in Rural India",
    authors: [
      { name: "Ankit Patel", department: "Agricultural Engineering", rollno: "AG2022-12" },
      { name: "Sneha Gupta", department: "Computer Science", rollno: "CS2022-08", affiliation: "Rural Tech Initiative" }
    ],
    mentors: [
      { name: "Dr. Rajesh Singh", department: "Agricultural Sciences" }
    ],
    abstract: "This research demonstrates the application of machine learning algorithms to optimize irrigation schedules and predict crop yields in resource-constrained farming environments across three districts in rural India.",
    journal: "Sustainable Computing and Agricultural Research",
    year: "2022",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.5678/scar.2022.045",
    keywords: ["Machine Learning", "Agriculture", "Sustainability", "IoT", "Rural Development"],
    citations: 17,
    pdfLink: "/pdfs/ml-sustainable-agriculture.pdf"
  },
  {
    id: "pub-003",
    title: "Quantum Computing Applications in Cryptography: Current State and Future Directions",
    authors: [
      { name: "Vikram Mehta", department: "Physics", rollno: "PH2020-03" },
      { name: "Neha Reddy", department: "Mathematics", rollno: "MA2021-15" }
    ],
    mentors: [
      { name: "Prof. Samuel Wilson", department: "Quantum Computing" },
      { name: "Dr. Lisa Chen", department: "Cybersecurity" }
    ],
    abstract: "This comprehensive review examines the implications of quantum computing advances on current cryptographic standards and proposes quantum-resistant algorithms suitable for implementation in near-term security protocols.",
    journal: "International Journal of Quantum Information & Cryptography",
    year: "2023",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.9876/ijqic.2023.012",
    keywords: ["Quantum Computing", "Cryptography", "Post-Quantum Security", "Shor's Algorithm"],
    citations: 56,
    pdfLink: "/pdfs/quantum-crypto-review.pdf",
    collaborators: ["National Quantum Research Center", "Cybersecurity Institute"]
  },
  {
    id: "pub-004",
    title: "Ethical Frameworks for Autonomous AI Systems in Healthcare Decision-Making",
    authors: "Dr. Ayesha Khan, Maya Desai, Prof. James Thompson",
    mentors: "Prof. Eliza Rodriguez, Dr. Michael Chen",
    abstract: "This paper proposes a comprehensive ethical framework for the development and deployment of autonomous AI systems in critical healthcare decision-making contexts, with emphasis on transparency, explainability, and accountability.",
    journal: "Ethics in AI and Healthcare",
    year: "2022",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: ["AI Ethics", "Healthcare", "Autonomous Systems", "Medical Decision-Making"],
    citations: 42,
    pdfLink: "/pdfs/ethical-ai-healthcare.pdf",
    collaborators: ["University Medical Center", "Center for AI Ethics"]
  },
  {
    id: "pub-005",
    title: "Renewable Energy Optimization Using Multi-Agent Reinforcement Learning",
    authors: [
      { name: "Deepak Kumar", department: "Electrical Engineering", rollno: "EE2021-33" },
      { name: "Li Wei", department: "Computer Science", rollno: "CS2022-54" }
    ],
    mentors: [
      { name: "Dr. Sarah Johnson", department: "Sustainable Energy" }
    ],
    abstract: "This research introduces a novel multi-agent reinforcement learning approach for optimizing energy distribution in mixed renewable energy grids, demonstrating a 28% improvement in efficiency over traditional methods.",
    journal: "Renewable Energy Systems & Machine Learning",
    year: "2023",
    doi: "10.3421/reml.2023.076",
    keywords: ["Reinforcement Learning", "Renewable Energy", "Smart Grid", "Multi-Agent Systems"],
    citations: 23,
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pdfLink: "/pdfs/renewable-energy-marl.pdf",
    collaborators: ["National Renewable Energy Laboratory", "CleanTech Solutions"]
  }
];