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
  impactFactor?: string;
  publisher: string,
  issn_no: string,
  isbn_no: string
}

// Sample publications data
export const publications: Publication[] = [
  {
    id: "1",
    title: "Compressive Sensing Node Localization Method Using Autonomous Underwater Vehicle Network",
    authors: [
      { name: "Madhumitha K", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Arul Anand N", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Sathiyamoorthi Velayutham", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Ashutosh Srivastava", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Sachin Kumar Gupta", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "P Suresh", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Nitin Goyal", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Research paper on Machine Learning applications in underwater vehicle networks",
    journal: "Wireless Personal Communications",
    year: "2022",
    doi: "10.1007/s11277-022-09841-5",
    keywords: ["Machine Learning"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.59',
    publisher: "Springer",
    issn_no: "09296212",
    isbn_no: "1572834X",
  },
  {
    id: "2",
    title: "Privacy-aware network embedding-based ensemble for social recommendation",
    authors: [
      { name: "Sudha Sadasivam G", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Vani K", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Research on Deep Neural Networks (DNN) for social recommendation systems",
    journal: "Journal of Supercomputing",
    year: "2022",
    doi: "10.1007/s11227-022-04958-7",
    keywords: ["Deep Neural Networks (DNN)"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.76',
    publisher: "Springer",
    issn_no: "09208542",
    isbn_no: "15730484"
  },
  {
    id: "3",
    title: "Multimodal prediction of breast cancer using radiogenomics and clinical trials with decision fusion",
    authors: [
      { name: "N. Ramkumar", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Sudha Sadasivam G", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Karthika Renuka D", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Machine Learning and Medical AI applications in breast cancer prediction",
    journal: "Journal of Intelligent & Fuzzy Systems",
    year: "2023",
    doi: "10.3233/JIFS-220633",
    keywords: ["Machine Learning", "Medical AI", "Breast Cancer", "Radiogenomics"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.38',
    publisher: "IOS Press",
    issn_no: "10641246",
    isbn_no: "18758967",
  },
  {
    id: "4",
    title: "Defense against adversarial malware using robust classifier: DAM-ROC",
    authors: [
      { name: "Shymala Gowri S", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Sudha Sadasivam G", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Research on Adversarial Machine Learning for malware defense",
    journal: "Sadhana-Academy Proceedings In Engineering Sciences",
    year: "2022",
    doi: "10.1007/s12046-022-01980-6S",
    keywords: ["Adversarial Machine Learning", "Malware Defense", "Robust Classifier"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.34',
    publisher: "Springer",
    issn_no: "02562499",
    isbn_no: "09737677",
  },
  {
    id: "5",
    title: "Toward Better Food Security Using Concepts from Industry 5.0",
    authors: [
      { name: "Selvakumar", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Milicia Pojic", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Jayashree L S", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Research on Blockchain, IoE, and Digital Twin for food security",
    journal: "Sensors",
    year: "2022",
    doi: "10.3390/s22218377",
    keywords: ["Blockchain", "IoE", "Digital Twin", "Food Security", "Industry 5.0"],
    indexing: "SCI & SCI-E",
    quartile: "Q1",
    impactFactor: '0.79',
    publisher: "MDPI",
    issn_no: "",
    isbn_no: "14248220"
  },
  {
    id: "6",
    title: "Multilingual low resource Indian language speech recognition and spell correction using Indic BERT",
    authors: [
      { name: "M C Shunmuga Priya", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Karthika Renuka D", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Ashok Kumar L", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Lovelyn Rose S", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Natural Language Processing (NLP) for Indian language speech recognition",
    journal: "Sadhana-Academy Proceedings In Engineering Sciences",
    year: "2022",
    doi: "10.1007/s12046-022-01973-5",
    keywords: ["Natural Language Processing", "Speech Recognition", "Indic BERT"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.34',
    publisher: "Springer",
    issn_no: "02562499",
    isbn_no: "09737677",
  },
  {
    id: "7",
    title: "An Extensive Survey on Superpixel Segmentation: A Research Perspective",
    authors: [
      { name: "Vinoth Kumar B", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Prakash J", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Evolutionary Computing and Machine Learning applied to superpixel segmentation",
    journal: "Archives Of Computational Methods In Engineering",
    year: "2023",
    doi: "10.1007/s11831-023-09919-8",
    keywords: ["Evolutionary Computing", "Machine Learning", "Superpixel Segmentation"],
    indexing: "SCI & SCI-E",
    quartile: "Q1",
    impactFactor: '1.8',
    publisher: "Springer",
    issn_no: "11343060",
    isbn_no: "18861784",
  },
  {
    id: "8",
    title: "A Deep Learning Approach for Efficient Anomaly Detection in WSNs",
    authors: [
      { name: "Arul Jothi S", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Deep Learning & Anomaly Detection in wireless sensor networks",
    journal: "International Journal Of Computers Communications & Control",
    year: "2023",
    doi: "10.15837/ijccc.2023.1.4756",
    keywords: ["Deep Learning", "Anomaly Detection", "WSN"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.49',
    publisher: "IJCCC",
    issn_no: "18419836",
    isbn_no: "18419844",
  },
  {
    id: "9",
    title: "MFRCNN: Marshalled FRCNN with optimized reading order in XY tree for document layout analysis in scientific research articles",
    authors: [
      { name: "Lovelyn Rose S", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Ravitha Rajalakshmi", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "M. Sabari Nathan", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "A. Suraj Subramanian", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "R. Harishkumar", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Machine Learning application in document layout analysis",
    journal: "Journal Of Intelligent & Fuzzy Systems",
    year: "2023",
    doi: "10.3233/JIFS-220705",
    keywords: ["Machine Learning", "FRCNN", "Document Layout Analysis"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.38',
    publisher: "IOS",
    issn_no: "10641246",
    isbn_no: "18758967",

  },
  {
    id: "10",
    title: "Safemedchain—drug counterfeit prevention and recommendation using blockchain and machine learning",
    authors: [
      { name: "Gopika Rani N", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Praja", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Gayathri", department: "CSE", affiliation: "PSG College of Technology" },
      { name: "Sneha Sridharan", department: "CSE", affiliation: "PSG College of Technology" }
    ],
    mentors: [],
    abstract: "Blockchain and Machine Learning for drug counterfeit prevention",
    journal: "Journal Of Intelligent & Fuzzy Systems",
    year: "2023",
    doi: "10.3233/JIFS-220636",
    keywords: ["Blockchain", "Machine Learning", "Drug Counterfeit"],
    indexing: "SCI & SCI-E",
    quartile: "Q2",
    impactFactor: '0.38',
    publisher: "IOS Press",
    issn_no: "10641246",
    isbn_no: "18758967",
  }
]