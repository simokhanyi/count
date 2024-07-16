import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Timer from './components/Timer';
import './styles.css';

/**
 * Main application component.
 * Manages state for events and provides methods for adding and deleting events.
 */
function App() {
  const [events, setEvents] = useState([]);

  /**
   * Adds a new event to the events array.
   * @param {Object} event - New event object containing name and datetime.
   */
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  /**
   * Deletes an event from the events array.
   * @param {number} index - Index of the event to delete.
   */
  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div className="App">
      <h1>Event Countdown Timer</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
      {events.map((event, index) => (
        <div key={index}>
          <h2>{event.name}</h2>
          <Timer event={event} />
        </div>
      ))}
    </div>
  );
}

export default App;
