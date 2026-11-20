import { Products } from "@/store/products.store";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import useFavorites from "../../hooks/setFavorito";

interface Props {
    product: Products
}

const IconoFavoritoFuncional = ({ product }: Props) => {

    const { isFavorite, selectFavorite } = useFavorites(product);

    return (
        <Pressable
            onPress={selectFavorite}>
            <Ionicons
                size={20}
                className='mr-20'
                name={isFavorite ? 'heart' : 'heart-outline'}
                color={isFavorite ? 'pink' : 'black'}
            />
        </Pressable>
    )
}

export default IconoFavoritoFuncional