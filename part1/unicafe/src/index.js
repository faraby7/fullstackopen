import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export const GOODSCORE    = 1
export const NEUTRALSCORE = 0
export const BADSCORE     = -1

const Statisctics = (props) => {
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

  return(
    <>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalNumberStatistic}</p>
      <p>average {averageScoreStatistic}</p>
      <p>positive {positiveScoreStatistic} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={()=> setGood(good + 1)}>good</button>
      <button onClick={()=> setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=> setBad(bad + 1)}>bad</button>
      <Statisctics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
