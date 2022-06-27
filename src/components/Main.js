import React, { useContext } from "react";
import { QuizContext } from "../context/Context";

const Main = () => {
  const { setPage } = useContext(QuizContext);
  return (
    <div className="main">
      <button onClick={() => setPage("quiz")}>Start the quiz</button>
    </div>
  );
};

export default Main;
