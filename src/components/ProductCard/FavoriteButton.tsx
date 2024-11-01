import Heart from "../SVGs/Heart";
import "./styles/FavoriteButton.css";
import useFavorites from "../../hooks/useFavorites";

export default function FavoriteButton({ productId }: { productId: number }) {
    const [favorites, setFavorites] = useFavorites();
    const checkFavorite = () => favorites.findIndex(v => v == productId) >= 0;

    function handleFavoriteClick() {
        setFavorites(() =>
            checkFavorite() ? favorites.filter(v => v != productId) : [...favorites, productId]
        );
    }

    return (
        <button
            onClick={handleFavoriteClick}
            className={`${checkFavorite() ? "is-favorite" : ""} favorite-product`}>
            <Heart />
        </button>
    );
}