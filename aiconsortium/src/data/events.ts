import screenshot211846 from '/images/eventImages/Screenshot_20250327_211846_LinkedIn.jpg';
import screenshot211908 from '/images/eventImages/Screenshot_20250327_211908_LinkedIn.jpg';
import screenshot212041 from '/images/eventImages/Screenshot_20250327_212041_LinkedIn.jpg';
import screenshot212110 from '/images/eventImages/Screenshot_20250327_212110_LinkedIn.jpg';
import screenshot212145 from '/images/eventImages/Screenshot_20250327_212145_LinkedIn.jpg';
import screenshot212128 from "/images/eventImages/Screenshot_20250327_212128_LinkedIn.jpg";

//AI Week Webinar on "AI Adoption in India Opportunities and Security Challenges"
import AIWeekWebinar01 from '/images/AI WEEK _Webinar on “AI Adoption in India_ Opportunities & Security Challenges_ 15 April 2025/WhatsApp Image 2025-04-15 at 3.06.39 PM.jpeg';
import AIWeekWebinar02 from '/images/AI WEEK _Webinar on “AI Adoption in India_ Opportunities & Security Challenges_ 15 April 2025/WhatsApp Image 2025-04-15 at 3.07.19 PM.jpeg';
import AIWeekWebinar03 from '/images/AI WEEK _Webinar on “AI Adoption in India_ Opportunities & Security Challenges_ 15 April 2025/WhatsApp Image 2025-04-15 at 3.08.03 PM.jpeg';
import AIWeekWebinar04 from '/images/AI WEEK _Webinar on “AI Adoption in India_ Opportunities & Security Challenges_ 15 April 2025/WhatsApp Image 2025-04-15 at 3.14.29 PM.jpeg';

// AI Week Ai in prodcution engineering webinar
import AIWeekPEWebinar02 from '/images/AI WEEK_AI IN PRODUCTION ENGINEERING_Webinar_04 April, 2025/WhatsApp Image 2025-04-04 at 12.04.03 PM.jpeg';
import AIWeekPEWebinar03 from '/images/AI WEEK_AI IN PRODUCTION ENGINEERING_Webinar_04 April, 2025/WhatsApp Image 2025-04-04 at 12.04.04 PM.jpeg';
import AIWeekPEWebinar04 from '/images/AI WEEK_AI IN PRODUCTION ENGINEERING_Webinar_04 April, 2025/WhatsApp Image 2025-04-04 at 12.14.09 PM.jpeg';

//AI Week in Robotics and Automation
import AIWeekRA01 from '/images/AI WEEK_AI in Robotics and Automation 01 APRIL 2025/PHOTO-2025-04-01-10-27-05.jpg';
import AIWeekRA02 from '/images/AI WEEK_AI in Robotics and Automation 01 APRIL 2025/PHOTO-2025-04-01-10-27-06.jpg';

//AI week Panel discussion
import AIWeekPD01 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/13_page-0001.jpg';
import AIWeekPD02 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/23_page-0001.jpg';
import AIWeekPD03 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/WhatsApp Image 2025-04-04 at 12.42.25 PM.jpeg';
import AIWeekPD04 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/WhatsApp Image 2025-04-04 at 12.42.26 PM (1).jpeg';
import AIWeekPD05 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/IMG_8529.JPG?url';
import AIWeekPD06 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/IMG_8542.JPG?url';
import AIWeekPD07 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/IMG_8546.JPG?url';
import AIWeekPD08 from '/images/AI WEEK_Panel Discussion_ 03 April 2025/IMG_8554.JPG?url';

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
    title: 'AI Week 2025: Debate - "AI: A Revolutionary Blessing or a Digital Crisis?"',
    description: 'As part of AI Week 2025, this debate explores whether AI is a transformative force driving progress or a disruptive technology posing ethical and societal risks. Experts and thought leaders will discuss AI’s role in innovation, job automation, privacy, and security, offering insights into its benefits and potential pitfalls.\n\nThe event will provide participants with a deep understanding of AI’s impact, ethical challenges, and policy considerations while fostering connections among students, faculty, and industry professionals. It aligns with the AI Consortium’s mission of promoting responsible AI development and collaboration across academia and industry.',
    start: '2025-04-03',
    end: '2025-04-03',
    location: 'Virtual',
    mode: 'online',
    organizer: 'AI Consortium, PSG College of Technology',
    type: 'Debate',
    image: AIWeekPD01,
    gallery: [AIWeekPD01, AIWeekPD02,AIWeekPD03,AIWeekPD04,AIWeekPD05,AIWeekPD06,AIWeekPD07,AIWeekPD08
    ]
  }
  ,{
    id: '3',
    title: 'Advancements in AI: How Transformers Are Revolutionizing Industries',
    description: 'A webinar exploring practical applications of Transformer models in various industries, featuring real-world case studies and interactive discussions.',
    start: '2025-04-15T15:00:00',
    end: '2025-04-15T17:00:00',
    location: 'New Admin Block / Online',
    mode: 'hybrid',
    organizer: 'AI Consortium, PSG College of Technology',
    type: 'Webinar',
    color: 'var(--color-gray-500)',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',

    ]
  },
  {
    id: '4',
    title: 'Webinar on AI Adoption in Inida: Opportunities & Security Challenges',
    description: 'A webinar exploring on the topic AI Adoption in Inida: Opportunities & Security Challenges',
    start: '2025-04-15',
    end: '2025-04-15',
    location: 'New Admin Block',
    mode: 'hybrid',
    organizer: 'Dr.Umamaheswari K, Dr.Shymala Gowri S',
    type: 'Webinar',
    image: AIWeekWebinar02,
    gallery: [AIWeekWebinar01,AIWeekWebinar02, AIWeekWebinar03, AIWeekWebinar04]
  },
  {
    id: '5',
    title: 'AI in Production Engineering',
    description: 'A webinar exploring on the topic AI in Production Engineering',
    start: '2025-04-04',
    end: '2025-04-04',
    location: 'Seminal Hall - New Admin Block',
    mode: 'hybrid',
    organizer: 'Dr.M. Senthil Kumar, Dr.R. Rajesh ',
    type: 'Webinar',
    image: AIWeekPEWebinar02,
    gallery: [AIWeekPEWebinar03,AIWeekPEWebinar04]
  },
  {
    id: '6',
    title: 'AI in Robotics and Automation Engineering',
    description: 'A webinar exploring on the topic AI in Robotics and Automation Engineering',
    start: '2025-04-01',
    end: '2025-04-01',
    location: 'D-Block, First Floor Conference Hall',
    mode: 'hybrid',
    organizer: 'Dr.M. Suresh, Dr.D. Jayaprasanth, Dr.C. Shanmugam',
    type: 'Webinar',
    image: AIWeekRA01,
    gallery: [AIWeekRA01,AIWeekRA02]
  }
];

events.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

// Helper function to get event by ID
export const getEventById = (id: string): EventData | undefined => {
  // Add logging to debug
  console.log("Looking for event with ID:", id);
  console.log("Available events:", events.map(e => e.id));

  const foundEvent = events.find(event => event.id === id);
  console.log("Found event:", foundEvent);

  return foundEvent;
};
