import React from 'react';
import ReactDOM from 'react-dom/client'; // importujemy z 'react-dom/client'
import App from './App';
import './index.css';

// Tworzymy root i renderujemy naszą aplikację w elemencie z id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
