import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet, Image} from 'react-native'



const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.productContainer}>
            {/* <Text>Product card view ...</Text> */}
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/fashion1.png')}
                style={styles.productimageStyle}
                />
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    productContainer: {
        width: 182,
        height: 240,
        margin: 2,
        borderRadius: 20,
        backgroundColor: "#D6D6D6"
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: 10/2,
        marginTop: 10/2,
        borderRadius: 20,
        overflow: 'hidden',
    },
    productimageStyle:{
        aspectRatio: 1,
        resizeMode: 'cover',
    }
})

export default ProductCardView
