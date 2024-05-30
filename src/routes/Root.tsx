import { Outlet } from "react-router-dom";
import { Nav } from "./Nav.tsx"; 
import { Header } from "./Header.tsx";

export const Root = () => {
  const animation = false;

  return (
    <>
      <Nav openAnimation={animation} />
      <Header/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
