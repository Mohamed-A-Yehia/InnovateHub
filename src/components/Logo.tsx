import { NavLink } from "react-router";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <NavLink to="/" className="flex">
      <img
        src={logo}
        alt="InnovateHub Logo"
        className="font-logo size-[48px]"
      />
    </NavLink>
  );
}

export default Logo;
