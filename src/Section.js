import styled from 'styled-components'

const ProgressBar = styled.div `
  background: #B4F1B3;
  width: 50%;
`

const StyledSection = styled.section `
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

const WeekdayTitle = styled.div `
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle) `
  background: lightgrey;
  border-radius: 7px 0 0 7px;
`

const Section = ({text}) => {
  const isWeekend = text === 'S'

  return (
    <StyledSection>
      {!isWeekend && <WeekdayTitle>{text}</WeekdayTitle>}
      {isWeekend && <WeekendTitle>{text}</WeekendTitle>}
      <ProgressBar />
    </StyledSection>
  )
}

export default Section
