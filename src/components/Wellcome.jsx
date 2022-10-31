import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import quiz from "../img/quiz.svg";
import "./Wellcome.css";

const wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="wellcome">
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para começar: </p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Iniciar
        </button>
        <img src={quiz} alt="" />
    </div>
  )
}

export default wellcome;