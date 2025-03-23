import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {  createViewMonthGrid} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { useEffect, useState } from 'react'

import '@schedule-x/theme-default/dist/index.css' 
// import '@schedule-x/theme-shadcn/dist/index.css'
import './event.css'
function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2025-04-16',
        end: '2025-04-17',
        background: true, // Marks this as a background event
      style: { backgroundColor: 'rgba(255, 0, 0, 0.1)' }, // Light red background
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2025-04-16',
        end: '2025-04-17',
        background: true, // Marks this as a background event
      style: { backgroundColor: 'rgba(255, 0, 0, 0.5)' }, // Light red background
      },
    ],
    plugins: [eventsService],
    theme: 'event',
  })
 
  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])
 
  return (
    <div>
       <div className="events-container" style={{ paddingTop: "120px" }}></div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default CalendarApp