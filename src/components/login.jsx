/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Input from "./input";
import Button from "./button";
import icon from "../assets/icon.png"
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(props){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email)
        axios.post('',[email,pass])
        .then(res=>{

        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    return(
        <>
            <Helmet>
                <title>Sign up | React Message</title>
            </Helmet>
            <div className="wrap_form">
                <form className="form" onSubmit={handleLogin}>
                    <div className="wrap_icon">
                        <img className="icon_login" src={icon}/>
                    </div>
                    <div className="wrap_head_form">
                        <h1 className="header_login">{props.header}</h1>
                        <p className="underhead_log">{props.underhead}</p>
                    </div>
                    <div className="wrap_input">
                        <Input wrapId="wrap_email" class_la="label" label="Email" type="text" inpClass="input" idLa="emailLa" idInp="emailInp" onChange={e => setEmail(e.target.value)} placehold=""/>
                        <Input wrapId="wrap_pass" class_la="label" label="Password" type="password" inpClass="input" idLa="passLa" idInp="passInp" onChange={e => setPass(e.target.value)} placehold=""/>
                        <div className="wrap_forgot">
                            <p className="forgot_text">Forgot password?</p>
                        </div>
                    </div>

                    <div className="wrap_btn_sub">
                        <Button type="submit" color="black" IdBtn="log_btn" content="Login"/>
                    </div>

                    <div className="wrap_newacc">
                            <p className="newacctext">Don`t have an account? <span className="hightlight" ><Link to="/Signup" >Create new!</Link></span></p>
                        </div>
                </form>
            </div>
        </>
    )
}


export default Login;
