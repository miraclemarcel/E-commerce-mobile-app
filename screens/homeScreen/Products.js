import React from 'react'
import { View , Text, FlatList, StyleSheet} from 'react-native'
import ProductCardView from './ProductCardView'



const Products = () => {

    const ProducImages = [1, 2, 3, 4]

  return (
   <View style={styles.productContiner}>
        <FlatList
        data={ProducImages}
        renderItem={({item}) => (<ProductCardView/>)}
        horizontal
        contentContainerStyle={{columnGap: 20}} 
        />
   </View>
  )
}

const styles = StyleSheet.create({
    productContiner: {
        marginTop: 20,
    }
})

export default Products
