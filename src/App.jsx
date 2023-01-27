import {useState, useEffect} from 'react'
import Intro from './Intro'
import Quiz from './Quiz'
import blobOne from './assets/img/blob1.png'
import blobTwo from './assets/img/blob2.png'


export default function App() {

  const [gameStart, setGameStart] = useState(false)
  const [questions, setQuestions] = useState([])

  function startGame() {
    setGameStart(prevState => !prevState)
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json()) 
      .then(data => {
        console.log(data.results)
        setQuestions(data.results)
      })
  }, [gameStart])
 
  const questionElements = questions.map(question => {
    return <Quiz
      key={crypto.randomUUID()}
      question={question.question}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
    />
  })

  return (
    <main>
      <img className="blob-one" src={blobOne}/>

      {!gameStart && <div className="intro-container">
        <Intro 
          onClick={startGame}
        />
      </div>}

      {gameStart && <div className="questions-container">{questionElements}</div>}
            
{/*       <button className="check-btn" >Check answers</button> */}
      <img className="blob-two" src={blobTwo}/>
    </main>
  )
}