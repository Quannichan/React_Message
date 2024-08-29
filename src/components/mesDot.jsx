export default function MesDot(prop){
    if(prop.type === "1"){
        return(
                <div className="wrap_mesdot_me" id={prop.idmesdot}>
                    <p className="mesdot_me">{prop.content}</p>
                </div>
        )
    }else if(prop.type === "2"){
        if(prop.next === "true"){
            return(
                <div className="wrap_mesdot" id={prop.idmesdot}>
                <div className="wrap_icon_userdot">
                    <img className="iconuserdot" src={prop.src} alt="user_icon"/>
                </div>
                    <p className="mesdot">{prop.content}</p>
                </div>
                
        )
        }else if(prop.next === "false"){
            return(
                <div className="wrap_mesdot" id={prop.idmesdot}>
                    <p className="mesdot_nonicon">{prop.content}</p>
                </div>
            )
        }
        
    }
    
}