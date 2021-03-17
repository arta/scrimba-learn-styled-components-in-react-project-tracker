import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import Section from './Section'

const Title = styled.h1 ``

ReactDOM.render(
  <React.StrictMode>
    <Title>Project Tracker</Title>
    <div>
      <Section progress='35%' text='M' />
      <Section progress='15%' text='T' />
      <Section progress='29%' text='W' />
      <Section progress='70%' text='T' />
      <Section progress='90%' text='F' />
      <Section progress='5%' text='S' />
      <Section progress='68%' text='S' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value

//TO DO:
// extend the WeekdayTitle component to make a WeekendTitle component
// use the WeekendTitle if the text prop is an 'S'

//TO DO:
// move Section to its own file
// make sure the WeekdayTitle is moved with it
// export Section so we can use it in our index.js file
// pass through text as a prop
