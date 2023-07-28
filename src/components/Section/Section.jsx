import "./Section.css"
import img from "./../../assets/images/img1.jpg"
import { Title } from "../import"
const Section = (props) => {
  return (
    <div className={`${ props.bool ? "Section__Container  reverse" :  "Section__Container"} `}>
        <Title title = "your title here" para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia quae harum?"/>
        <div className="Section__Container_img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Section