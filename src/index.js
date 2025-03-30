import React from 'react';
import ReactDOM from 'react-dom/client';  // Import the new method for React 18+
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);