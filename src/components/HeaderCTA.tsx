import { NavLink } from "react-router";

function HeaderCTA() {
  return (
    <NavLink
      className="bg-secondary font-primary rounded-lg px-4 py-2 uppercase"
      to="/contact"
    >
      Contact Us
    </NavLink>
  );
}

export default HeaderCTA;
