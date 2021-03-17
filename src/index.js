import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

const Section = styled.section `
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const Title = styled.h1 ``

const WeekdayTitle = styled.div `
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

ReactDOM.render(
  <React.StrictMode>
    <Title>Project Tracker</Title>
    <div>
      <Section>
        <WeekdayTitle>M</WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle>T</WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle>W</WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle>T</WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle>F</WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle>S</WeekdayTitle>
      </Section>
      <Section>
        <WeekdayTitle>S</WeekdayTitle>
      </Section>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
