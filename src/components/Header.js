import logo from "url:../../public/logo.jpg";
import  LOGO_LINK  from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img className="head-logo" src={LOGO_LINK} alt="logo" />
      <div className="header-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;