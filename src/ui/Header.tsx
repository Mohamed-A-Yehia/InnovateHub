import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="container m-auto flex items-center justify-between py-9">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
