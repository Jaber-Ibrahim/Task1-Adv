import { PrimaryButton } from "../import"
import "./Box.css"
const Box = () => {
  return (
    <div className="Box">
      <div className="Box__Info">
        <p className="Box__Info-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <span className="Box__Info-span">start your free trial</span>
      </div>
      <PrimaryButton anchor = "get started"/>
    </div>
  )
}

export default Box