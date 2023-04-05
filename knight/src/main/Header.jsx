import React from "react";
import { useNavigate } from "react-router-dom";


function Header(){
    const nanvigate = useNavigate()
    const toLogin = () => {
        nanvigate("/");
    }
    return(
        <>
            <div className="header">
                <div className="containerheader">
                    <div><img src="/EVplus.png" alt="Logo" className="logo"/></div>
                    <div><button className="btn1" onClick={()=>toLogin()}>เพิ่มบัญชีผู้ใช้</button></div>
                    </div>
            </div>

        </>

    )
}

export default Header

