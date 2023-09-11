import { useContext } from "react"
import { CalcContext } from "../App"

export default function Clear() {
    const {clear} = useContext(CalcContext)

    return(
        <button onClick={clear}>
            Clear
        </button>
    )
}