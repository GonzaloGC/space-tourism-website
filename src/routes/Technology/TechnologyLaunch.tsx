import { Technology } from "./Technology"
import data from '../../data/data.json'

export const TechnologyLaunch =()=>{
  return(
    <Technology
    image={data.technology.launch.images.portrait}
    name={data.technology.launch.name}
    description={data.technology.launch.description}
    />
  )
}