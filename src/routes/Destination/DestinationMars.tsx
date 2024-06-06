import { Destination } from "./Destination";
import data from '../../data/data.json'

export const DestinationMars = () => {
  return (
    <Destination
      // style={bgDestination} data.destinations
      imgPlanet={data.destinations.mars.image}
      namePlanet={data.destinations.mars.name}
      infoPlanet={data.destinations.mars.description}
      avgDistance={data.destinations.mars.distance}
      travelTime={data.destinations.mars.travel}
    />
  );
};
