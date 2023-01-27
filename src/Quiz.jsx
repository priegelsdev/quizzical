import React, {useState, useEffect} from 'react'
import Answer from './Answer'
import Question from './Question'

export default function Quiz(props) {

  const [showAnswers, setShowAnswers] = useState(false)
  // function to check answers and display score + other button
  function checkAnswers() {
    console.log('answers shown')
    setShowAnswers(prevState => !prevState)
  }

  const questionElements = props.questions.map((question, index) => {
    return (
      <React.Fragment key={index}>
        <Question
          key={crypto.randomUUID()}
          question={question.question}
          incorrectAnswers={question.incorrect_answers}
          correctAnswer={question.correct_answer}
        />
        {index === props.questions.length - 1 && (
          <button className="check-btn" onClick={checkAnswers} >Check answers</button>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className="questions-container">
      {questionElements}
    </div>
  )
}