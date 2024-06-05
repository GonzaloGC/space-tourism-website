import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

type navProps ={
  openAnimation: boolean
}

export const Nav = (props:navProps) => {
  const {openAnimation} = props;
  
  const[ closeAnimation, setCloseAnimation ]= useState(true)

  const handleClick = () => {
    setCloseAnimation(!closeAnimation);
  };

  return (
    <>
      <section>
        <nav className={
           openAnimation ? "container-nav efect-nav" : "container-nav2"
          } >
          <div className="container-icon-nav">
            <a href="#" onClick={handleClick}>
              <img
                className="img-icon-close-nav"
                src="/icon-close.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <ul className="container-ul-nav">
              <li><Link to="/">01 HOME</Link></li>
              <li><Link to="/destination/moon">02 DESTINATION</Link></li>
              <li><Link to="/crew/douglashurley">03 CREW</Link></li>
              <li><Link to="/technology">04 TECHNOLOGY</Link></li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};
