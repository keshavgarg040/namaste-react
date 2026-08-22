import logo from "url:../../public/logo.jpg";
import  LOGO_LINK  from "../utils/constants";
import { useState } from "react";


const Header = () => {
  // let btnName="login";
  const [btnNameReact,setBtnNameReact]= useState("login");
  return (
    <div className="header">
      <img className="head-logo" src={LOGO_LINK} alt="logo" />
      <div className="header-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
          <button className="login" onClick={()=>{
            (btnNameReact==="login")?setBtnNameReact("logout"):setBtnNameReact("login");
            console.log(btnNameReact);
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;