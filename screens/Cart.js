import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Cart() {
  return (

   <SafeAreaView>
        <View style={styles.MainContainer}>
          <View style={styles.ScreenHeader}>
          <Text style={styles.ScreenTitle}>Cart page</Text>
          </View>
        </View>
   </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  MainContainer: {
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 16,
  },
  ScreenTitle:{
    textAlign: 'center',
    fontWeight: '600'
  }
  
});

export default Cart
