/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from "react"

export default function header(props){
    const header = useRef()
    useEffect(()=>{
        header.current.style.transform = " translateY(0px)"
    },[])

    return(
        <div ref={header} className="wrap_header_page">
            <div className="header_page">
                <div className="wrap_logo_header">
                    <img className="logo_header" src={props.logo}/>
                    <div className="wrap_appname">
                        <p className="name_app">{props.name}</p>
                    </div>
                </div>
                <div className="wrap_nav">
                    <ul className="nav">
                        <li className="nav_op" onClick={props.onclickAbout}>About us</li>
                        <li className="nav_op" id="signout" onClick={props.clickIcon}><img className="imageuser" src={props.imguser} alt="image user"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}