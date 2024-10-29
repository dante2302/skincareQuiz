import FavoriteButton from "./FavoriteButton";
import "./styles/ProductCard.css";

export default function ProductCard({price}: {price: number}) {
    return (
        <div className="product-card">
            <FavoriteButton />
            <div className="product-img">
            </div>
            <div>
                <h2>Product TItle</h2>
                <p>{price}</p>
            </div>
        </div>
    );
};