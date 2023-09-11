import { useContext } from "react"
import { CalcContext } from "../App"

export default function NumberButton({ number }) {
    const {onHandleClick} = useContext(CalcContext)

    return(
        <button onClick={onHandleClick} value={number}>
            {number}
        </button>
    )
}