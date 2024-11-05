import { useState, useEffect } from "react";
import { getProducts } from "../services/resultService";
import { FilteredProduct } from "../interfaces/FilteredProduct.interface";
import { Product } from "../interfaces/Product.interface";
import { answerMap } from "../static/answerMap";
import useLocalStorage from "./useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../enums/LocalStorageKeys.enum";

type Results = [FilteredProduct[], React.Dispatch<React.SetStateAction<FilteredProduct[]>>, boolean];

const useResults = (questionAnswers: string[]): Results=> {
    const [filteredProducts, setFilteredProducts] = 
        useLocalStorage<FilteredProduct[]>(LOCAL_STORAGE_KEYS.filteredProducts, []);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function asyncCall() {
            if (filteredProducts.length > 0 && questionAnswers.some(a => a == ""))
                return;
            setLoading(true);
            const response = await getProducts();
            if (response.status > 0 || !response.data)
                return;
            const products = Object.values(response.data.products);
            const fProducts = filterAndMapProducts(products, questionAnswers)
                .filter(fp => fp.matches > 0)
                .sort((a, b) => b.matches - a.matches);
            setLoading(false);
            setFilteredProducts(fProducts);
        }
        asyncCall();
    }, []);

    const convertToTag = (answer: string): string | null => {
        const tag = answerMap[answer as keyof typeof answerMap] || null;
        return tag;
    };

    const filterAndMapProducts = (
        products: Product[],
        questionAnswers: string[]
    ): FilteredProduct[] => {
        const tags = questionAnswers.map(convertToTag);
        console.log(questionAnswers)
        console.log(tags);
        const answerTags = tags.filter((tag) => tag !== null) as string[];

        const filteredProducts: FilteredProduct[] =
            products.map(product => {
                let matches = 0;
                product.tags.map((tag: string) => {
                    answerTags.forEach((answerTag: string) => {
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

export default useResults;