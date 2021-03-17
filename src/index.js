import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>Project Tracker</h1>
    <div>
      <div className="section">
        <div className="weekday-title">M</div>
      </div>
      <div className="section">
        <div className="weekday-title">T</div>
      </div>
      <div className="section">
        <div className="weekday-title">W</div>
      </div>
      <div className="section">
        <div className="weekday-title">T</div>
      </div>
      <div className="section">
        <div className="weekday-title">F</div>
      </div>
      <div className="section">
        <div className="weekday-title">S</div>
      </div>
      <div className="section">
        <div className="weekday-title">S</div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
