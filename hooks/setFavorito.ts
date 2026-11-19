import { useState } from "react";

const useFavoritos = () => {
    const [isFavorito, setisFavorito] = useState(false);

    const seleccionarFavorito = () => {
        if (!isFavorito) {
            setisFavorito(true)
        } else {
            setisFavorito(false)
        }
    }

    return { seleccionarFavorito, isFavorito }
}

export default useFavoritos
