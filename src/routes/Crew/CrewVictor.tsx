import { Crew } from "./Crew"
import data from '../../data/data.json'

export const CrewVictor =()=>{
  return (
    <Crew
    role={data.crew.victor.role}
    name={data.crew.victor.name}
    info={data.crew.victor.info}
    image={data.crew.victor.image}
    circle1=""
    circle2=""
    circle3="circle3"
    circle4=""
    />
  )
}