import { useState } from "react";
import Heart from "../SVGs/Heart";
import "./styles/FavoriteButton.css";
import useFavorites from "../../hooks/useFavorites";

export default function FavoriteButton({productId}: {productId: number})
{
    const [favorites,setFavorites] = useFavorites();
    console.log(favorites);
    const [isFavorite, setIsFavorite] = useState(favorites.findIndex(v => v == productId) >= 0);
    return (
        <button 
        onClick={() => setFavorites(
            prev => { 
                setIsFavorite(!isFavorite);
                return isFavorite ? prev.filter(v => v == productId) : [...prev, productId]
            })
        }
        className={`${ isFavorite ? "is-favorite" : ""} favorite-product`}>
            <Heart />
        </button>
    );
}