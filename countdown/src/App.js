import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Timer from './components/Timer';
import Login from './components/Login';
import Register from './components/Register';
import './styles.css';

function App() {
  const [user, setUser] = useState(null); // Track logged in user

  const handleLogin = () => {
    // Implement login logic here (e.g., call API, set user state)
    setUser({ email: 'example@email.com' }); // Replace with actual login logic
  };

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user state)
    setUser(null);
  };

  const handleRegister = () => {
    // Implement register logic here (e.g., call API, set user state)
    setUser({ email: 'newuser@email.com' });
  };

  return (
    <div className="App">
      <h1>Event Countdown Timer</h1>
      {!user ? (
        <>
          <Login onLogin={handleLogin} />
          <Register onRegister={handleRegister} />
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <EventForm />
          <EventList />
          {/* Example of event display */}
          <div>
            <h2>Event Name</h2>
            <Timer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
