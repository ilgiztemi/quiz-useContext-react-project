import { useContext } from "react";
import "./App.css";
import Endquiz from "./components/Endquiz";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import { QuizContext } from "./context/Context";

function App() {
  const { page } = useContext(QuizContext);
  return (
    <div className="body">
      <div className="App">
        <h1>Quiz</h1>
        {page === "main" && <Main />}
        {page === "quiz" && <Quiz />}
        {page === "end" && <Endquiz />}
      </div>
    </div>
  );
}

export default App;
