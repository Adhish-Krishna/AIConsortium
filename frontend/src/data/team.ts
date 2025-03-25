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
      name: "Dr. John Doe",
      designation: "Principal",
      role: "Principal",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "Executive Leadership with 15+ years of experience in AI research.",
      fullDetails: "Dr. John Doe is a renowned AI researcher with extensive experience in leading educational institutions. Under his leadership, the AI Consortium has achieved significant milestones in AI education and research.",
      achievements: [
        "Published 50+ research papers in top-tier AI conferences",
        "Awarded the Distinguished Leadership Award 2022",
        "Led the development of breakthrough AI technologies"
      ],
      contact: {
        email: "john.doe@psg.edu",
        linkedin: "https://linkedin.com/in/johndoe"
      },
      department: "Computer Science"
    },
    {
      name: "Jane Smith",
      designation: "Director",
      role: "Director",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "AI Consortium director with expertise in AI strategic planning.",
      fullDetails: "Jane Smith has been instrumental in shaping the vision and strategic direction of the PSG AI Consortium. Her innovative approach has established the consortium as a leader in AI education.",
      achievements: [
        "Implemented AI curriculum across departments",
        "Established partnerships with 20+ industry leaders",
        "Organized International AI Summit 2023"
      ],
      contact: {
        email: "jane.smith@psg.edu",
        linkedin: ""
      },
      department: "Information Technology"
    },
    {
      name: "Robert Johnson",
      designation: "Program Manager",
      role: "Program Manager",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "Leads AI awareness and outreach programs.",
      fullDetails: "Robert is responsible for creating and managing outreach programs that promote AI literacy and awareness. His initiatives have reached thousands of students and professionals.",
      achievements: [
        "Created the 'AI for Everyone' workshop series",
        "Led community outreach programs impacting 5000+ students"
      ],
      contact: {
        email: "robert.johnson@psg.edu",
        linkedin: "https://linkedin.com/in/robertjohnson"
      },
      department: "Outreach"
    },
    {
      name: "Priya Sharma",
      designation: "Student Ambassador",
      role: "Student Ambassador",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "Passionate AI student promoting technology adoption among peers.",
      fullDetails: "Priya leads student engagement initiatives and helps bridge the gap between academic AI research and practical student applications. She organizes workshops and mentors junior students in AI projects.",
      achievements: [
        "Organized 12 student-led AI workshops",
        "Recipient of 'Outstanding Student Leader Award 2023'",
        "Built a student community of 200+ AI enthusiasts"
      ],
      contact: {
        email: "priya.sharma@psg.edu",
        linkedin: "https://linkedin.com/in/priyasharma"
      },
      department: "Student Affairs"
    },
    {
      name: "Alex Chen",
      designation: "Lead Developer",
      role: "Developer",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "Full-stack developer specializing in AI-powered applications.",
      fullDetails: "Alex leads the development of AI tools and platforms used by students and faculty. His work focuses on creating accessible interfaces for complex AI models and integrating AI capabilities into educational platforms.",
      achievements: [
        "Developed the consortium's AI project showcase platform",
        "Led a team of 5 developers in creating an AI learning management system",
        "Contributed to 3 open-source AI education tools"
      ],
      contact: {
        email: "alex.chen@psg.edu",
        linkedin: "https://linkedin.com/in/alexchen"
      },
      department: "Development"
    },
    {
      name: "Dr. Sarah Williams",
      designation: "Research Lead",
      role: "Researcher",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "AI ethics researcher with focus on responsible AI development.",
      fullDetails: "Dr. Williams heads the ethical AI research division, ensuring that all AI development within the consortium adheres to ethical guidelines. Her work has been crucial in establishing responsible AI practices in educational contexts.",
      achievements: [
        "Published groundbreaking paper on 'AI Ethics in Education'",
        "Secured $1.2M in research grants for ethical AI projects",
        "Developed curriculum for 'Responsible AI' course implemented across departments"
      ],
      contact: {
        email: "sarah.williams@psg.edu",
        linkedin: "https://linkedin.com/in/sarahwilliams"
      },
      department: "Research"
    },
    {
      name: "Michael Rodriguez",
      designation: "Technical Advisor",
      role: "Advisor",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "Industry veteran bringing practical AI implementation experience.",
      fullDetails: "With 12 years of experience at leading tech companies, Michael provides valuable industry perspective to the consortium. He advises on curriculum development to ensure it meets current industry needs and trends.",
      achievements: [
        "Former AI Technical Lead at Google",
        "Mentored 30+ students who now work at top tech companies",
        "Facilitated 8 industry-academic collaborative projects"
      ],
      contact: {
        email: "michael.rodriguez@psg.edu",
        linkedin: "https://linkedin.com/in/michaelrodriguez"
      },
      department: "Advisory"
    },
    {
      name: "Aisha Patel",
      designation: "Community Manager",
      role: "Outreach",
      image: "https://via.placeholder.com/300x400",
      shortDetails: "Builds bridges between the AI community and industry partners.",
      fullDetails: "Aisha manages external relationships and coordinates industry partnerships for internships and collaborative projects. Her work ensures students gain real-world experience while studying AI technologies.",
      achievements: [
        "Established partnerships with 15 local tech companies",
        "Created the annual 'AI Industry Connect' fair",
        "Secured 50+ internship positions for students annually"
      ],
      contact: {
        email: "aisha.patel@psg.edu",
        linkedin: "https://linkedin.com/in/aishapatel"
      },
      department: "Community Relations"
    }
];
