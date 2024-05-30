import { Destination } from "./Destination";
// import { Outlet } from "react-router-dom";
export const DestinationMoon = () => {
  // const bgDestination: React.CSSProperties = {
  //   backgroundImage: "url(background-destination-mobile.jpg)",
  // };

  return (
    <>
      <Destination
        // style={bgDestination}
        imgPlanet="/image-moon.webp"
        namePlanet="MOON"
        infoPlanet="See our planet as you’ve never seen it before. A perfect
        relaxing trip away to help regain perspective and come back
        refreshed. While you’re there, take in some history by visiting
        the Luna 2 and Apollo 11 landing sites."
        avgDistance="384,400 KM"
        travelTime="3 DAYS"
      />
    </>
  );
};
