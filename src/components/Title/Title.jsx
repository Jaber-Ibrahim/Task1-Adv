import "./Title.css"


const Title = (props) => {
  return (
    <div className="Main__Title">
        <h1>{props.title}</h1>
        <p>{props.para}</p>
    </div>
  )
}

export default Title