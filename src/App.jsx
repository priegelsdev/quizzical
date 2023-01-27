import React, {useState, useEffect} from 'react'
import Intro from './Intro'
import Quiz from './Quiz'
import blobOne from './assets/img/blob1.png'
import blobTwo from './assets/img/blob2.png'


export default function App() {

  // states to start game and set questions from the api
  const [gameStart, setGameStart] = useState(false)
  const [questions, setQuestions] = useState([])

  // start game function
  function handleClick() {
    if (!gameStart) {
      setGameStart(true)
    } 
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

  return (
    <main>
      <img className="blob-one" src={blobOne}/>

      {/* render Intro component on page load */}
      {!gameStart && <Intro/>}

      {/* render Game component on game start */}
      {gameStart && <Quiz
        questions={questions}
      />}           
      <button className="check-btn" onClick={handleClick}>Start Quiz</button>
      <img className="blob-two" src={blobTwo}/>
    </main>
  )
}