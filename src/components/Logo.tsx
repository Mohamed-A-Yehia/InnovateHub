import { NavLink } from "react-router";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <NavLink to="/" className="flex flex-col items-center gap-1">
      <img
        src={logo}
        alt="InnovateHub Logo"
        className="font-logo size-[38px]"
      />
      <span className="font-logo text-[12px]">InnovateHub</span>
    </NavLink>
  );
}

export default Logo;
