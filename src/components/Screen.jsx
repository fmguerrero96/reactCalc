export default function Screen({ position, displayValue }) {
    return(
        <div className={position}>
            {displayValue ? displayValue : ''}
        </div>
    )
}