import back from "../assets/back.png"
export default function backBtn(props){
    return(
        <>
    <button onClick={props.OnclickBackMes} className="backSearchBtn"><img className="backicon" src={back}/></button>
    </>
    )
}