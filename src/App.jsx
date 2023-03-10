import React, {useState, useEffect} from 'react'
import Intro from './Intro'
import Quiz from './Quiz'
import blobOne from './assets/img/blob1.png'
import blobTwo from './assets/img/blob2.png'


export default function App() {

  // states to start game and set questions from the api
  const [gameStart, setGameStart] = useState(false)
  const [questions, setQuestions] = useState([])
  const [showAnswers, setShowAnswers] = useState(false)

  // start game function
  function startGame() {
    setGameStart(prevState => !prevState)
  }

  // function to check answers and display score + other button
  function checkAnswers() {
    console.log('answers shown')
    setShowAnswers(prevState => !prevState)
  }

  // effect to fetch questions from api on game start
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json()) 
      .then(data => {
        console.log(data.results)
        setQuestions(data.results)
      })
  }, [gameStart])
 
  // question elements to be rendered on game start with additional button element
  const questionElements = questions.map((question, index) => {
    return (
      <React.Fragment key={index}>
        <Quiz
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
    );
  });

  return (
    <main>
      <img className="blob-one" src={blobOne}/>

      {/* render Intro component on page load */}
      {!gameStart && <div className="intro-container">
        <Intro 
          onClick={startGame}
        />
      </div>}

      {/* render Game component on game start */}
      {gameStart && <div className="questions-container">{questionElements}</div>}           

      <img className="blob-two" src={blobTwo}/>
    </main>
  )
}