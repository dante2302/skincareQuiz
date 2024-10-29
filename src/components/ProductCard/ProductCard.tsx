import FavoriteButton from "./FavoriteButton";
import "./styles/ProductCard.css";

export default function ProductCard() {
    return (
        <div className="product-card">
            <FavoriteButton />
            <div className="product-img">
            </div>
            <div>
                <h2>Product TItle</h2>
                <p>$49.99</p>
            </div>
        </div>
    );
};