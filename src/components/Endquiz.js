import React, { useContext } from "react";
import { QuizContext } from "../context/Context";

const Endquiz = () => {
  const { answer, setPage } = useContext(QuizContext);
  return (
    <div>
      <div>Results: {answer} / 5 </div>
      <button onClick={() => setPage("main")} className="restart">
        Restart
      </button>
    </div>
  );
};

export default Endquiz;
