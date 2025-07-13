import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-7 text-[18px]">
        <li>
          <NavLink className="hover:text-secondary" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-secondary" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-secondary" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-secondary" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
