/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Input from "./input";
import Button from "./button";
import icon from "../assets/icon.png"
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import axios from "axios";

const checkUppserCase = (text) =>{
        return /[A-Z]/.test(text)
    }

    const checkNumber = (text) =>{
        return /[\d]/.test(text)
    }

    const checkSpeciaChar = (text)=>{
        return /[!@#$%&?]/.test(text)
    }

    const checkMail = (text) =>{
        const mailChar = [".", "@"]
        return mailChar.every(char => text.includes(char))
    }

    const StrongPass = (pass) =>{
        var countUpper = 0
        var countNumber = 0
        var countSpecial = 0
        for(var i = 0 ; i < pass.length ; i++){
            
            if(checkUppserCase(pass[i])){
                countUpper+=1
            }else if(checkNumber(pass[i])){
                countNumber+=1
            }else if(checkSpeciaChar(pass)){
                countSpecial +=1
            }

        }
        if(countUpper < 3){
            return false
        }else if(countNumber < 4){
            return false
        }else if(countSpecial < 1){
            return false
        }else{
            return true
        }
    }

function Signup(props){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [repass, setRepass] = useState("")

    const noftifi = useRef()

    const handleSignup = () =>{
        if(repass === setRepass){
            axios.post('',
            [username, email, pass])
            .then()
            .catch()
        }else{
            // 
        }
        
    }   


    useEffect(() => {
        if(username !== ""){
            if(checkUppserCase(username) === false ){
                noftifi.current.innerText = "Username must containt uppercase!"
            }else if(checkNumber(username) === false){
                noftifi.current.innerText = "Username must containt number!"
            }else if(username.length < 7){
                noftifi.current.innerText = "Username too short "
            }else{
                noftifi.current.innerText = ""
            }
        
        }else{
            noftifi.current.innerText = ""
        }
        
    },[username])

    useEffect(() => {
        if(email !== ""){
            if(!checkMail(email)){
                noftifi.current.innerText = "Invalid email!"
            }else if(email.length < 5){
                noftifi.current.innerText = "Email too short"
            }else if(email[0] === "@"){
                noftifi.current.innerText = "Invalid email!"
            }else if(email[0] === "."){
                noftifi.current.innerText = "Invalid email!"
            }else{
                noftifi.current.innerText = ""
            }
        }else{
            noftifi.current.innerText = ""
        }
    },[email])

    useEffect(() => {
        if(pass !== ""){
            if(pass.length < 7){
                noftifi.current.innerText = "Password is short!"
            }else if(StrongPass(pass) === false){
                noftifi.current.innerText = "Password is weak, try again!"
            }else{
                noftifi.current.innerText = ""
            }
        }else{
            noftifi.current.innerText = ""
        }
    },[pass])

    useEffect(() => {
        if(repass !== ""){
            if(pass !== repass){
                noftifi.current.innerText = "Re-enter password is not same with password!"
            }else{
                noftifi.current.innerText = ""
            }
        }else{
            noftifi.current.innerText = ""
        }
    },[repass])


    return(
        <>
            <Helmet>
                <title>Sign up | React Message</title>
            </Helmet>
            <div className="wrap_form">
                <form className="form" onSubmit={handleSignup}>
                    <div className="wrap_icon">
                        <img className="icon_login" src={icon}/>
                    </div>
                    <div className="wrap_head_form">
                        <h1 className="header_login">{props.header}</h1>
                        <p className="underhead_log">{props.underhead}</p>
                    </div>
                    <div className="wrap_nofti">
                        <p className="nofti" ref={noftifi}>hi</p>
                    </div>
                    <div className="wrap_input">
                        <Input wrapId="wrap_name" class_la="label" label="Username" type="text" inpClass="input" idLa="NameLa" idInp="NameInp" placehold="" onChange={e => setUsername(e.target.value)}/>
                        <Input wrapId="wrap_email" class_la="label" label="Email" type="text" inpClass="input" idLa="emailLa" idInp="emailInp" placehold=""  onChange={e => setEmail(e.target.value)}/>
                        <Input wrapId="wrap_pass" class_la="label" label="Password" type="password" inpClass="input" idLa="passLa" idInp="passInp" placehold=""  onChange={e => setPass(e.target.value)}/>
                        <Input wrapId="wrap_repass" class_la="label" label="Re-Password" type="password" inpClass="input" idLa="repassLa" idInp="repassInp" placehold=""  onChange={e => setRepass(e.target.value)}/>
                    </div>

                    <div className="wrap_btn_sub">
                        <Button color="black" IdBtn="log_btn" content="Sign up"/>
                    </div>

                    <div className="wrap_newacc">
                            <p className="newacctext">Already have an account? <span className="hightlight" ><Link to="/" >Log in!</Link></span></p>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Signup;
