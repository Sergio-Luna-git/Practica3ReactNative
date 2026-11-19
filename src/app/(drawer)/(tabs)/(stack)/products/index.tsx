import IconoFavoritoFuncional from '@/components/IconoFavoritoFuncional'
import { Link } from 'expo-router'
import { FlatList, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { cuboMario, products } from '../../../../../store/products.store'


const ProductsScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 mt-2 mx-2'>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No hay productos</Text>}
        renderItem={({ item }) =>
          <View>
            <View className='flex-row items-center mt-2'>
              <Image className='h-16 w-16 object-cover rounded-xl' resizeMode='cover'
                source={cuboMario} />
              <View className='ml-3 flex-1'>
                <Text className='text-2xl font-bold'>{item.title}</Text>
                <Text className='mt-1 text-grey-600'>{item.description}</Text>
              </View>
            </View>
            <View className='ml-20 mt-3 flex-row items-center justify-between'>
              <Text className='font-bold'>{item.price}€</Text>
              <Link style={{ color: 'purple' }} href={`/products/${item.id}`}>Ver detalles</Link>
              <IconoFavoritoFuncional />
            </View>
          </View>
        }
      />
    </SafeAreaView >



  )
}

export default ProductsScreen