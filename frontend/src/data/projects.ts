export interface Contributor {
  id: string;
  name: string;
  department?: string;
  rollno?: string;
  role?: string;
}

export interface Mentor {
  id: string;
  name: string;
  department: string;
  designation: string;
  expertise: string;
}

export interface CollaboratingAgencies{
  id: string;
  name: string;
  address: string;
}

export interface Investigators{
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  sactionedDate?: string;
  completedDate?: string;
  duration?: string;
  collaboratingAgenices?: CollaboratingAgencies[];
  sponsorOrganization?: string;
  contributors?: Contributor[];
  amount?: string;
  investigatorName?: Investigators[];
  PI_CO_PI?: string;
  currentStatus?: string
  proogofAproval?: string;
  contributors_count?:number;
  description: string;
  fullDescription: string;
  mentors?: Mentor[];
  technologies: string[];
  repository?: string;
  demoLink?: string;
  projectDepartments: string;
}

export interface UIProject{
  id: string;
  title: string;
  description: string;
}

//sample data
const projects: Project[] = [
  {
    id: "project-1",
    title: "Design and development of a wearable navigation guidance (WING) kit for elderly with dementia with a fall predictor",
    duration: "3 years 1 month",
    sponsorOrganization: "DST",
    amount: "56 lakhs",
    investigatorName: [
      { id: "inv-1", name: "Dr. Jayashree L S" },
      { id: "inv-2", name: "Dr. Ashok Kumar L" }
    ],
    PI_CO_PI: "",
    currentStatus: "Completed",
    description: "A wearable navigation system designed to assist elderly people with dementia and predict potential falls.",
    fullDescription: "This project focuses on creating a specialized wearable device (WING kit) that helps elderly individuals with dementia navigate their surroundings safely. The system incorporates fall prediction technology to prevent accidents and enhance user safety.",
    technologies: ["Wearable Technology", "IoT", "Machine Learning", "Sensor Technology"],
    contributors_count: 2,
    projectDepartments: "CSE, EEE",
  },
  {
    id: "project-2",
    title: "Design and Implementation of E-Learning System using Deep Learning Based on Audio-Video Speech Recognition for Hearing Impaired in Native Language",
    duration: "3 years",
    sponsorOrganization: "DST-ICPS",
    amount: "70 lakhs",
    investigatorName: [
      { id: "inv-3", name: "Dr. Ashok Kumar L" },
      { id: "inv-4", name: "Dr. Lovelyn Rose S" },
      { id: "inv-5", name: "Dr. Kathika Renuka D" },
      { id: "inv-6", name: "Ms. Nishanthi B" }
    ],
    PI_CO_PI: "",
    currentStatus: "Ongoing",
    description: "An e-learning system using deep learning for audio-video speech recognition to assist hearing-impaired individuals in their native language.",
    fullDescription: "This project aims to develop an accessible e-learning platform that utilizes deep learning algorithms for audio-visual speech recognition. The system is specifically designed to support hearing-impaired students by providing educational content in their native language, making learning more inclusive and effective.",
    technologies: ["Deep Learning", "Speech Recognition", "Audio-Video Processing", "Accessibility Technology", "Natural Language Processing"],
    contributors_count: 4,
    projectDepartments: "EEE, CSE, IT",
  },
  {
    id: "project-3",
    title: "Development of Smart Assistive Aids to screen and assess Dyslexic children in primary school along with curriculum development in regional language",
    duration: "3 years",
    sponsorOrganization: "DST",
    amount: "50.18 lakhs",
    investigatorName: [
      { id: "inv-7", name: "Dr. Banumathi" },
      { id: "inv-8", name: "Dr. Sudha Sadasivam G" },
      { id: "inv-9", name: "Dr. Banu Rekha B" }
    ],
    PI_CO_PI: "",
    currentStatus: "Ongoing",
    description: "Smart assistive tools for screening and assessing dyslexia in primary school children, including curriculum development in regional languages.",
    fullDescription: "This project develops intelligent assistive technologies to identify and evaluate dyslexia in young students. The initiative also includes creating specialized educational curriculum in regional languages to provide better learning support for dyslexic children in their early education years.",
    technologies: ["Educational Technology", "AI", "Language Processing", "Cognitive Assessment Tools"],
    contributors_count: 3,
    projectDepartments: "CSE, BME",
  },
  {
    id: "project-4",
    title: "Design and Development of AI powered Cognitive Remediation Therapy through Gaming for Schizophrenia patients",
    duration: "3 years",
    sponsorOrganization: "DST",
    amount: "40.26 lakhs",
    investigatorName: [
      { id: "inv-10", name: "Dr. Vinoth Kumar B" },
      { id: "inv-11", name: "Dr. Karpagam G R" },
      { id: "inv-12", name: "Dr. Vidhyapriya R" },
      { id: "inv-13", name: "Dr. Umamaheswari K" },
      { id: "inv-14", name: "Dr. Pradeep Palaniappan" },
      { id: "inv-15", name: "Dr. G Raghuthaman" },
      { id: "inv-16", name: "Dr. Syed Ummar Ibrahim" },
      { id: "inv-17", name: "Dr. Anuja S Panicker" }
    ],
    PI_CO_PI: "",
    currentStatus: "Ongoing",
    description: "AI-powered gaming platform for cognitive remediation therapy designed specifically for schizophrenia patients.",
    fullDescription: "This project leverages artificial intelligence to create therapeutic games that help schizophrenia patients improve cognitive functions. The gaming approach makes therapy more engaging while providing measurable cognitive improvements and data for healthcare professionals to track patient progress.",
    technologies: ["Artificial Intelligence", "Game Development", "Cognitive Therapy", "Mental Health Technology", "Healthcare IT"],
    contributors_count: 8,
    projectDepartments: "IT, CSE, BME",
  }
];

export { projects };