import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import useFavoritos from "../../hooks/setFavorito";

const IconoFavoritoFuncional = () => {

    const { isFavorito, seleccionarFavorito } = useFavoritos();

    return (



        <Pressable
            onPress={seleccionarFavorito}>
            <Ionicons
                size={20}
                className='mr-20'
                name={isFavorito ? 'heart' : 'heart-outline'}
                color={isFavorito ? 'pink' : 'black'}
            />
        </Pressable>
    )
}

export default IconoFavoritoFuncional