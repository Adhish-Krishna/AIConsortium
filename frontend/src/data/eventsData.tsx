export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: {
      type: 'Online' | 'Offline';
      details: string;
    };
    description: string;
    guestSpeakers: string[];
    isRegistrationOpen: boolean;
    status: 'Open' | 'Closed';
  }

  export const sampleEvents: Event[] = [
    {
      id: 1,
      title: "AI Ethics in Healthcare Symposium",
      date: "2025-03-15",
      time: "10:00 - 16:00",
      location: {
        type: "Online",
        details: "Zoom Webinar"
      },
      description: "Description of the event",
      guestSpeakers: ["Dr. name", "Dr. name"],
      isRegistrationOpen: true,
      status: "Open"
    }
  ];