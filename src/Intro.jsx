export default function Intro(props) {
  return (
    <div className="intro-details">
      <h1 className="intro-title">Quizzical</h1>
      <p className="intro-description">This is a placeholder text for a possible description to be added</p>
      <button className="start-btn" onClick={props.onClick}>Start quiz</button> 
    </div>
  )
}