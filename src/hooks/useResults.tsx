import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/resultService";
import { FilteredProduct } from "../interfaces/FilteredProduct.interface";
import { Product } from "../interfaces/Product.interface";

const useResults = ({
    questionAnswers,
    setQuestionAnswers,
    length,
    setActiveAnswers,
}: ResultsProps) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<FilteredProduct[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const productsPerPage: number = 2;
    const [filteredProducts, setFilteredProducts] = useState<FilteredProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const response = await getProducts();
        if (response.status > 0 || !response.data)
            return;
        response.data.products;
        let arr = filterAndMapProducts(data.products, questionAnswers)
            .filter((filteredProduct) => filteredProduct.matches > 0)
            .sort(
                (a, b) =>
                    (b.favourite ? 1 : 0) - (a.favourite ? 1 : 0) ||
                    b.matches - a.matches
            );
        setLoading(false);
        setFilteredProducts(arr);
        let tempProducts: FilteredProduct[] = [];
        for (let i: number = 0; i < productsPerPage; i++) {
            tempProducts = [...tempProducts, arr[i]];
        }
        setProducts(tempProducts);

        setTotalPages(Math.ceil(arr.length / productsPerPage));
    });
}, []);

useEffect(() => {
    if (!loading && filteredProducts.length === 0) navigate("/");
}, [loading]);

const convertToTag = (answer: string): string | null => {
    const tag = answerMapping[answer] || null;
    return tag;
};

const filterAndMapProducts = (
    products: Product[],
    questionAnswers: string[]
): FilteredProduct[] => {
    const tags = questionAnswers.map(convertToTag);
    const answerTags = tags.filter((tag) => tag !== null) as string[];

    const filteredProducts: FilteredProduct[] = products.map(
        (product: Product) => {
            let matches = 0;
            let favourite = false;
            product.tags.map((tag: string) => {
                answerTags.map((answerTag: string) => {
                    if (answerTag === tag) matches++;
                });
            });
            const localStorageItem = localStorage.getItem(
                `favouriteProduct_${product.id}`
            );
            if (localStorageItem) favourite = true;
            return {
                ...product,
                matches,
                favourite,
            };
        }
    );

    return filteredProducts;
};

const handlePageBack = () => {
    let tempProds: FilteredProduct[] = [];
    const filteredLength = filteredProducts.length;

    let prevPage = (page - 1 + totalPages) % totalPages || totalPages;
    for (let i = 0; i < productsPerPage; i++) {
        if ((prevPage - 1) * productsPerPage + i < filteredLength) {
            tempProds.push(filteredProducts[(prevPage - 1) * productsPerPage + i]);
        }
    }
    setProducts(tempProds);
    setPage(((page - 2 + totalPages) % totalPages) + 1);
};

const handlePageForward = () => {
    let tempProds: FilteredProduct[] = [];
    for (let i: number = 0; i < productsPerPage; i++)
        tempProds.push(
            filteredProducts[
            (page * productsPerPage + i) % (productsPerPage * totalPages)
            ]
        );

    setProducts(tempProds);
    setPage((page % totalPages) + 1);
};

const handlePageChange = (idx: number) => {
    let tempProds: FilteredProduct[] = [];
    for (let i: number = 0; i < productsPerPage; i++) {
        tempProds.push(filteredProducts[idx * productsPerPage + i]);
    }

    setProducts(tempProds);
    setPage(idx + 1);
};

const handleFavouriteProduct = (idx: number) => {
    let tempProducts = [...filteredProducts];
    let tempDisplayedProducts = [...products];

    const productIndex = (page - 1) * productsPerPage + idx;

    const localStorageKey: string = `favouriteProduct_${tempProducts[productIndex].id}`;

    const savedProduct = localStorage.getItem(localStorageKey);

    !savedProduct
        ? localStorage.setItem(
            `favouriteProduct_${tempProducts[productIndex].id}`,
            JSON.stringify(tempProducts[productIndex])
        )
        : localStorage.removeItem(localStorageKey);

    tempProducts[productIndex] = {
        ...tempProducts[productIndex],
        favourite: !tempProducts[productIndex].favourite,
    };

    tempDisplayedProducts[idx] = {
        ...tempDisplayedProducts[idx],
        favourite: !tempDisplayedProducts[idx].favourite,
    };

    setFilteredProducts(tempProducts);
    setProducts(tempDisplayedProducts);
};