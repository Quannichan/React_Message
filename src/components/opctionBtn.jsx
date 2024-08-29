export default function optionBtn(props){
    return(
        <button className="optionBtn">
            <img src={props.imgOpBtn} alt="button icon"/>
            <p>{props.btnContent}</p>
        </button>
    )
}