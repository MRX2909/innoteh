import { CiMenuBurger } from "react-icons/ci";
import Logo from "../Logo/Logo";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <Logo size={75} />
        </a>

        <CiMenuBurger id="menu-icon" onClick={handleMenuButton} cursor={"pointer"}/>

        <nav className={"navbar" + (isOpen ? " active" : "")}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div className={"nav-bg" + (isOpen ? " active" : "")}></div>
    </>
  );
};

export default Navbar;
