// Common event data structure for the entire application
export interface EventData {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
  mode?: "online" | "in-person";
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
    title: 'AI Ethics Workshop',
    description: 'Previous workshop on ethical AI frameworks.',
    start: '2025-03-05',
    end: '2025-03-06',
    location: 'Virtual Meeting Room A',
    mode: 'online',
    organizer: 'Ethics Committee',
    type: 'Workshop',
    color: 'var(--color-gray-800)',
    image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1588&q=80'
    ]
  },
  {
    id: '2',
    title: 'Neural Network Basics',
    description: 'Introduction to neural network architecture.',
    start: '2025-03-10',
    end: '2025-03-10',
    location: 'Conference Hall B',
    mode: 'in-person',
    organizer: 'Research Division',
    type: 'Training',
    color: 'var(--color-gray-800)',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '3',
    title: 'AI Governance Meeting',
    description: 'Quarterly review of AI governance policies.',
    start: '2025-03-15',
    end: '2025-03-15',
    location: 'Board Room',
    mode: 'in-person',
    organizer: 'Executive Committee',
    type: 'Meeting',
    color: 'var(--color-gray-800)',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  // Future events (gold)
  {
    id: '4',
    title: 'Advanced AI Ethics Workshop',
    description: 'Discussion on ethical considerations in AI development.',
    start: '2025-04-16',
    end: '2025-04-17',
    location: 'Virtual Meeting Room A',
    mode: 'online',
    organizer: 'Ethics Committee',
    type: 'Workshop',
    color: 'var(--color-gray-500)',
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '5',
    title: 'Neural-Symposium',
    description: 'Presentations on recent advances in neural networks.',
    start: '2025-04-20',
    end: '2025-04-21',
    location: 'Conference Hall B',
    mode: 'in-person',
    organizer: 'Research Division',
    type: 'Conference',
    color: 'var(--color-gray-500)',
    image: 'https://images.unsplash.com/photo-1561883088-039e53fd2a9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561883088-039e53fd2a9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
    ]
  },
  {
    id: '6',
    title: 'AI Startup Networking',
    description: 'Connect with AI startups and investors.',
    start: '2025-04-25',
    end: '2025-04-25',
    location: 'Innovation Hub',
    mode: 'in-person',
    organizer: 'Business Development',
    type: 'Networking',
    color: 'var(--color-gray-500)',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '7',
    title: 'Machine Learning Hackathon',
    description: 'Collaborative coding event for ML enthusiasts.',
    start: '2025-05-10',
    end: '2025-05-12',
    location: 'Tech Campus',
    mode: 'in-person',
    organizer: 'Developer Relations',
    type: 'Hackathon',
    color: 'var(--color-gray-500)',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  }
];

// Helper function to get event by ID
export const getEventById = (id: string): EventData | undefined => {
  return events.find(event => event.id === id);
};