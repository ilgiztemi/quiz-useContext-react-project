import React, { useContext } from "react";
import { QuizContext } from "../context/Context";

const Quiz = () => {
  const { index, quiz, handleNext, handleEnd, handleAnswer } =
    useContext(QuizContext);

  return (
    <div className="quiz">
      <h3>{quiz[index].question}</h3>
      <button onClick={() => handleAnswer("correct")}>
        {quiz[index].correctAnswer}
      </button>
      <button onClick={() => handleAnswer("incorrect")}>
        {quiz[index].incorrectAnswers[0]}
      </button>
      <button onClick={() => handleAnswer("incorrect")}>
        {quiz[index].incorrectAnswers[1]}
      </button>
      <button onClick={() => handleAnswer("incorrect")}>
        {quiz[index].incorrectAnswers[2]}
      </button>
      {index === 4 ? (
        <button onClick={handleEnd} className="next">
          Finish the quiz
        </button>
      ) : (
        <button className="next" onClick={handleNext}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
