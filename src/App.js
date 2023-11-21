// Importing the React library to enable JSX and component functionality
import React from 'react';

// Importing the CSS file for styling the App component
import './App.css';

// Importing the WellnessPlan component from the WellnessPlan.js file
// This makes the WellnessPlan component available to be used in this App component
import WellnessPlan from './WellnessPlan';

// Defining the App functional component
// This is the main component that gets rendered to the DOM
function App() {
  // The JSX returned by our App component that describes the UI
  return (
    <div className="App"> {/* A div with a class 'App', acting as a container for the entire application */}
      <header className="App-header"> {/* Header section of the app */}
        <h1>Mindfulness and Wellness App</h1> {/* Main heading/title of the app */}
      </header>
      <WellnessPlan /> {/* Including the WellnessPlan component within our App */}
      {/* The WellnessPlan component will be rendered here. It includes the form for creating a wellness plan. */}
    </div>
  );
}

export default App; // Exporting the App component for use in index.js

