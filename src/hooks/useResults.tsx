import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/resultService";
import { FilteredProduct } from "../interfaces/FilteredProduct.interface";
import { Product } from "../interfaces/Product.interface";
import { answerMap } from "../static/answerMap";

const useResults = (questionAnswers: string[]) => {
    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState<FilteredProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function asyncCall() {
            setLoading(true);
            const response = await getProducts();
            if (response.status > 0 || !response.data)
                return;
            let products = Object.values(response.data.products);
            let filteredProducts = filterAndMapProducts(products, questionAnswers)
                .filter(fp => fp.matches > 0)
                .sort((a, b) => b.matches - a.matches);
            setLoading(false);
            setFilteredProducts(filteredProducts);
        }
        asyncCall();
    }, []);

    useEffect(() => {
        if (!loading && filteredProducts.length === 0) navigate("/");
    }, [loading]);

    const convertToTag = (answer: string): string | null => {
        const tag = answerMap[answer as keyof typeof answerMap] || null;
        return tag;
    };

    const filterAndMapProducts = (
        products: Product[],
        questionAnswers: string[]
    ): FilteredProduct[] => {
        const tags = questionAnswers.map(convertToTag);
        const answerTags = tags.filter((tag) => tag !== null) as string[];

        const filteredProducts: FilteredProduct[] =
            products.map(product => {
                let matches = 0;
                product.tags.map((tag: string) => {
                    answerTags.map((answerTag: string) => {
                        if (answerTag === tag) matches++;
                    });
                });
                return {
                    ...product,
                    matches,
                }
            });
        return filteredProducts;
    }
    return [filteredProducts, setFilteredProducts, loading];
};