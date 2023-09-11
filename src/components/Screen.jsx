import { useContext } from "react"
import { CalcContext } from "../App"

export default function Screen({ position }) {
    const {lowerValue, upperValue} = useContext(CalcContext)

    return(
        <div className={position}>
            {position === 'upper' ? upperValue : lowerValue}
        </div>
    )
}