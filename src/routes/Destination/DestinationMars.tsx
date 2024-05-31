import { Destination } from "./Destination";

export const DestinationMars = () => {
  // const bgDestination: React.CSSProperties = {
  //   backgroundImage: "url(background-destination-mobile.jpg)",
  // };

  return (
    <Destination
      // style={bgDestination}
      imgPlanet="/image-mars.webp"
      namePlanet="MARS"
      infoPlanet="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
      "
      avgDistance="225 MIL. KM"
      travelTime="9 MONTHS"
    />
  );
};
