import NumberButton from "./components/NumberButton"
import Screen from "./components/Screen"
import OperatorButton from "./components/OperatorButton"
import EqualsButton from "./components/EqualsButton"
import Clear from "./components/Clear"
import { useState, createContext } from "react"
import '/Users/misaelguerrero/Desktop/odinRepos/calculator/src/styles.css'

export const CalcContext = createContext ({
  upperValue: '',
  lowerValue: '',
  onHandleClick: () => {},
  solveEquation: () => {},
  clear: () => {},
})

export default function App() {
  const [upperValue, setUpperValue] = useState('')
  const [lowerValue, setLowerValue] = useState('')

  function onHandleClick(event) {
    const operators = ['+', '-', '*', '/']
    const value = event.target.value
    if((operators.includes(value)) && 
        operators.some(symbol => upperValue.includes(symbol))){
      return
      }
    setUpperValue(upperValue + value)
  }

  function solveEquation(expression) {
    const operators = ['+', '-', '*', '/']
    const operatorRegex = /[+\-*/]/
    const operatorIndex = expression.search(operatorRegex)
    const operator = expression[operatorIndex]
    let num1
    let num2
    let result = 0
    if(operators.some(symbol => expression.includes(symbol))){
      const operands = expression.split(operatorRegex)
      num1 = parseFloat(operands[0])
      num2 = parseFloat(operands[1])
    }
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = NaN; // Invalid operator
    }
    setLowerValue(result)
    setUpperValue('')
  }

  function clear() {
    setLowerValue('')
    setUpperValue('')
  }

  return (
    <CalcContext.Provider value={{upperValue, lowerValue, onHandleClick, solveEquation, clear}} >
      <div className="mainContainer">
        <Screen position={'upper'}/>
        <Screen position={'lower'}/>
        <NumberButton number={1}/>
        <NumberButton number={2}/>
        <NumberButton number={3}/>
        <NumberButton number={4}/>
        <NumberButton number={5}/>
        <NumberButton number={6}/>
        <NumberButton number={7}/>
        <NumberButton number={8}/>
        <NumberButton number={9}/>
        <NumberButton number={0}/>
        <OperatorButton operator={'+'}/>
        <OperatorButton operator={'-'}/>
        <OperatorButton operator={'*'}/>
        <OperatorButton operator={'/'}/>
        <EqualsButton />
        <Clear />
      </div>
    </CalcContext.Provider>
  )
}