/* eslint-disable react-hooks/rules-of-hooks */

export default function account(props){

    return(
        <div className="wrap_accCompo">
            <div className="accCompo">
                <div className="wrap_imguser_acc">
                    <img className="imguser_acc" src={props.imageUser} alt="image user"/>
                </div>
                <div className="wrap_nameuser_acc">
                    <p className="nameuser_acc">{props.username}</p>
                </div>
            </div>
        </div>
    )
}