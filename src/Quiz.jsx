import React, {useState, useEffect} from 'react'
import Question from './Question'

export default function Quiz(props) {

  const questionElements = props.questions.map(question => {
    return (
      <React.Fragment key={index}>
      <Question
        key={crypto.randomUUID()}
        question={question.question}
        incorrectAnswers={question.incorrect_answers}
        correctAnswer={question.correct_answer}
        showAnswers={showAnswers}
      />
      {index === questions.length - 1 && (
        <button className="check-btn" onClick={checkAnswers} >Check answers</button>
      )}
    </React.Fragment>
    )
  })

  // function where is logged property gets toggled while only one can be toggled at a time
  function toggleAnswer(id) {
    setAnswers(prevState => {
      const newAnswersArray = []
      for (let i = 0; i < prevState.length; i++) {
        const currentAnswer = prevState[i]
        if (currentAnswer.id === id) {
          const updatedAnswer = {
            ...currentAnswer,
            isLogged: !currentAnswer.isLogged
          }
          newAnswersArray.push(updatedAnswer)
        } else {
          currentAnswer.isLogged = false
          newAnswersArray.push(currentAnswer)
        }
      }
      console.log(newAnswersArray)
      return newAnswersArray
    })
  }

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

  const answerArray = shuffledAnswers.map(answer => ({
    text: answer,
    isLogged: false,
    id: crypto.randomUUID()
  }))

  // state for answers, so an isLogged property can be added to be toggled on and off when selected
  const [answers, setAnswers] = useState(answerArray)
  const [showAnswers, setShowAnswer] = useState(false)

  // function for when check answers button is clicked
  

  //
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
    <div className="questions-container">

    </div>
  )
}


