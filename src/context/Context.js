import { createContext, useEffect, useState } from "react";

const api =
  "https://the-trivia-api.com/api/questions?categories=science&limit=5&region=CA&difficulty=easy";
export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [page, setPage] = useState("main");
  const handleNext = () => {
    if (index < quiz.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  const handleEnd = () => {
    setPage("end");
  };
  const handleAnswer = (action) => {
    if (action === "correct") {
      setAnswer((prev) => prev + 1);
    }
  };
  console.log(answer);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setQuiz(data));
  }, []);
  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        answer,
        setAnswer,
        page,
        setPage,
        index,
        setIndex,
        handleNext,
        handleEnd,
        handleAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
