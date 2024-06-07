import { Technology } from "./Technology"
import data from '../../data/data.json'

export const TechnologySpaceCapsule =()=>{
  return(
    <Technology
    image={data.technology.spaceport.images.portrait}
    name={data.technology.spaceport.name}
    description={data.technology.spaceport.description}
    active1=""
    active2=""
    active3="circle-active2"
    />
  )
}