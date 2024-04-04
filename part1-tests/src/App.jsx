import { useState } from "react"

const Click = ({onClick, value}) => <button onClick={onClick}> {value} </button>

const History = (props) => {
  console.log("this is a test",props)
  if (props.allClicks.length == 0)
  {
    return (
      <><p>The application is used by clicking the buttons.</p></>
    )
  }
  else {
    return (
      <><p>Here is the history of the clicks: <strong>{props.allClicks.join(" ")}</strong></p></>
    )
  }

}

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}
// const App = () => {
  
//   const [clicks, setClicks] = useState({left: 0, right: 0})
//   const [allClicks, setAllClicks] = useState([])
//   const [total, setTotal] = useState(0)
//   return (<div><p>
//     {clicks.left} 
//     <Click onClick={() => { 
//                          console.log("Left clicked")
//                          const updatedLeft = clicks.left + 1
//                          setClicks({...clicks, left: updatedLeft})
//                          setAllClicks(allClicks.concat('L'))
//                          setTotal(updatedLeft + clicks.right)
//                          }} value={'LEFT'} />
//     <Click onClick={() => { 
//                          console.log("Right clicked")
//                          const updatedRight = clicks.right + 1
//                          setClicks({...clicks, right: updatedRight})
//                          setAllClicks(allClicks.concat('R'))
//                          setTotal(clicks.left + updatedRight)
//                          }} value={'RIGHT'} />
//                               {clicks.right}</p>
//     <History allClicks={allClicks} />
//     <p><strong> Total :</strong> {total}</p>
//                          </div>)

//   }

export default App
