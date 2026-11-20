import { Products } from "@/store/products.store";
import { useState } from "react";


const useFavorites = (product: Products) => {
    const [isFavorite, setisFavorite] = useState(false);

    const selectFavorite = () => {
        setisFavorite(!product.isFavorite)
        product.isFavorite = isFavorite
    }

    return { selectFavorite, isFavorite }
}

export default useFavorites
