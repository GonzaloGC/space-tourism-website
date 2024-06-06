import { Destination } from "./Destination";
import data from '../../data/data.json'

export const DestinationMoon = () => {
  return (
    <>
      <Destination
        // style={bgDestination}
        imgPlanet={data.destinations.moon.image}
        namePlanet={data.destinations.moon.name}
        infoPlanet={data.destinations.moon.description}
        avgDistance={data.destinations.moon.distance}
        travelTime={data.destinations.moon.travel}
      />
    </>
  );
};
