import HeaderCTA from "./HeaderCTA";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="m-auto flex items-center justify-between bg-black px-11 py-4 text-amber-50">
      <Logo />
      <Nav />
      <HeaderCTA />
    </header>
  );
}

export default Header;
