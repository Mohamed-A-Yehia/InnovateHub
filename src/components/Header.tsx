import HeaderCTA from "./HeaderCTA";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="text-primary m-auto flex items-center justify-between px-14 py-4 text-[18px]">
      <Logo />
      <Nav />
      <HeaderCTA />
    </header>
  );
}

export default Header;
