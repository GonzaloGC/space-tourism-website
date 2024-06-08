import { Crew } from "./Crew"
import data from '../../data/data.json'

export const CrewMark=()=>{
  return(
    <Crew
    role={data.crew.mark.role}
    name={data.crew.mark.name}
    info={data.crew.mark.info}
    image={data.crew.mark.image}
    circle1=""
    circle2="circle2"
    circle3=""
    circle4=""
    /> 
  )
}