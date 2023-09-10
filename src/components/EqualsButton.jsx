export default function EqualsButton({ expression, calculate }) {
    return(
        <button onClick={() => calculate(expression)}>
            =
        </button>
    )
}