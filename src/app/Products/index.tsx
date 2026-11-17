import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { products } from '../Store/products.store'

const ProductsScreen = () => {
  return (
    <SafeAreaView>

      <FlatList

        data={products}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No hay productos</Text>}
        renderItem={({ item }) =>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>

        }
      />
    </SafeAreaView>



  )
}

export default ProductsScreen