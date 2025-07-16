import { NavLink } from "react-router";

function HeaderCTA() {
  return (
    <NavLink
      className="bg-secondary hover:bg-secondaryHover font-primary rounded-lg px-2.5 py-2 uppercase"
      to="/contact"
    >
      Contact Us
    </NavLink>
  );
}

export default HeaderCTA;
