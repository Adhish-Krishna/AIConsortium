export interface Contributor {
  id: string;
  name: string;
  department: string;
  rollno: string;
  role: string;
}

export interface Mentor {
  id: string;
  name: string;
  department: string;
  designation: string;
  expertise: string;
}

export interface Project {
  id: string;
  title: string;
  contributors: Contributor[];
  contributors_count: number;
  description: string;
  fullDescription: string;
  mentors: Mentor[];
  technologies: string[];
  startDate: string;
  status: 'ongoing' | 'completed' | 'planned';
  repository?: string;
  demoLink?: string;
}

export interface UIProject{
  id: string;
  title: string;
  contributors: number;
  description: string;
}

//sample data
const projects: Project[] = [
  {
    id: '1',
    title: "Open Neural Network Library",
    contributors: [
      {
        id: '1-1',
        name: 'Alex Johnson',
        department: "Computer Science",
        rollno: "CS2021001",
        role: 'AI Engineer'
      },
      {
        id: '1-2',
        name: 'Sarah Chen',
        department: "Electronics",
        rollno: "EC2021032",
        role: 'Software Engineer'
      }
    ],
    contributors_count: 2,
    description: "An open-source library for building and training neural networks with optimized performance.",
    fullDescription: "The Open Neural Network Library is a comprehensive suite of tools for building, training, and deploying neural networks. It's designed to be both performant and accessible to researchers and developers.\n\nOur library provides optimized implementations of common neural network architectures and training algorithms, with a focus on speed and memory efficiency. It supports both CPU and GPU acceleration, and includes tools for distributed training across multiple machines.\n\nThe project is maintained by a diverse community of contributors from academia and industry, with a shared goal of advancing the state of open-source AI tools.",
    mentors: [
      {
        id: '1-m1',
        name: 'Dr. Michael Lee',
        department: 'Computer Science',
        expertise: 'Deep Learning',
        designation:"Assistant Professor"
      }
    ],
    technologies: ['Python', 'C++', 'CUDA', 'TensorFlow', 'PyTorch'],
    startDate: 'March 2022',
    status: 'ongoing',
    repository: 'https://github.com/example/open-neural-network',
    demoLink: 'https://demo.neural-network.example.com'
  },
  {
    id: '2',
    title: "AI Ethics Certification Program",
    contributors: [
      {
        id: '2-1',
        name: 'Emily Parker',
        department: "Philosophy",
        rollno: "PH2022015",
        role: 'Ethics Researcher'
      },
      {
        id: '2-2',
        name: 'David Kim',
        department: "Public Policy",
        rollno: "PP2021008",
        role: 'Policy Analyst'
      }
    ],
    contributors_count: 2,
    description: "A community-driven certification program for AI systems that meet ethical and safety standards.",
    fullDescription: "The AI Ethics Certification Program aims to establish a framework for evaluating and certifying AI systems based on ethical considerations and safety standards.\n\nOur program develops comprehensive assessment protocols that evaluate AI systems across multiple dimensions including fairness, accountability, transparency, and safety. We work with industry partners to implement these standards and provide certification for systems that meet our criteria.\n\nThe certification process includes both automated testing and manual review by experts in AI ethics and related fields. Our goal is to help organizations build more responsible AI systems and help users identify systems they can trust.",
    mentors: [
      {
        id: '2-m1',
        name: 'Prof. Sophia Garcia',
        department: 'Philosophy',
        expertise: 'AI Ethics',
        designation:"Assistant Professor"
      },
      {
        id: '2-m2',
        name: 'Dr. James Wilson',
        department: 'Computer Science',
        expertise: 'Policy & Governance',
        designation:"Assistant Professor"
      }
    ],
    technologies: ['Python', 'JavaScript', 'Policy Framework', 'Auditing Tools'],
    startDate: 'September 2022',
    status: 'ongoing',
    repository: 'https://github.com/example/ai-ethics-certification',
    demoLink: 'https://ethics-cert.ai.example.org'
  },
  {
    id: '3',
    title: "Distributed Machine Learning Framework",
    contributors: [
      {
        id: '3-1',
        name: 'Miguel Rodriguez',
        department: "Computer Engineering",
        rollno: "CE2020045",
        role: 'Distributed Systems Engineer'
      },
      {
        id: '3-2',
        name: 'Lisa Wong',
        department: "Computer Science",
        rollno: "CS2021022",
        role: 'Machine Learning Engineer'
      },
      {
        id: '3-3',
        name: 'Robert Chen',
        department: "Statistics",
        rollno: "ST2022011",
        role: 'Data Scientist'
      }
    ],
    contributors_count: 3,
    description: "A framework for training machine learning models across distributed computing environments.",
    fullDescription: "The Distributed Machine Learning Framework enables efficient training of large-scale machine learning models across clusters of computers.\n\nOur framework addresses the challenges of distributed training, including data partitioning, synchronization, fault tolerance, and communication efficiency. It supports various distributed training paradigms including data parallelism, model parallelism, and hybrid approaches.\n\nThe system is designed to scale from a single multi-GPU server to clusters with hundreds of nodes, making it suitable for training increasingly large models on massive datasets. We provide integrations with popular machine learning libraries and support deployment across various cloud platforms and on-premises clusters.",
    mentors: [
      {
        id: '3-m1',
        name: 'Dr. Alan Patel',
        department: 'Computer Engineering',
        expertise: 'Distributed Systems',
        designation:"Assistant Professor"
      }
    ],
    technologies: ['Go', 'Python', 'Kubernetes', 'TensorFlow', 'PyTorch', 'Ray'],
    startDate: 'June 2022',
    status: 'completed',
    repository: 'https://github.com/example/distributed-ml',
    demoLink: 'https://distributed-ml.example.com'
  },
  {
    id: '4',
    title: "AI-Powered Healthcare Assistant",
    contributors: [
      {
        id: '4-1',
        name: 'Alex Johnson',
        department: "Computer Science",
        rollno: "CS2021001",
        role: 'AI Engineer'
      },
      {
        id: '4-2',
        name: 'Sarah Chen',
        department: "Computer Science",
        rollno: "CS2021002",
        role: 'Frontend Developer'
      },
      {
        id: '4-3',
        name: 'Miguel Rodriguez',
        department: "Data Science",
        rollno: "DS2022033",
        role: 'Data Scientist'
      }
    ],
    contributors_count: 3,
    description: "An intelligent system for patient monitoring and health predictions",
    fullDescription: "This project aims to develop an AI-powered healthcare assistant that can help with patient monitoring, health predictions, and provide timely alerts to healthcare providers.\n\nThe system uses machine learning algorithms trained on large medical datasets to recognize patterns and make predictions about patient health outcomes. It integrates with existing hospital systems and wearable devices to collect real-time data.\n\nOur team is collaborating with medical professionals to ensure the system meets clinical standards and provides valuable insights that can improve patient care and reduce healthcare costs.",
    mentors: [
      {
        id: '4-m1',
        name: 'Dr. Elizabeth Taylor',
        department: 'Medical Informatics',
        expertise: 'Healthcare AI',
        designation:"Assistant Professor"
      },
      {
        id: '4-m2',
        name: 'Prof. James Wilson',
        department: 'Computer Science',
        expertise: 'Clinical Informatics',
        designation:"Assistant Professor"
      }
    ],
    technologies: ['TensorFlow', 'React', 'Python', 'AWS', 'MongoDB'],
    startDate: 'January 2023',
    status: 'ongoing',
    repository: 'https://github.com/example/healthcare-ai',
    demoLink: 'https://demo.healthcare-ai.example.com'
  },
  {
    id: '5',
    title: "AI Ethics Certification Program",
    contributors: [],
    contributors_count: 0,
    description: "A community-driven certification program for AI systems that meet ethical and safety standards.",
    fullDescription: "The AI Ethics Certification Program aims to establish a framework for evaluating and certifying AI systems based on ethical considerations and safety standards.\n\nOur program develops comprehensive assessment protocols that evaluate AI systems across multiple dimensions including fairness, accountability, transparency, and safety. We work with industry partners to implement these standards and provide certification for systems that meet our criteria.\n\nThe certification process includes both automated testing and manual review by experts in AI ethics and related fields. Our goal is to help organizations build more responsible AI systems and help users identify systems they can trust.",
    mentors: [
      {
        id: '5-m1',
        name: 'Prof. Sophia Garcia',
        department:"CSE",
        expertise: 'AI Ethics',
        designation:"Assistant Professor"
      }
    ],
    technologies: ['Python', 'JavaScript', 'Policy Framework', 'Auditing Tools'],
    startDate: 'September 2022',
    status: 'planned',
    repository: 'https://github.com/example/ai-ethics-certification'
  },
  {
    id: '6',
    title: "Distributed Machine Learning Framework",
    contributors: [],
    contributors_count: 0,
    description: "A framework for training machine learning models across distributed computing environments.",
    fullDescription: "The Distributed Machine Learning Framework enables efficient training of large-scale machine learning models across clusters of computers.\n\nOur framework addresses the challenges of distributed training, including data partitioning, synchronization, fault tolerance, and communication efficiency. It supports various distributed training paradigms including data parallelism, model parallelism, and hybrid approaches.",
    mentors: [],
    technologies: ['Go', 'Python', 'Kubernetes', 'TensorFlow'],
    startDate: 'June 2022',
    status: 'completed',
    repository: 'https://github.com/example/distributed-ml'
  }
];

export { projects };