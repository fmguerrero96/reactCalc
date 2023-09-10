import NumberButton from "./components/NumberButton"
import Screen from "./components/Screen"
import OperatorButton from "./components/OperatorButton"
import EqualsButton from "./components/EqualsButton"
import { useState } from "react"

export default function App() {
  const [upperValue, setUpperValue] = useState('')

  function onHandleClick(event) {
    const operators = ['+', '-', '*', '/']
    const value = event.target.value
    if((operators.includes(value)) && 
        operators.some(symbol => upperValue.includes(symbol))){
      return
      }
    setUpperValue(upperValue + value)
  }

  return (
    <div className="mainContainer">
      <Screen displayValue={upperValue} position={'upper'}/>
      <Screen position={'lower'}/>
      <NumberButton handleClick={onHandleClick} number={1}/>
      <NumberButton handleClick={onHandleClick} number={2}/>
      <NumberButton handleClick={onHandleClick} number={3}/>
      <NumberButton handleClick={onHandleClick} number={4}/>
      <NumberButton handleClick={onHandleClick} number={5}/>
      <NumberButton handleClick={onHandleClick} number={6}/>
      <NumberButton handleClick={onHandleClick} number={7}/>
      <NumberButton handleClick={onHandleClick} number={8}/>
      <NumberButton handleClick={onHandleClick} number={9}/>
      <NumberButton handleClick={onHandleClick} number={0}/>
      <OperatorButton handleClick={onHandleClick} operator={'+'}/>
      <OperatorButton handleClick={onHandleClick} operator={'-'}/>
      <OperatorButton handleClick={onHandleClick} operator={'*'}/>
      <OperatorButton handleClick={onHandleClick} operator={'/'}/>
      <EqualsButton />
    </div>
  )
}