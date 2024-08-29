import tickicon from "../assets/check.png"
export default function mesPre(props){
    if(props.status === "meunseen"){
        return(
            <div className="wrap_mesPre" id={props.idwrap_pre}>
                    <div className="wrap_leftMes">
                        <div className="wrap_img_mesPre">
                            <img className="iconuserpre" src={props.src} alt="icon user"/>
                        </div>
                        <div className="wrap_detailMes">
                            <p className="name_mes">{props.mesName}</p>
                            <p className="mes_preview">{props.mespreview}</p>
                        </div>
                    </div>
                    <div className="wrap_rightMes">
                        <div className="wrap_status">
                            <div className="me_unseenDot"></div>
                        </div>
                    </div>
            </div>
        )
    }else if(props.status === "meseen"){
        return(
            <div className="wrap_mesPre" id={props.idwrap_pre}>
                    <div className="wrap_leftMes">
                        <div className="wrap_img_mesPre">
                        <img className="iconuserpre" src={props.src} alt="icon user"/>
                        </div>
                        <div className="wrap_detailMes">
                            <p className="name_mes">{props.mesName}</p>
                            <p className="mes_preview">{props.mespreview}</p>
                        </div>
                    </div>
                    <div className="wrap_rightMes">
                        <div className="wrap_status">
                            <div className="me_seen"></div>
                        </div>
                    </div>
            </div>
        )
    }else if(props.status === "unseen"){
        return(
            <div className="wrap_mesPre" id={props.idwrap_pre}>
                    <div className="wrap_leftMes">
                        <div className="wrap_img_mesPre">
                        <img className="iconuserpre" src={props.src} alt="icon user"/>
                        </div>
                        <div className="wrap_detailMes">
                            <p className="name_mes">{props.mesName}</p>
                            <p className="mes_preview">{props.mespreview}</p>
                        </div>
                    </div>
                    <div className="wrap_rightMes">
                        <div className="wrap_status_unseen">
                            <img className="unseen" src={tickicon} alt="seen dot"/>
                        </div>
                    </div>
            </div>
        )
    }else if(props.status === "seen"){
        return(
            <div className="wrap_mesPre" id={props.idwrap_pre}>
                    <div className="wrap_leftMes">
                        <div className="wrap_img_mesPre">
                        <img className="iconuserpre" src={props.src} alt="icon user"/>
                        </div>
                        <div className="wrap_detailMes">
                            <p className="name_mes">{props.mesName}</p>
                            <p className="mes_preview">{props.mespreview}</p>
                        </div>
                    </div>
                    <div className="wrap_rightMes">
                        <div className="wrap_status">
                            <img className="seendotIcon" src={props.seendotIcon} alt="seen dot"/>
                        </div>
                    </div>
            </div>
        )
    }
    
}