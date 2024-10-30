import { Route, Routes } from "react-router-dom";
import "./global.css";
import Question from "./Question/Question";
import { QuizProvider } from "../contexts/QuizContext";
import quizObject from "../static/quizObject";

export default function App() {
    return (
        <QuizProvider quiz={quizObject}>
            <Routes>
                <Route path="/" element={
                    <Question question="AAAAAAAAAAa" answers={["a", "b"]} idx={0} />
                } />
            </Routes>
        </QuizProvider>
    );
}