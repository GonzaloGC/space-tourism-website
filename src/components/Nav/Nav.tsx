import "./Nav.css";
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
          openAnimation ? "container-nav efect-nav" : closeAnimation ? "container-nav2 not-efect-nav": "container-nav"
          } >
          <div className="container-icon-nav">
            <a href="#" onClick={handleClick}>
              <img
                className="img-icon-close-nav"
                src="public/icon-close.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <ul className="container-ul-nav">
              <li>01 HOME</li>
              <li>02 DESTINATION</li>
              <li>03 CREW</li>
              <li>04 TECHNOLOGY</li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};
