import { NavLink } from "react-router";

function Logo() {
  return (
    <NavLink to="/">
      <span className="text-4xl italic">InnovateHub</span>
    </NavLink>
  );
}

export default Logo;
