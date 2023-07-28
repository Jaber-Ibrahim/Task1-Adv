import "./Hero.css"
import {PrimaryButton} from './../import';
const Hero = (props) => {
  return (
    <div className="Hero"  style={{backgroundColor : props.color , backgroundImage : (props.img)}}>
        <div className="Hero__Info">
            <h1>{props.header1}</h1>
            <h2>{props.header2}</h2>
            <p>{props.para}</p>
            <PrimaryButton anchor = "dose of motivation"/>
        </div>
    </div>
  )
}

export default Hero