import React from 'react';
import ReactDOM from 'react-dom';

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
  const el = document.getElementById('root');
  ReactDOM.render(<div>
    Popup
  </div>, el);
});