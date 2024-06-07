import { Technology } from "./Technology"
import data from '../../data/data.json'

export const TechnologySpaceport =()=>{
  return(
    <Technology
    image={data.technology.space.images.portrait}
    name={data.technology.space.name}
    description={data.technology.space.description}
    active1=""
    active2="circle-active3"
    active3=""
    />
  )
}