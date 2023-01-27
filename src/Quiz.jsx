export default function Quiz(props) {
  // helper function to shuffle array of answers
  function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = array[i]
      array[i] = array[j]
      array[j] = k
    }
    return array
  }

  // THINK OF BETTER SOLUTION AS ACCENTS IN FRENCH LANGUAGE FOR EXAMPLE ARE STILL THROWING BUGS !!!!!!! 
  // function to format JSON res for special characters 
  function formatJson(text) {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, `'`).replace(/&amp;/g, '&')
  }

  // replace JSON res for special characters 
  const formattedQuestion = formatJson(props.question)
  const formattedCorrectAnswer = formatJson(props.correctAnswer)
  const incorrectAnswers = props.incorrectAnswers.map(incorrectAnswer => 
    formatJson(incorrectAnswer))

  // answers from JSON res shuffled so it's not the same answer in the same position
  const allAnswers = incorrectAnswers.map(incorrectAnswer => incorrectAnswer)
  allAnswers.push(formattedCorrectAnswer)
  const shuffledAnswers = shuffle(allAnswers)

  const answerElements = shuffledAnswers.map(answer => {
    return <span 
        className = "answer"
        key = {crypto.randomUUID()} 
        onClick = {props.onClick}
  // this line belongs in Answer Component; here for testing purposes
  /*       className = {answer === props.correctAnswer ? 'correct' : 'wrong'} */
        > {answer}
      </span>}
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