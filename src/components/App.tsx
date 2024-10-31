import { Route, Routes } from "react-router-dom";
import "./global.css";
import Question from "./Question/Question";
import { QuizProvider } from "../contexts/QuizContext";
import quizObject from "../static/quizObject";
import HomePage from "./HomePage/HomePage";
import ResultsPage from "./ResultsPage/ResultsPage";

export default function App() {
    return (
        <QuizProvider quiz={quizObject}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {quizObject.map(({ question, answers }, idx) =>
                    <Route path={`quiz/${idx + 1}`} key={idx}
                        element={
                        <Question
                            question={question}
                            answers={answers}
                            idx={idx}
                        />
                    } />
                )}
                <Route path="quiz/results" element={<ResultsPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </QuizProvider>
    );
}