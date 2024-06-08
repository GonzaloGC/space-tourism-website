import { Technology } from "./Technology"
import data from '../../data/data.json'

export const TechnologySpaceCapsule =()=>{
  return(
    <Technology
    image={data.technology.space.images.portrait}
    name={data.technology.space.name}
    description={data.technology.space.description}
    imgPosition="img-position2"
    active1=""
    active2=""
    active3="circle-active2"
    />
  )
}