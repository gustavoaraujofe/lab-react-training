function Random(props){
    let randomValue = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
        <p className="border border-dark w-50 p-2">Random value between {props.min} and {props.max} => {randomValue}</p>
    )
}

export default Random