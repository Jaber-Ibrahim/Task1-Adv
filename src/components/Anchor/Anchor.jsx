
const Anchor = (props) => {
  return (
    
    <li className={props.classLi}><a target="_blank" className={props.classA} href={props.linkTo}><i className={props.icon}></i>{props.para}</a></li>
  ) 
}

export default Anchor