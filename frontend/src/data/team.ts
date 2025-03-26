import Karpagam from '../assets/Images/Karpagam.png';
import Prakasan from '../assets/Images/Prakasan.png';
import Indumathi from '../assets/Images/Indumathi.png';
import SathiyaPriya from '../assets/Images/Sathiyapriya.png';
import NirmalaVarghese from '../assets/Images/Nirmala.png';
import Subramanian from '../assets/Images/Subramaniam.png';
import Niresh from '../assets/Images/NIresh.png';
import Brindha from '../assets/Images/Brindha.png';
import Karthick from '../assets/Images/Karthik Vijayakumar.png';
import PraveenKumar from '../assets/Images/Praveen.png';
import Bhama from '../assets/Images/Bhama.png';
import Sivaraj from '../assets/Images/Sivaraj.png';
import Natarajan from '../assets/Images/Natarajan.png';
import Surjit from '../assets/Images/Surjit.png';
import Jayaprasanth from '../assets/Images/Jayaprasanth.png';
import SenthilPrabha from '../assets/Images/Senthilprabha.png';
import Shanmugam from '../assets/Images/Shanmugam.png';
import Thiilairajan from '../assets/Images/Thillairajan.png';
import Rajesh from '../assets/Images/Rajesh.png';
import Suresh from '../assets/Images/Suresh.png';
import Murugan from '../assets/Images/Murugan.png';
import Sridevi from '../assets/Images/Sridevi.png';
import Kathirvel from '../assets/Images/Kathirvel.png';
import Maruthamani from '../assets/Images/Maruthamani.png';
import Dhanalakshmi from '../assets/Images/Dhanalakshmi.png';
import SaiSundaraKrishnan from '../assets/Images/Sai SUndar.png';
import Prabhavathi from '../assets/Images/Prabavathi.png';
import Kalpana from '../assets/Images/Kalpana.png';
import Prakash from '../assets/Images/Prakash.jpg' //need to ask
import Vinothkumar from '../assets/Images/Vinoth Kumar.png';
import JPrakash from '../assets/Images/Prakash.jpg';
import Anisha from '../assets/Images/ANisha.png';
import Abirami from '../assets/Images/Abirami.png';
import Ramesh from '../assets/Images/Ramesh.png';
import ArulJothi from '../assets/Images/Aruljothi.png';
import Sivaranjini from '../assets/Images/Sivaranjani.png';
import Dharani from '../assets/Images/Dhanalakshmi.png' //need to ask (no image)
import Thirumahal from '../assets/Images/Thirumahal.png';
import Sangeetha from '../assets/Images/Sangeetha.png';
import GopikaRani from '../assets/Images/Gopikarani.png';
import Rekha from '../assets/Images/Rekha.png';
import Vijayalakshmi from '../assets/Images/Vijiyalakashmi.png';
import Veerakumar from '../assets/Images/Veerakumar.jpg';

export interface Team{
    name: string,
    designation: string,
    role: string,
    image: string,
    shortDetails: string,
    fullDetails: string,
    achievements: string[],
    contact: {
        email: string,
        linkedin: string | null
    },
    department?: string // Add optional department field
}

