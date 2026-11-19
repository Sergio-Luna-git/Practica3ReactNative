import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cuboMario, products } from '../../../../../store/products.store';

const ProductScreenID = () => {


  const { id } = useLocalSearchParams();

  const product = products.find(p => p.id === id)
  if (!product) {
    return <Redirect href={'../products'} />
  }
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto'
    })
  }, [])

  return (
    <SafeAreaView className='flex flex-1 p-3'>
      <View >
        <Image className='h-64 w-full object-cover rounded-xl mr-3'
          resizeMode="cover" source={cuboMario} />
      </View>
      <View>
        <Text className='font-bold text-2xl'>{product.title}</Text>
        <Text className=''>{product.description}</Text>
        <Text className='font-bold text-2xl'>{product.price}€</Text>
      </View>
    </SafeAreaView >
  )



}

export default ProductScreenID