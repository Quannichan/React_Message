/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import MessagePreview from "../components/mesPre"
import icon from "../assets/icon.png"
import back from "../assets/back.png"
import BackBtn from "./backBtn"
import { useEffect, useRef, useState } from "react"
export default function mesList(){
    function fetchMesList(){
        
    }

    const [searchValue , setSearch] = useState("");
    const wrapmesList = useRef()
    const wrapbackbtn = useRef()

    useEffect(() => {
        wrapmesList.current.style.transform = "translateX(0px)"
        wrapmesList.current.style.opacity = 1
    })

    useEffect(()=>{
        if(searchValue.length > 0){
            wrapbackbtn.current.style.display="flex"
        }else{
            wrapbackbtn.current.style.display="none"
        }
    },[searchValue]);

    return(
        <div ref={wrapmesList} className="wrap_mesList">
            <div className="mesList">

                <div className="wrap_headmesList">
                    <div className="wrap_header_mesList">
                        <div ref={wrapbackbtn} className="wrapbackSearchBtn">
                        <BackBtn />
                        </div>
                        <div className="wrapsearchInp">
                            <input onChange={e => setSearch(e.target.value)} type="text" className="searchinput"/>
                        </div>
                    </div>
                </div>

                <div className="wrap_messpre">
                    <div className="messagepre">
                        <MessagePreview idwrap_pre="1" status="meunseen" src={icon} mesName="Quân" mespreview="Hello"/>
                        <MessagePreview idwrap_pre="2" status="meseen" src={icon} mesName="Quân" mespreview="Hello"/>
                        <MessagePreview idwrap_pre="3" status="unseen" src={icon} mesName="Quân" mespreview="Hello"/>
                        <MessagePreview idwrap_pre="4" status="seen" src={icon} mesName="Quân" mespreview="Hello" seendotIcon={icon}/>

                    </div>
                </div>

            </div>
        </div>
    )
}