export const teamDetails : Team[] = [
  {
    name: "Dr.K.Prakasan",
    designation: "Patron",
    role: "Patron",
    image: Prakasan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Principal, PSGCT",
  },
  {
    name: "Dr.G.R Karpagam",
    designation: "Director",
    role: "Director",
    image: Karpagam,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr. D.Indumathi",
    designation: "Program Manager",
    role: "Program Managers",
    image: Indumathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr. K.Sathyapriya",
    designation: "Program Manager",
    role: "Program Managers",
    image: SathiyaPriya,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr. Nirmala Varghese",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: NirmalaVarghese,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Apparel & Fashion Design",
  },
  {
    name: "Mr. Subramanian S S",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Subramanian,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
      email: "",
      linkedin: null,
    },
    department: "Applied Science",
  },
  {
    name: "Dr. J. Niresh",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Niresh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Automobile",
  },
  {
    name: "Dr. D Brindha",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Brindha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Biomedical Engineering",
  },
  {
    name: "Mr. G. Karthik Vijayakumar",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Karthick,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Biotechnology",
  },
  {
    name: "Dr S Praveenkumar",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: PraveenKumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Civil Engineering",
  },
  {
    name: "Dr. S. Bhama",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Bhama,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Computer Application",
  },
  {
    name: "Dr.D.Sivaraj",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Sivaraj,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "ECE",
  },
  {
    name: "Dr. A. Natarajan",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Natarajan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "EEE",
  },
  {
    name: "Dr. R. Surjit",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Surjit,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Fashion Technology",
  },
  {
    name: "Dr. D. Jayaprasanth",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Jayaprasanth,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "ICE",
  },
  {
    name: "Dr. R. Senthil Prabha",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: SenthilPrabha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Information Technology",
  },
  {
    name: "Dr. C. Shanmugam",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Shanmugam,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Mechanical Engineering",
  },
  {
    name: "Dr. K Thillairajan",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Thiilairajan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Metallurgical Engineering",
  },
  {
    name: "Mr. R. Rajesh",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Rajesh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Production Engineering",
  },
  {
    name: "Dr. M.Suresh",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Suresh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "RAE",
  },
  {
    name: "Dr. R. Murugan",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Murugan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Textile Technology",
  },
  {
    name: "Dr B Sridevi",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Sridevi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Mathematics",
  },
  {
    name: "Dr. P. Kathirvel",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Kathirvel,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Physics",
  },
  {
    name: "Dr D Maruthamani",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Maruthamani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Chemistry",
  },
  {
    name: "Dr D.Dhanalakshmi",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Dhanalakshmi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Applied science",
  },
  {
    name: "Dr G Sai Sundara Krishnan",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: SaiSundaraKrishnan,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "AMCS",
  },
  {
    name: "Dr J Prabhavathi",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Prabhavathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "English",
  },
  {
    name: "Dr.M.Kalpana",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Kalpana,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Humanities",
  },
  {
    name: "Mr.Prakash",
    designation: "Domain Specific Academic Advisors and Innovation Mentors",
    role: "Domain Specific Academic Advisors and Innovation Mentors",
    image: Prakash,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "Library",
  },
  {
    name: "Dr.B.Vinothkumar",
    designation: "IT Infrastructure and Networking Technical Lead",
    role: "IT Infrastructure and Networking Technical Lead",
    image: Vinothkumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
  },
  {
    name: "Mr.J.Prakash",
    designation: "Community Outreach and Operations Managers",
    role: "Community Outreach and Operations Managers",
    image: JPrakash,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Ms.C D Anisha",
    designation: "Community Outreach and Operations Managers",
    role: "Community Outreach and Operations Managers",
    image: Anisha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Ms.S.K Abirami",
    designation: "Community Outreach and Operations Managers",
    role: "Community Outreach and Operations Managers",
    image: Abirami,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Mr.A C Ramesh",
    designation: "AI Product Development (Technical Leads)",
    role: "AI Product Development (Technical Leads)",
    image: Ramesh,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr.S.Arul Jothi",
    designation: "AI Product Development (Technical Leads)",
    role: "AI Product Development (Technical Leads)",
    image: ArulJothi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr.S.Sivaranjini",
    designation: "AI Product Development (Technical Leads)",
    role: "AI Product Development (Technical Leads)",
    image: Sivaranjini,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Ms.Dharani",
    designation: "AI Product Development (Technical Leads)",
    role: "AI Product Development (Technical Leads)",
    image: Dharani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Ms.R.Thirumahal",
    designation: "Curriculum Design",
    role: "Curriculum Design",
    image: Thirumahal,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr B.Sangeetha",
    designation: "Curriculum Design",
    role: "Curriculum Design",
    image: Sangeetha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
  },
  {
    name: "Dr.N G Gopikarani",
    designation: "Student Ambassadors Management",
    role: "Student Ambassadors Management",
    image: GopikaRani,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr.R.Rekha",
    designation: "Student Ambassadors Management",
    role: "Student Ambassadors Management",
    image: Rekha,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "IT",
  },
  {
    name: "Dr. D.Indumathi",
    designation: "AI Alumni Council",
    role: "AI Alumni Council",
    image: Indumathi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Dr.S.Vijayalakshmi",
    designation: "AI Alumni Council",
    role: "AI Alumni Council",
    image: Vijayalakshmi,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  },
  {
    name: "Mr.Veerakumar",
    designation: "AI Alumni Council",
    role: "AI Alumni Council",
    image: Veerakumar,
    shortDetails: "",
    fullDetails: "",
    achievements: [],
    contact: {
        email: "",
        linkedin: null,
    },
    department: "CSE",
  }
];
