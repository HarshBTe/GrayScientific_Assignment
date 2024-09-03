
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Sidebar from '../SideBar/Sidebar';
import { Link } from 'react-router-dom';
import './index.css'

const localizer = momentLocalizer(moment)

const Calender = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const toggleOffcanvas = () => {
      setShowOffcanvas(!showOffcanvas);
    };
  
    const handleAddEvent = (newEvent) => {
      setEvents([...events, newEvent]);
      setShowOffcanvas(false);
    };
  
    const handleEditEvent = (updatedEvent) => {
      setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
      setShowOffcanvas(false);
    };
  
    const handleDeleteEvent = (id) => {
      setEvents(events.filter(event => event.id !== id));
      setShowOffcanvas(false);
    };
  
    const handleSelectEvent = (event) => {
      setSelectedEvent(event);
      setShowOffcanvas(true);
    };
  

    return (
       

<div className='calender-container'>
      <div className='btn-container'>
        <button className="btn-event" onClick={() => { setSelectedEvent(null); toggleOffcanvas(); }}>
          Add Event
        </button>
        <Link to='/event'>Events</Link>
      </div>
      <Sidebar
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        onAddEvent={handleAddEvent}
        onEditEvent={handleEditEvent}
        onDeleteEvent={handleDeleteEvent}
        selectedEvent={selectedEvent}
      />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
        onSelectEvent={handleSelectEvent}
      />

       </div>
    )
}

export default Calender