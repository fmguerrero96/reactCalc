import { useContext } from "react"
import { CalcContext } from "../App"

export default function EqualsButton() {
    const {upperValue} = useContext(CalcContext)
    const {solveEquation} = useContext(CalcContext)

    return(
        <button onClick={() => solveEquation(upperValue)}>
            =
        </button>
    )
}