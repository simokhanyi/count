import React, { useState } from 'react';

/**
 * Component for adding new events.
 * @param {Function} addEvent - Callback function to add a new event to the list.
 */
const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');

  /**
   * Handles form submission to add a new event.
   * Prevents default form submission behavior.
   * Validates input fields and calls addEvent callback with new event data.
   * @param {Event} e - Form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDateTime) {
      addEvent({ name: eventName, datetime: new Date(eventDateTime) });
      setEventName('');
      setEventDateTime('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={eventDateTime}
        onChange={(e) => setEventDateTime(e.target.value)}
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
