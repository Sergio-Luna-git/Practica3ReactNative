import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '../Store/products.store';

const ProductScreen = () => {


  const { id } = useLocalSearchParams();

  const product = products.find(p => p.id === id)
  if (!product) {
    return <Redirect href={'/Products'} />
  }
  const navigation = useNavigation();








  return (
    




  )
}

export default ProductScreen