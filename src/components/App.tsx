import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import "./global.css";

export default function App()
{
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}