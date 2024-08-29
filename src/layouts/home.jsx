/* eslint-disable react-hooks/rules-of-hooks */
import { Helmet } from "react-helmet";
import Header from "../components/header";
import logo from "../assets/icon_noback.png"
import backlogo from '../assets/icon.png';
import MesLayout from "./mesLayout";
import SettingLayout from "./settingLayout"
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function home(){
    const [navi, setNavi] = useState("/Home/Message")

    const navigate = useNavigate();
    useEffect(()=>{
        console.log("navi")
        navigate(navi)
    },[navi])

    return (
    <>
        <Helmet>
            <title>Home | React Message</title>
        </Helmet>
        <div className="wrap_home">
            <div>
                <Header logo={logo} clickIcon={()=>{setNavi("/Home/Setting")}} name="Message" imguser={logo}/>
            </div>
            <div className="wrap_content">
                <Routes>
                    <Route path="/Message" element={<MesLayout />} />
                    <Route path="/Setting/*" element={<SettingLayout imageUser_acc={backlogo} userName_acc="Minh Quân" OnclickBackMes={()=>{setNavi("/Home/Message")}}/>}/>
                </Routes>
            </div>
        </div>
    </>
    )
    
}

export default home;