import NumberButton from "./components/NumberButton"
import Screen from "./components/Screen"
import OperatorButton from "./components/OperatorButton"
import { useState } from "react"

export default function App() {
  const [upperValue, setUpperValue] = useState('')

  function onHnadleClick(event) {
    const number = event.target.value
    setUpperValue(upperValue + number)
  }

  return (
    <div className="mainContainer">
      <Screen displayValue={upperValue} position={'upper'}/>
      <Screen position={'lower'}/>
      <NumberButton handleClick={onHnadleClick} number={1}/>
      <NumberButton handleClick={onHnadleClick} number={2}/>
      <NumberButton handleClick={onHnadleClick} number={3}/>
      <NumberButton handleClick={onHnadleClick} number={4}/>
      <NumberButton handleClick={onHnadleClick} number={5}/>
      <NumberButton handleClick={onHnadleClick} number={6}/>
      <NumberButton handleClick={onHnadleClick} number={7}/>
      <NumberButton handleClick={onHnadleClick} number={8}/>
      <NumberButton handleClick={onHnadleClick} number={9}/>
      <NumberButton handleClick={onHnadleClick} number={0}/>
      <OperatorButton operator={'+'}/>
      <OperatorButton operator={'-'}/>
      <OperatorButton operator={'*'}/>
      <OperatorButton operator={'/'}/>
    </div>
  )
}