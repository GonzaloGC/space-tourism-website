import { Technology } from "./Technology"
import data from '../../data/data.json'

export const TechnologySpaceport =()=>{
  return(
    <Technology
    image={data.technology.spaceport.images.portrait}
    name={data.technology.spaceport.name}
    description={data.technology.spaceport.description}
    imgPosition="img-position3"
    active1=""
    active2="circle-active3"
    active3=""
    />
  )
}