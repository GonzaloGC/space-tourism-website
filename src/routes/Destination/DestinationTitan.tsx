import { Destination } from "./Destination"
import data from '../../data/data.json'

export const DestinationTitan =()=>{
  return(
    <Destination
      imgPlanet={data.destinations.titan.image}
      namePlanet={data.destinations.titan.name}
      infoPlanet={data.destinations.titan.description}
      avgDistance={data.destinations.titan.distance}
      travelTime={data.destinations.titan.travel}
    />
  )
}