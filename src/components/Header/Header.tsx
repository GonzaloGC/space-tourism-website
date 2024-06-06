import "./Header.css";
import { Nav } from "../Nav/Nav";
import { useState } from "react";

export const Header = () => {
  
  const [openAnimation, setOpenAnimation] = useState(false);

  const handleClick = () => {
    setOpenAnimation(!openAnimation);
  };
  return (
    <>
      <Nav openAnimation={openAnimation} />
      <header className="container-img-header">
        <a href="#">
          <img className="img-logo-header" src="/logo.svg" alt="image of the header section logo" />
        </a>
        <a href="#" onClick={handleClick}>
          <img
            className="icon-burguer-header"
            src="/icon-hamburger.svg"
            alt="hamburger icon image for navigation"
          />
        </a>
      </header>
    </>
  );
};
