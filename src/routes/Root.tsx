import { Outlet } from "react-router-dom";

export const Root = () => {
  // const animation = false;

  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
