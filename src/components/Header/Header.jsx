import { useState } from "react"
import "./Header.css"
import { Anchor } from "../import";


const Header = (props) => {
  const [active , setActive] = useState("");
  return (
    <nav>
      <a href="https://www.behance.net/" target="_blank" className="Logo">
        <div className="Logo-Img">
          <i className="fa-solid fa-signal fa-fade"></i>
        </div>
        {props.logo}
      </a>
        <ul className= {active ? "Items active" : "Items" }>
        <div className="Close-Icon" onClick={() => setActive(false)}>
         <i className="fa-solid fa-close fa-fade"></i>
        </div>
        <Anchor linkTo = "https://www.github.com/" para = "gitHub" classLi = "Items_Li" classA = "Items_A"/>
        <Anchor linkTo = "https://www.github.com/" para = "sign in" classLi = "Items_Li" classA = "Items_A"/>
        </ul>
        <div className="My-Bars" onClick={() => setActive(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
    )
}

export default Header