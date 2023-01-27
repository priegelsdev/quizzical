import React, {useState, useEffect} from 'react'
import Question from './Question'

export default function Quiz(props) {

  const [showAnswers, setShowAnswers] = useState(false)

  // function to check answers or restart game
  function handleClick() {
    if (!showAnswer) {
      setShowAnswers(prevState => !prevState)
    } else {

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
    </>
  )
}