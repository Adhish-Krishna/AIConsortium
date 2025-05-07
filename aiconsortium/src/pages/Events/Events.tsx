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

  // Format events to ensure all dates have no time component
  const formattedEvents = events.map(event => {
    // Remove time part if present
    const startDate = event.start.split('T')[0];
    const endDate = event.end.split('T')[0];
    
    return {
      id: event.id,
      title: event.title,
      description: event.description || '',
      start: startDate,
      end: endDate,
      location: event.location || '',
      organizer: event.organizer || '',
      type: event.type || '',
      color: event.color || 'var(--color-gray-500)',
      allDay: true // Force all events to be all-day events
    };
  });

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: formattedEvents,
    plugins: [eventsService, eventModal],
    theme: 'event',
    config: {
      defaultView: 'month-grid',
      showAllDayEventsInMainView: true,
      hideTimesInEvents: true
    }
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