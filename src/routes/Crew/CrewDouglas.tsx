import { Crew } from "./Crew"
import data from '../../data/data.json'

export const CrewDouglas =()=>{
  return(
    <Crew
    role={data.crew.douglas.role}
    name={data.crew.douglas.name}
    info={data.crew.douglas.info}
    image={data.crew.douglas.image}
    />
  )
}