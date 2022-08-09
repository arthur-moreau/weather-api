import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
