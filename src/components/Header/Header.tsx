import "./Header.css";
// import { Nav } from "../Nav/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openAnimation, setOpenAnimation] = useState(false);

  const handleClick = () => {
    setOpenAnimation(!openAnimation);
  };
  return (
    <>
      {/* <Nav openAnimation={openAnimation} /> */}
      <header className="container-img-header">
        <a href="#" className="container-logo">
          <img
            className="img-logo-header"
            src="/logo.svg"
            alt="image of the header section logo"
          />
          <hr className="line-header" />
        </a>
        <nav>
          <ul className="container-navigation">
            <li>
              <Link to="/">00 home</Link>
            </li>
            <li>
              <Link to="/destination/moon">01 destination</Link>
            </li>
            <li>
              <Link to="/crew/douglashurley">02 crew</Link>
            </li>
            <li>
              <Link to="/technology/launch">03 technology</Link>
            </li>
          </ul>
        </nav>
        <a href="#" onClick={handleClick} className="display-logo">
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
