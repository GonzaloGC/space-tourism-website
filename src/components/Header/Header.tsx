import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

type headerProps = {
  marca: string;
  marca2: string;
  marca3: string;
  marca4: string;
};

export const Header = (props: headerProps) => {
  const { marca, marca2, marca3, marca4 } = props;

  const [openAnimation, setOpenAnimation] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  // const [outAnimation, setOutAnimation] = useState(false);

  // const handleOut = () => {
  //   setOutAnimation(!outAnimation);

  // };
  const handleOpen = () => {
    setOpenAnimation(true);
    setCloseAnimation(false);
  };

  const handleClose = () => {
    setOpenAnimation(false);
    setCloseAnimation(true);
  };

  // const navClass = openAnimation
  //   ? "nav-transition-open"
  //   : closeAnimation
  //   ? "nav-transition-close"
  //   : "";
  const navClass = closeAnimation
    ? "nav-transition-close"
    : openAnimation
    ? "nav-transition-open"
    : "";

  // const out = outAnimation ? navClass : "nav-transition-close";

  return (
    <>
      <header className="container-img-header">
        <Link to="/" className="container-logo">
          <img
            className="img-logo-header"
            src="/logo.svg"
            alt="image of the header section logo"
          />
          <hr className="line-header" />
        </Link>
        <nav className={navClass}>
          <ul className="container-navigation">
            <li className="nav-item">
              <Link onClick={handleClose} className="nav-link" to="/">
                <div className={`${marca} div-link`}>
                  <span className="nav-num-link">00</span><span className="name-section">home</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleClose} className="nav-link" to="/destination/moon">
                <div className={`${marca2} div-link`}>
                  <span className="nav-num-link">01</span><span className="name-section">destination</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleClose} className="nav-link" to="/crew/douglashurley">
                <div className={`${marca3} div-link`}>
                  <span className="nav-num-link">02</span><span className="name-section">crew</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleClose} className="nav-link" to="/technology/launch">
                <div className={`${marca4} div-link`}>
                  <span className="nav-num-link">03</span><span className="name-section">technology</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="container-icon-close">
            <button
              aria-label="close main navigation menu"
              onClick={handleClose}
              className="nav-close"
            >
              <img className="img-close" src="../icon-close.svg" alt="" />
            </button>
          </div>
        </nav>
        <button
          aria-label="open main navigation menu"
          onClick={handleOpen}
          className="display-logo"
        >
          <img
            className="icon-burguer-header"
            src="/icon-hamburger.svg"
            alt="hamburger icon image for navigation"
          />
        </button>
      </header>
    </>
  );
};
