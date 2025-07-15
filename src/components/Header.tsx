import HeaderCTA from "./HeaderCTA";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="text-primary flex h-24 items-center justify-between px-14 py-5 text-[18px]">
      <Logo />
      <Nav />
      <HeaderCTA />
    </header>
  );
}

export default Header;
// backdrop-blur-md
