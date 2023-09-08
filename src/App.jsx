import NumberButton from "./components/NumberButton"
import Screen from "./components/Screen"

export default function App() {
  return (
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
    </div>
  )
}