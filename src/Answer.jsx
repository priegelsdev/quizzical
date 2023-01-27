export default function Answer(props) {
  const styles = {}

/*   const answerElements = answers.map(answer => {    
    const styles = {border: "none", backgroundColor: '#D6DBF5'} */
  
  return (
    <span 
      className = "answer"
      key = {crypto.randomUUID()}
      id = {crypto.randomUUID()}
      onClick = {props.onClick}
      style = {props.style}
    > 
      {props.text}
    </span>
  )


    

  


  
}