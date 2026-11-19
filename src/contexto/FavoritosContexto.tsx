import { createContext } from "react";

const FavoritosContexto = createContext<FavoritosCompartidos | undefined>(undefined);

type FavoritosCompartidos = {
    listaFavoritos: string[];
    alternarFavorito: (id: string) => void;
};

