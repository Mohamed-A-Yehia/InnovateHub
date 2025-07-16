import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <ul className="flex items-center rounded-lg backdrop-blur-md">
        <li className="mx-6 my-3">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-6 my-3">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="mx-6 my-3">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="mx-6 my-3">
          <NavLink to="/services">FAQs</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
