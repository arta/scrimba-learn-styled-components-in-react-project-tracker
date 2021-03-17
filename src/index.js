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
      <Section text='M' />
      <Section text='T' />
      <Section text='W' />
      <Section text='T' />
      <Section text='F' />
      <Section text='S' />
      <Section text='S' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//TO DO:
// move Section to its own file
// make sure the WeekdayTitle is moved with it
// export Section so we can use it in our index.js file
// pass through text as a prop
