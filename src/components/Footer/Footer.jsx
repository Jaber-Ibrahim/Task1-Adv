import "./Footer.css"
import { Anchor, Container } from '../import'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="Footer-Logo">
        <i className='fa-solid fa-signal Footer_h3-i'></i>
        <h3 className="Footer_h3"> Starter</h3>
        </div>
        <ul className="Footer_ul">
            <Anchor linkTo = "https://www.youtube.com" classLi = "Footer_ul-li" classA = "Footer_ul-a" para = "Home"/>
            <Anchor linkTo = "https://www.youtube.com" classLi = "Footer_ul-li" classA = "Footer_ul-a" para = "About"/>
            <Anchor linkTo = "https://www.youtube.com" classLi = "Footer_ul-li" classA = "Footer_ul-a" para = "Docs"/>
            <Anchor linkTo = "https://www.youtube.com" classLi = "Footer_ul-li" classA = "Footer_ul-a" para = "GitHub"/>
        </ul>

        <ul className="Footer_icons">
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.github.com" icon = "fa-brands fa-github"/>
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.facebook.com" icon = "fa-brands fa-facebook"/>
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.twitter.com" icon = "fa-brands fa-twitter"/>
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.youtube.com" icon = "fa-brands fa-youtube"/>
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.linkedin.com" icon = "fa-brands fa-linkedin"/>
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.google.com" icon = "fa-brands fa-chrome"/>
          <Anchor classLi = "Footer_icons-li" classA="Footer_icons-a" linkTo = "https://www.behance.net/" icon = "fa-brands fa-behance"/>
        </ul>


        <p className="Footer_Copy">Copyright &copy; 2023 All rights reserved . Created By  <a href="https://www.behance.net/">Jaber Ibrahim</a></p>


      </Container>
    </footer>
  )
}

export default Footer