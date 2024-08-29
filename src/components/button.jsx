function button(props){
    if(props.color === "white"){
        return(
            <button type={props.type} className="white_btn" id={props.IdBtn}>{props.content}</button>
        )
    }else if(props.color === "black"){
        return(
            <button type={props.type} className="black_btn" id={props.IdBtn}>{props.content}</button>
        )
    }
    
}

export default button;