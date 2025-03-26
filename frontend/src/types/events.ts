export interface EventData {
  id: string;
  title: string;
  description: string;
  start: string;    // Date string for calendar start
  end: string;      // Date string for calendar end
  location: string; // Location/venue
  mode?: string;    // "online" or "in-person"
  organizer: string;
  type: string;     // Event type (Workshop, Conference, etc.)
  image?: string;   // Main image URL
  gallery?: string[]; // Additional images
  color?: string;   // Color for calendar display
  allDay?: boolean; // Whether the event is an all-day event
}