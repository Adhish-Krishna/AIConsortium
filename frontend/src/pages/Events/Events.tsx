import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import { createViewMonthGrid } from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { useEffect, useState } from 'react';

import '@schedule-x/theme-default/dist/index.css';
import './event.css';
import CustomEventModal from './EventModal';

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventModal = useState(() => createEventModalPlugin())[0];

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: [
      // Past events (dark grey)
      {
        id: '1',
        title: 'AI Ethics Workshop',
        description: 'Previous workshop on ethical AI frameworks.',
        start: '2025-03-05',
        end: '2025-03-06',
        location: 'Virtual Meeting Room A',
        organizer: 'Ethics Committee',
        type: 'Workshop',
        color: 'var(--color-gray-800)'
      },
      {
        id: '2',
        title: 'Neural Network Basics',
        description: 'Introduction to neural network architecture.',
        start: '2025-03-10',
        end: '2025-03-10',
        location: 'Conference Hall B',
        organizer: 'Research Division',
        type: 'Training',
        color: 'var(--color-gray-800)'
      },
      {
        id: '3',
        title: 'AI Governance Meeting',
        description: 'Quarterly review of AI governance policies.',
        start: '2025-03-15',
        end: '2025-03-15',
        location: 'Board Room',
        organizer: 'Executive Committee',
        type: 'Meeting',
        color: 'var(--color-gray-800)'
      },
      // Future events (gold)
      {
        id: '4',
        title: 'Advanced AI Ethics Workshop',
        description: 'Discussion on ethical considerations in AI development.',
        start: '2025-04-16',
        end: '2025-04-17',
        location: 'Virtual Meeting Room A',
        organizer: 'Ethics Committee',
        type: 'Workshop',
        color: 'var(--color-gray-500)'
      },
      {
        id: '5',
        title: 'Neural Network Symposium',
        description: 'Presentations on recent advances in neural networks.',
        start: '2025-04-20',
        end: '2025-04-21',
        location: 'Conference Hall B',
        organizer: 'Research Division',
        type: 'Conference',
        color: 'var(--color-gray-500)'
      },
      {
        id: '6',
        title: 'AI Startup Networking',
        description: 'Connect with AI startups and investors.',
        start: '2025-04-25',
        end: '2025-04-25',
        location: 'Innovation Hub',
        organizer: 'Business Development',
        type: 'Networking',
        color: 'var(--color-gray-500)'
      },
      {
        id: '7',
        title: 'Machine Learning Hackathon',
        description: 'Collaborative coding event for ML enthusiasts.',
        start: '2025-05-10',
        end: '2025-05-12',
        location: 'Tech Campus',
        organizer: 'Developer Relations',
        type: 'Hackathon',
        color: 'var(--color-gray-500)'
      }
    ],
    plugins: [eventsService, eventModal],
    theme: 'event',
  });

  useEffect(() => {
    eventsService.getAll();
  }, [eventsService]);

  return (
    <div className="calendar-page">
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <ScheduleXCalendar 
            calendarApp={calendar} 
            customComponents={{
              eventModal: CustomEventModal
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;