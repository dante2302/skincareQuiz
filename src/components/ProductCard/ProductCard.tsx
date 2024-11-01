import { FilteredProduct } from "../../interfaces/FilteredProduct.interface";
import FavoriteButton from "./FavoriteButton";
import "./styles/ProductCard.css";

export default function ProductCard({product}: {product: FilteredProduct}) {
    return (
        <div className="product-card">
            <FavoriteButton productId={product.id}/>
            <img src={product.images[0].src || undefined} alt="" className="product-img"/>
            <div>
                <h2>{product.title}</h2>
                <p>{product.variants[0].price}</p>
            </div>
        </div>
    );
};