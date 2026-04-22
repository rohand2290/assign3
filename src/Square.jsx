let Square = ({value}) => {
    let handleClick = () => console.log("clicked!")

    return <button className="square" onClick={handleClick}>{value}</button>
}

export default Square;