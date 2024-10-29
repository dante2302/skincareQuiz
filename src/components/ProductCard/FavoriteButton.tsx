import { useState } from "react";
import Heart from "../SVGs/Heart";
import "./styles/FavoriteButton.css";

export default function FavoriteButton()
{
    const [isFavorite, setFavorite] = useState(false);
    return (
        <button 
        onClick={() => setFavorite(!isFavorite)}
        className={`${isFavorite ? "is-favorite" : ""} favorite-product`}>
            <Heart />
        </button>
    );
}