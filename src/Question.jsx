import Answer from './Answer'

export default function Question(props) {
  
  const answerElements = answers.map(answer => {    
    const styles = {border: "none", backgroundColor: '#D6DBF5'}

    return <Answer 
/*         className = {`answer ${answer.text === formattedCorrectAnswer ? 'correct' : 'wrong'}`} */
        className = "answer"
        key = {crypto.randomUUID()}
        id = {crypto.randomUUID()}
        onClick = {() => toggleAnswer(answer.id)}
        style = {answer.isLogged ? styles : {outline: 'none'}}
        text = {answer.text}
        showAnswers = {showAnswers}
        /> 
      }
  )
  
  return (
    <div className="question-container">
      <h2 className="question-text">{formattedQuestion}</h2>
      <div className="answers-container">
        {answerElements}
      </div>
      <hr></hr>
    </div>
  )


    

  


  
}