export default function input(props){
    return(
        <div className="wrap_inp" id={props.wrapId}>
            <input type={props.type} id={props.idInp} className={props.inpClass} onInput={props.onInp} onChange={props.onChange} onClick={props.onClick} placeholder={props.placehold}/>
            <label className={props.class_la} id={props.idLa}>{props.label}</label>
        </div>
    )
}


