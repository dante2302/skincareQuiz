import useLocalStorage from "./useLocalStorage";

export default function useFavorites(): [number[], React.Dispatch<React.SetStateAction<number[]>>]
{
    const [favorites, getFavorites] = useLocalStorage("favoriteItems", [] as number[]);
    return [favorites, getFavorites];
}