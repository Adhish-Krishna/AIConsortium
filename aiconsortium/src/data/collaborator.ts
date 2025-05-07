export interface Alumni{
    name: string,
    designation: string,
    image: string,
    shortDetails: string,
    fullDetails: string,
    contact: {
        email: string,
        linkedin: string
    }
}

export const alumniDetails: Alumni[] = [
    {
        name: "Dr. Sarah Johnson",
        designation: "Machine Learning Engineer at Google",
        image: "/images/alumni/sarah_johnson.jpg",
        shortDetails: "PhD in Computer Science with focus on Natural Language Processing.",
        fullDetails: "Dr. Sarah Johnson graduated with a PhD in Computer Science specializing in NLP. She has contributed to several open-source AI projects and has published numerous papers on transformer models.",
        contact: {
            email: "sarah.johnson@example.com",
            linkedin: "linkedin.com/in/sarahjohnson-ai"
        }
    },
    {
        name: "Michael Chen",
        designation: "AI Research Scientist at DeepMind",
        image: "/images/alumni/michael_chen.jpg",
        shortDetails: "Specialized in reinforcement learning and game theory applications.",
        fullDetails: "Michael's work focuses on developing novel reinforcement learning algorithms. He has contributed to AI systems that have mastered complex games and led projects on multi-agent reinforcement learning.",
        contact: {
            email: "michael.chen@example.com",
            linkedin: "linkedin.com/in/michaelchen-ai"
        }
    },
    {
        name: "Aisha Patel",
        designation: "Data Science Director at Microsoft",
        image: "/images/alumni/aisha_patel.jpg",
        shortDetails: "Expert in big data analytics and predictive modeling.",
        fullDetails: "Aisha has over 10 years of experience in data science leadership, building teams and implementing AI solutions at scale. She's passionate about ethical AI and inclusive design practices.",
        contact: {
            email: "aisha.patel@example.com",
            linkedin: "linkedin.com/in/aishapatel"
        }
    },
    {
        name: "James Wilson",
        designation: "Founder, AI Ethics Institute",
        image: "/images/alumni/james_wilson.jpg",
        shortDetails: "Specializes in AI governance and ethical frameworks.",
        fullDetails: "After graduating, James founded the AI Ethics Institute to bridge the gap between technical innovation and societal impact. He advises governments and corporations on responsible AI deployment.",
        contact: {
            email: "james.wilson@example.com",
            linkedin: "linkedin.com/in/jameswilson-aiethics"
        }
    },
    {
        name: "Elena Rodriguez",
        designation: "Computer Vision Scientist at NVIDIA",
        image: "/images/alumni/elena_rodriguez.jpg",
        shortDetails: "Pioneer in image recognition systems and autonomous vehicles.",
        fullDetails: "Elena's work on computer vision algorithms has been instrumental in advancing autonomous driving technology. She holds several patents and has contributed to open-source computer vision libraries.",
        contact: {
            email: "elena.rodriguez@example.com",
            linkedin: "linkedin.com/in/elenarodriguez"
        }
    },
    {
        name: "David Kim",
        designation: "Chief AI Officer at Healthcare Innovations",
        image: "/images/alumni/david_kim.jpg",
        shortDetails: "Applying AI to medical diagnostics and healthcare solutions.",
        fullDetails: "David leads AI strategy at Healthcare Innovations, where his team develops diagnostic tools using deep learning to identify patterns in medical imaging. His work has helped improve early detection rates for several conditions.",
        contact: {
            email: "david.kim@example.com",
            linkedin: "linkedin.com/in/davidkim-ai"
        }
    },
    {
        name: "Olivia Barnes",
        designation: "NLP Team Lead at Amazon",
        image: "/images/alumni/olivia_barnes.jpg",
        shortDetails: "Expert in conversational AI and language models.",
        fullDetails: "Olivia leads the team responsible for improving Alexa's natural language understanding capabilities. Her research interests include multilingual models and context-aware conversational agents.",
        contact: {
            email: "olivia.barnes@example.com",
            linkedin: "linkedin.com/in/oliviabarnes"
        }
    },
    {
        name: "Raj Sharma",
        designation: "AI Infrastructure Architect at Netflix",
        image: "/images/alumni/raj_sharma.jpg",
        shortDetails: "Specializes in scalable AI systems and recommendation engines.",
        fullDetails: "Raj designs the infrastructure that powers Netflix's recommendation systems. He's an advocate for efficient AI model deployment and has contributed to several open-source tools for model optimization.",
        contact: {
            email: "raj.sharma@example.com",
            linkedin: "linkedin.com/in/rajsharma-ai"
        }
    },
    {
        name: "Maya Thompson",
        designation: "Robotics Engineer at Boston Dynamics",
        image: "/images/alumni/maya_thompson.jpg",
        shortDetails: "Focuses on robot learning and human-robot interaction.",
        fullDetails: "Maya works on teaching robots to perform complex tasks through reinforcement learning and imitation learning. Her research aims to make robots more adaptable to unstructured environments.",
        contact: {
            email: "maya.thompson@example.com",
            linkedin: "linkedin.com/in/mayathompson"
        }
    },
    {
        name: "Carlos Mendez",
        designation: "AI Security Researcher at IBM",
        image: "/images/alumni/carlos_mendez.jpg",
        shortDetails: "Expert in adversarial attacks and AI system vulnerabilities.",
        fullDetails: "Carlos identifies and addresses security vulnerabilities in AI systems. His work helps organizations deploy more robust models that can withstand adversarial attacks and protect user privacy.",
        contact: {
            email: "carlos.mendez@example.com",
            linkedin: "linkedin.com/in/carlosmendez-security"
        }
    },
    {
        name: "Priya Sharma",
        designation: "AI Product Manager at Meta",
        image: "/images/alumni/priya_sharma.jpg",
        shortDetails: "Bridges technical AI capabilities with user-centered product design.",
        fullDetails: "Priya translates complex AI capabilities into valuable product features. She has led the development of several AI-powered features across Meta's family of apps, focusing on both utility and ethical considerations.",
        contact: {
            email: "priya.sharma@example.com",
            linkedin: "linkedin.com/in/priyasharma-ai"
        }
    },
    {
        name: "Thomas Anderson",
        designation: "Quantum Machine Learning Researcher",
        image: "/images/alumni/thomas_anderson.jpg",
        shortDetails: "Working at the intersection of quantum computing and machine learning.",
        fullDetails: "Thomas explores how quantum computing can accelerate machine learning algorithms. His research involves developing quantum versions of classical machine learning algorithms and identifying use cases where quantum advantage can be achieved.",
        contact: {
            email: "thomas.anderson@example.com",
            linkedin: "linkedin.com/in/thomasanderson-quantum"
        }
    }
]

export interface Industry{
    logo: string,
    name: string,
    description: string
}

export const inductryDetails: Industry[] = [
    {
        logo: "/images/industry/techvision.png",
        name: "TechVision AI",
        description: "Collaborating on research for explainable AI systems and providing internship opportunities for our students."
    },
    {
        logo: "/images/industry/neuraldynamics.png",
        name: "Neural Dynamics",
        description: "Funding our research on neural networks and supporting the annual AI Ethics Symposium."
    },
    {
        logo: "/images/industry/globalai.png",
        name: "Global AI Initiative",
        description: "Working with us on AI education programs for underrepresented communities and sharing resources."
    },
    {
        logo: "/images/industry/quantumtech.png",
        name: "Quantum Tech Labs",
        description: "Partnering on quantum computing applications in machine learning and offering research grants."
    },
    {
        logo: "/images/industry/datascience.png",
        name: "DataScience Innovations",
        description: "Supporting our hackathons and providing cloud computing resources for student projects."
    },
    
]