interface Author {
  name: string;
  department: string,
  rollno?: string,
  affiliation?: string;
}

interface Mentor{
  name: string,
  designation: string,
  department: string,
}

// Define Publication type
export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  mentors: Mentor[];
  abstract: string;
  journal: string;
  year: string;
  imageUrl?: string;
  doi?: string;
  keywords?: string[];
  citations?: number;
  pdfLink?: string;
  collaborators?: string[];
  indexing?: string;
  quartile?: string;
  impactFactor?: number;
}

// Sample publications data
export const publications: Publication[] = [
  {
    id: "pub-2023-01",
    title: "Machine Learning Approaches to Natural Language Processing in Educational Contexts",
    authors: [
      {
        name: "Rajiv Kumar",
        department: "Computer Science Engineering",
        rollno: "CSE/19/042",
      },
      {
        name: "Priya Sharma",
        department: "Computer Science Engineering",
        rollno: "CSE/19/028",
      },
      {
        name: "Dr. Anand Mishra",
        department: "Computer Science Engineering",
        affiliation: "National Institute of Technology",
      }
    ],
    mentors: [
      {
        name: "Dr. Sanjay Gupta",
        designation: "Associate Professor",
        department: "Computer Science Engineering",
      }
    ],
    abstract: "This paper explores novel machine learning techniques for enhancing natural language processing in educational technology applications. We demonstrate improvements in sentiment analysis of student feedback and automated assessment systems.",
    journal: "IEEE Transactions on Learning Technologies",
    year: "2023",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.1109/TLT.2023.3156789",
    keywords: ["Machine Learning", "NLP", "Educational Technology", "Sentiment Analysis"],
    citations: 14,
    pdfLink: "/pdfs/nlp-education-2023.pdf",
    indexing: "Scopus, Web of Science",
    quartile: "Q1",
    impactFactor: 5.8
  },
  {
    id: "pub-2022-05",
    title: "Deep Learning for Medical Image Analysis: A Comprehensive Review",
    authors: [
      {
        name: "Sneha Patel",
        department: "Electronics and Communication Engineering",
        rollno: "ECE/20/011",
      },
      {
        name: "Arjun Singh",
        department: "Biomedical Engineering",
        rollno: "BME/20/007",
      }
    ],
    mentors: [
      {
        name: "Dr. Meera Rajput",
        designation: "Professor",
        department: "Electronics and Communication Engineering",
      },
      {
        name: "Dr. Vikram Reddy",
        designation: "Assistant Professor",
        department: "Biomedical Engineering",
      }
    ],
    abstract: "This paper presents a comprehensive review of deep learning techniques applied to medical image analysis. We categorize approaches based on imaging modality and clinical application, highlighting recent advancements and challenges.",
    journal: "Medical Image Analysis",
    year: "2022",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.1016/j.media.2022.102341",
    keywords: ["Deep Learning", "Medical Imaging", "CNN", "Healthcare AI"],
    citations: 87,
    pdfLink: "/pdfs/deep-learning-medical-2022.pdf",
    collaborators: ["Regional Medical Center", "AI Healthcare Institute"],
    indexing: "PubMed, Scopus",
    quartile: "Q1",
    impactFactor: 8.2
  },
  {
    id: "pub-2023-08",
    title: "Sustainable Energy Management Using IoT and Blockchain: Smart Campus Case Study",
    authors: [
      {
        name: "Amit Verma",
        department: "Electrical Engineering",
        rollno: "EE/18/022",
      },
      {
        name: "Neha Kapoor",
        department: "Information Technology",
        rollno: "IT/18/045",
      }
    ],
    mentors: [
      {
        name: "Dr. Rahul Mathur",
        designation: "Professor",
        department: "Electrical Engineering",
      }
    ],
    abstract: "This research introduces a novel framework integrating IoT sensors and blockchain technology for sustainable energy management on university campuses. We present deployment results showing 24% reduction in energy consumption over a six-month period.",
    journal: "Renewable and Sustainable Energy Reviews",
    year: "2023",
    imageUrl:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.1016/j.rser.2023.112786",
    keywords: ["IoT", "Blockchain", "Smart Campus", "Energy Management", "Sustainability"],
    citations: 9,
    pdfLink: "/pdfs/sustainable-energy-2023.pdf",
    collaborators: ["Green Energy Foundation", "Smart City Initiative"],
    indexing: "Scopus, Web of Science",
    quartile: "Q1",
    impactFactor: 14.5
  },
  {
    id: "pub-2022-11",
    title: "Cybersecurity in Critical Infrastructure: Threat Modeling and Defense Mechanisms",
    authors: [
      {
        name: "Karan Malhotra",
        department: "Information Security",
        rollno: "IS/19/016",
      },
      {
        name: "Dr. Leela Rao",
        department: "Computer Science Engineering",
        affiliation: "Institute of Cybersecurity Research",
      }
    ],
    mentors: [
      {
        name: "Dr. Aditya Kumar",
        designation: "Professor",
        department: "Information Security",
      }
    ],
    abstract: "This paper addresses the growing cybersecurity challenges facing critical infrastructure. We propose a comprehensive threat modeling framework and evaluate defense mechanisms through simulation and case studies of recent attacks.",
    journal: "Computers & Security",
    year: "2022",
    doi: "10.1016/j.cose.2022.102633",
    keywords: ["Cybersecurity", "Critical Infrastructure", "Threat Modeling", "Network Security"],
    citations: 32,
    pdfLink: "/pdfs/cybersecurity-infrastructure-2022.pdf",
    indexing: "Scopus",
    quartile: "Q2",
    impactFactor: 4.3
  },
  {
    id: "pub-2023-03",
    title: "Quantum Computing Applications in Cryptography: Opportunities and Challenges",
    authors: [
      {
        name: "Vivek Mehta",
        department: "Computer Science Engineering",
        rollno: "CSE/20/003",
      }
    ],
    mentors: [
      {
        name: "Dr. Nandini Shah",
        designation: "Associate Professor",
        department: "Computer Science Engineering",
      },
      {
        name: "Dr. Prakash Joshi",
        designation: "Professor",
        department: "Mathematics",
      }
    ],
    abstract: "This research explores the implications of quantum computing advancements for contemporary cryptographic systems. We analyze vulnerabilities in current encryption standards and propose quantum-resistant alternatives.",
    journal: "Journal of Cryptographic Engineering",
    year: "2023",
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    doi: "10.1007/s13389-023-00289-4",
    keywords: ["Quantum Computing", "Cryptography", "Post-Quantum Cryptography", "Information Security"],
    citations: 11,
    pdfLink: "/pdfs/quantum-cryptography-2023.pdf",
    indexing: "Scopus, Web of Science",
    quartile: "Q2",
    impactFactor: 3.7
  }
];