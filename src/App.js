// App.js

import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = async () => {
    const apiUrl = 'https://example.com/api/save';

    // Data to be sent to the API
    const data = { text };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      console.log('Text saved successfully');
    } catch (error) {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Clipboard by Chai</h1>
      </header>
      <main className="main">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter text..."
          className="text-field"
        />
        <button className="save-button" onClick={handleSave}>Save</button>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Stunning Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
