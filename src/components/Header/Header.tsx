import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

type headerProps = {
  marca: string
  marca2: string
  marca3: string
  marca4: string
}

export const Header = (props: headerProps) => {

  const {marca, marca2, marca3, marca4} = props


  const [openAnimation, setOpenAnimation] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  // const [hoverPag, setHoverPag] = useState(false);

  // const handleHoverDetination = () => {
  //   setHoverPag(!hoverPag);
    
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

  // const hover = hoverPag ? "div-link" : "";

  return (
    <>
      <header className="container-img-header">
        <a href="#" className="container-logo">
          <img
            className="img-logo-header"
            src="/logo.svg"
            alt="image of the header section logo"
          />
          <hr className="line-header" />
        </a>
        <nav className={navClass}>
          <ul className="container-navigation">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <div className={`${marca} div-link`}><span className="nav-num-link">00</span> home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination/moon">
                <div className={`${marca2} div-link`} div-link><span className="nav-num-link">01</span> destination</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crew/douglashurley">
                <div className={`${marca3} div-link`} div-link><span className="nav-num-link">02</span>crew</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology/launch">
                <div className={`${marca4} div-link`} div-link><span className="nav-num-link">03</span> technology</div>
              </Link>
            </li>
          </ul>
          <Link to="" onClick={handleClose} className="nav-close">
            <img className="img-close" src="../icon-close.svg" alt="" />
          </Link>
        </nav>
        <Link to="" onClick={handleOpen} className="display-logo">
          <img
            className="icon-burguer-header"
            src="/icon-hamburger.svg"
            alt="hamburger icon image for navigation"
          />
        </Link>
      </header>
    </>
  );
};
