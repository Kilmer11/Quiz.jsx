import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import { useEffect } from 'react';

import GameOver from './components/GameOver';
import Question from './components/Question';
import Wellcome from './components/Wellcome';
import './App.css';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Wellcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
