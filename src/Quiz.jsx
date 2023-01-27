import React, {useState, useEffect} from 'react'
import Question from './Question'

export default function Quiz(props) {

  const [showAnswers, setShowAnswers] = useState(false)

  // function to check answers or restart game
  function handleClick() {
    if (!showAnswers) {
      setShowAnswers(prevState => !prevState)
      console.log(showAnswers)
    } else {
      // logic to restart game; probably need to create one button to handle all state changes
    }
  }

  const questionElements = props.questions.map(question => {
    return (
        <Question
          key={crypto.randomUUID()}
          question={question.question}
          incorrectAnswers={question.incorrect_answers}
          correctAnswer={question.correct_answer}
          showAnswers={showAnswers}
        />
    );
  });

  return (
    <>
      <div className="questions-container">
        {questionElements}
      </div>
      <button className="check-btn" onClick={handleClick}>{showAnswers ? 'Restart game' : 'Check answers'}</button> 
    </>
  )
}