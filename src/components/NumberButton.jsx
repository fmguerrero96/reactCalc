export default function NumberButton({ number, handleClick }) {
    return(
        <button onClick={handleClick} value={number}>
            {number}
        </button>
    )
}