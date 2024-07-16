import React from 'react';

/**
 * Component for displaying a list of events.
 * @param {Object[]} events - List of events to display.
 * @param {Function} deleteEvent - Callback function to delete an event.
 */
const EventList = ({ events, deleteEvent }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.name}</h3>
          <p>Starts on: {event.datetime.toLocaleString()}</p>
          <button onClick={() => deleteEvent(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
