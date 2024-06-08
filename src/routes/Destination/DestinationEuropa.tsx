import { Destination } from "./Destination";
import data from "../../data/data.json";

export const DestinationEuropa = () => {
  return (
    <Destination
      imgPlanet={data.destinations.europa.image}
      namePlanet={data.destinations.europa.name}
      infoPlanet={data.destinations.europa.description}
      avgDistance={data.destinations.europa.distance}
      travelTime={data.destinations.europa.travel}
      active1=""
      active2=""
      active3="active3"
      active4=""
    />
  );
};
