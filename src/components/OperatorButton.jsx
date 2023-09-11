import { useContext } from "react"
import { CalcContext } from "../App"

export default function OperatorButton({ operator }) {
    const {onHandleClick} = useContext(CalcContext)

    return(
        <button value={operator} onClick={onHandleClick} className={operator}>
            {operator}
        </button>
    )
}