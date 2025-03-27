import screenshot211846 from '../assets/EventPhotos/E1/Screenshot_20250327_211846_LinkedIn.jpg';
import screenshot211908 from '../assets/EventPhotos/E1/Screenshot_20250327_211908_LinkedIn.jpg';
import screenshot212041 from '../assets/EventPhotos/E1/Screenshot_20250327_212041_LinkedIn.jpg';
import screenshot212110 from '../assets/EventPhotos/E1/Screenshot_20250327_212110_LinkedIn.jpg';
import screenshot212145 from '../assets/EventPhotos/E1/Screenshot_20250327_212145_LinkedIn.jpg';
import screenshot212128 from "../assets/EventPhotos/E1/Screenshot_20250327_212128_LinkedIn.jpg";
export interface EventData {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
  mode?: "online" | "in-person" | "hybrid" | "offline";
  organizer?: string;
  type?: string;
  color?: string;
  allDay?: boolean;
  image?: string;
  gallery?: string[];
}

// Central event data repository
export const events: EventData[] = [
  // Past events (dark grey)
  {
    id: '1',
    title: 'AI Community Meet 2025',
    description: 'Workshop on AI-powered product innovation and AI product management.',
    start: '2025-03-01',
    end: '2025-03-01',
    location: 'PSG College of Technology, Department of CSE',
    mode: 'offline',
    organizer: 'AI Consortium, PSG College of Technology',
    type: 'Workshop',
    color: 'var(--color-gray-500)',
    allDay: true,
    image: screenshot212145,
    gallery: [
      screenshot212128,
      screenshot212145,
      screenshot212110,
      screenshot211908,
      screenshot211846,
      screenshot212041
      
    ]
  },
  {
    id: '2',
    title: 'Application of AI in Production Engineering',
    description: 'Guest lecture on AI applications in production engineering, exploring practical implementations in manufacturing, process optimization, predictive maintenance, and future industry trends.',
    start: '2025-03-25',
    end: '2025-03-25',
    location: 'New Admin Block',
    mode: 'hybrid',
    organizer: 'AI Consortium, PSG College of Technology',
    type: 'Guest Lecture',
    color: 'var(--color-gray-500)',
    allDay: true,
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1170&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=1170&auto=format&fit=crop',
     
    ]
  },
  {
    id: '3',
    title: 'AI Week 2025: Debate - "AI: A Revolutionary Blessing or a Digital Crisis?"',
    description: 'As part of AI Week 2025, this debate explores whether AI is a transformative force driving progress or a disruptive technology posing ethical and societal risks. Experts and thought leaders will discuss AI’s role in innovation, job automation, privacy, and security, offering insights into its benefits and potential pitfalls.\n\nThe event will provide participants with a deep understanding of AI’s impact, ethical challenges, and policy considerations while fostering connections among students, faculty, and industry professionals. It aligns with the AI Consortium’s mission of promoting responsible AI development and collaboration across academia and industry.',
    start: '2025-04-03T15:00:00',
    end: '2025-04-03T16:00:00',
    location: 'Virtual',
    mode: 'online',
    organizer: 'AI Consortium, PSG College of Technology',
    type: 'Debate',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1170&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1170&auto=format&fit=crop'
    ]
  }
];

// Helper function to get event by ID
export const getEventById = (id: string): EventData | undefined => {
  // Add logging to debug
  console.log("Looking for event with ID:", id);
  console.log("Available events:", events.map(e => e.id));
  
  const foundEvent = events.find(event => event.id === id);
  console.log("Found event:", foundEvent);
  
  return foundEvent;
};