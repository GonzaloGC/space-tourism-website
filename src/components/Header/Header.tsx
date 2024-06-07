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
            <li className="nav-item">
              <Link className="nav-link" to="/"><span className="nav-num-link">00</span> home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination/moon"><span className="nav-num-link">01</span> destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crew/douglashurley"><span className="nav-num-link">02</span> crew</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology/launch"><span className="nav-num-link">03</span> technology</Link>
            </li>
          </ul>
          <a href="#" className="nav-close">
            <img className="img-burguer" src="../icon-close.svg" alt="" />
          </a>
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
