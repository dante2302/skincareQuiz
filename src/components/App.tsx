import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import "./global.css";
import ResultsPage from "./ResultsPage/ResultsPage";
import TextCard from "./ProductSlider/TextCard";
import Question from "./Quiz/Question";
import ProductCard from "./ProductCard/ProductCard";

export default function App()
{
    return (
        <Routes>
            <Route path="/" element={<ProductCard />} />
        </Routes>
    );
}