import { Crew } from "./Crew"
import  data  from "../../data/data.json";

export const CrewAnousheh=()=>{
  return(
    <Crew
    role={data.crew.Anousheh.role}
    name={data.crew.Anousheh.name}
    info={data.crew.Anousheh.info}
    image={data.crew.Anousheh.image}
    circle1=""
    circle2=""
    circle3=""
    circle4="circle4"
    />
  )
}