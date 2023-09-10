export default function OperatorButton({ operator, handleClick }) {
    return(
        <button value={operator} onClick={handleClick} className={operator}>
            {operator}
        </button>
    )
}