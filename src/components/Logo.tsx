import { NavLink } from "react-router";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-5">
      <img
        src={logo}
        alt="InnovateHub Logo"
        className="font-logo size-[48px]"
      />
      <span className="font-logo">InnovateHub</span>
    </NavLink>
  );
}

export default Logo;
