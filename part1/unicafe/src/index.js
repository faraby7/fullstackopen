import { useState } from 'react'
import ReactDOM from 'react-dom'

export const GOODSCORE    = 1
export const NEUTRALSCORE = 0
export const BADSCORE     = -1

const Button = (props) => <button onClick={props.onClickFunction}>{props.text}</button>

const Statistic  = (props) => {
  return(
  <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {

  if (!props.feedback) {
    return (
       <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  const good    = props.good
  const neutral = props.neutral
  const bad     = props.bad
  const totalNumberStatistic = bad + neutral + good

  const averageScoreCalculator = (good, neutral, bad) => {

    const goodScore     = good * GOODSCORE
    const neutralScore  = neutral * NEUTRALSCORE
    const badScore      = bad * BADSCORE

    const totalScore    = bad + neutral + good
    if(totalScore === 0){
      return 0
    }
    return (badScore + neutralScore + goodScore) / totalScore
  }

  const positiveScoreCalculator = (good, neutral, bad) => {
    const totalScore    = bad + neutral + good
    if(totalScore === 0){
      return 0
    }
    return good*100/ totalScore
  }

  const positiveScoreStatistic = positiveScoreCalculator(good, neutral, bad)
  const averageScoreStatistic = averageScoreCalculator(good, neutral, bad)


  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={totalNumberStatistic} />
      <Statistic text="average" value={averageScoreStatistic} />
      <Statistic text="positive" value={positiveScoreStatistic + "%"} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood]         = useState(0)
  const [neutral, setNeutral]   = useState(0)
  const [bad, setBad]           = useState(0)
  const [feedback, setFeedback] = useState(false)

  const statisticsProps = {
    good: good,
    neutral: neutral,
    bad: bad,
    feedback: feedback
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClickFunction={()=> {
        setFeedback(true)
        setGood(good + 1)
      }} text="good"/>
      <Button onClickFunction={()=> {
        setFeedback(true)
        setNeutral(neutral + 1)
      } } text="neutral"/>
      <Button onClickFunction={()=> {
        setFeedback(true)
        setBad(bad + 1)
      } } text="bad"/>
      <Statistics {...statisticsProps}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
