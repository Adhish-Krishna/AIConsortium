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
      {
        id: '1',
        title: 'AI Ethics Workshop',
        description: 'Discussion on ethical considerations in AI development.',
        start: '2025-04-16',
        end: '2025-04-17',
        location: 'Virtual Meeting Room A',
        organizer: 'Ethics Committee',
        type: 'Workshop'
      },
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