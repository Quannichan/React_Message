/* eslint-disable no-unused-vars */
import MessageList from "../components/mesList"
import Message from "../components/message"
import icon from "../assets/icon.png"
import { useState } from "react"

export default function MesLayout(prop){
    const [iconuser, setIcon] =useState("");
    const [name, setName]=useState("")
    const [iduser, setIduser] = useState("")

    return(
        <div className="wrap_mesLayout">
            <MessageList />
            <Message src={icon}  name="Minh Quân" friendstatus="Bạn với Minh Quân chưa là bạn bè"/>
        </div>
    )
}