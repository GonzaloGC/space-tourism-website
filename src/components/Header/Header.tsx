import './Header.css'
import { Nav } from '../Nav/Nav';
import { useState } from 'react';

// type headerProps ={
//   handleClick: ()=> void
// }

export const Header = () => {
  // props: headerProps
  // const {handleClick} = props;
  
  const[ openAnimation, setOpenAnimation ]= useState(false)

  const handleClick = () => {
    setOpenAnimation(!openAnimation);
  };
  return (

    <>
      <Nav openAnimation={openAnimation}/>
      <section className="container-header">
        <header className="container-img-header">
          <a href="#"><img className='img-logo-header' src="/logo.svg" alt="logo home" /></a>
          <a href="#" onClick={handleClick}><img className='icon-burguer-header' src="/icon-hamburger.svg" alt="icon burguer" /></a>
        </header>
      </section>
    </>
  );
};
