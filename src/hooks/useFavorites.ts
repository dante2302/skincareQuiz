import { LOCAL_STORAGE_KEYS } from "../enums/LocalStorageKeys.enum";
import useLocalStorage from "./useLocalStorage";

export default function useFavorites(): [number[], React.Dispatch<React.SetStateAction<number[]>>]
{
    const [favorites, setFavorites] = 
        useLocalStorage(LOCAL_STORAGE_KEYS.favoriteItems, [] as number[]);
    return [favorites, setFavorites];
}