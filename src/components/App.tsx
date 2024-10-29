import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import "./global.css";
import ResultsPage from "./ResultsPage/ResultsPage";

export default function App()
{
    return (
        <Routes>
            <Route path="/" element={<ResultsPage />} />
        </Routes>
    );
}