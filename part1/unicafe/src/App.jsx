
import { useState } from 'react'

const Button = ({onClick, value}) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const calculateAverage = () => {
    const average = (good - bad) / (good + bad + neutral)
    return (isNaN(average) ? 0 : average)
  }

  const calculatePositive = () => {
    const total = good + bad + neutral
    const positive = ((good / total) * 100)
    return (!isNaN(positive) ? positive : 0) + '%'
  }

  if (good + neutral + bad) {
    return (
      <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={good + bad + neutral} />
        <StatisticLine text={'average'} value={calculateAverage()} />
        <StatisticLine text={'positive'} value={calculatePositive()} />
        </tbody>
      </table>
    </div>
    )
  }
  return (
    <p>No feedback given</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} value={'good'} />
      <Button onClick={handleNeutral} value={'neutral'} />
      <Button onClick={handleBad} value={'bad'} />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
