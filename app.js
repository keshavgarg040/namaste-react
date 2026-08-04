import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./public/logo.jpg";

const Header = ()=>{
  return (<div className="header">
    <img className="head-logo"src={logo} alt="logo" />
  <div className="header-list">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>cart</li>
    </ul>
  </div>
  </div>)
};
const syle={
  backgroundColor:"#f0f0f0"
}
const Rescard=()=>{
  return (<div className="res-card" style={syle}>
<div className="card-image">
<img className="logo"src="https://b.zmtcdn.com/data/pictures/2/21756862/a8b4e71ea15bb56ca9120737edfe4d8c_o2_featured_v2.jpg"alt="cardlogo"/>
</div>
<h3>Sharma's Cafe</h3>
<h3>Biryani,North Indian</h3>
<h3>4.4 stars  </h3>
<h3>38 minutes</h3>
</div>
  );
};
const Body =()=>{
  return(
    <div className="body-container">
    <h3 className="search">Search</h3>
    <div className="card-container">
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
<Rescard/>
       </div>
    </div>
  );
};
const App = ()=>{
  return(
    <div className="app-container">
      <Header/>
      <Body/>
    </div>
  )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);  