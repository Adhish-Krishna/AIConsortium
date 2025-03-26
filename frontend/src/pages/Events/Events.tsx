import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import { createViewMonthGrid } from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { useEffect, useState } from 'react';

import '@schedule-x/theme-default/dist/index.css';
import './event.css';
import CustomEventModal from './EventModal';
import { events } from '../../data/events';

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventModal = useState(() => createEventModalPlugin())[0];


  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: events.map(event => ({
      id: event.id,
      title: event.title,
      description: event.description || '',
      start: event.start,
      end: event.end,
      location: event.location || '',
      organizer: event.organizer || '',
      type: event.type || '',
      color: event.color || 'var(--color-gray-500)'
    })),
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