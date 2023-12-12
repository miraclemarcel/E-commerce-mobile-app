import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, FlatList, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ProductDummyData } from '../DataSets/ProductDataSets';
import Carousel from '../components/Carousel'

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');




  return (
   <SafeAreaView>
      <View style={styles.MainContainer} >
          <View style={styles.HomeHeader}>
            <Ionicons name='location-outline' size={24} />
            <Text style={styles.location}>Lagos, Nigeria</Text>
           <TouchableOpacity 
           onPress={() => navigation.navigate('Cart')}
           >
                   <View>
                      <Ionicons name='cart-outline' size={24} />
                      <Text style={styles.Counter}>3</Text>
                   </View>
           </TouchableOpacity>
          </View>
          <View style={styles.SearchBar}>
            <TextInput
              style={styles.InputField}
              placeholder="Search"
              onChangeText={setSearch}
              value={search}
              
              />
          </View>
          <View>
            <Text style={styles.homeBlackText}>Find The Most</Text>
            <Text style={styles.homeBlueText}>Fashionable Dresses.</Text>
          </View>

          {/* <ScrollView> */}
            <View style={styles.AllProductsContainer}>
            {/* ========featured image banner ============== */}
             <View style={styles.ProductBanner}>
            <Carousel/>
             </View>

             <View style={styles.AllProducts}>
             <FlatList
                data={ProductDummyData}
                keyExtractor={(item) => item.id}
                numColumns={2} // Set the number of columns to 2
                renderItem={({ item }) => (
                  <View style={styles.ProductItemContainer}>
                    <View style={styles.ProductItem}>
                      <Image source={item.productImage} style={styles.ProductImage} />
                      <Text>{item.productName}</Text>
                      <Text>{item.ProductPrice}</Text>
                      <Text>{item.productCategory}</Text>
                    </View>
                  </View> 
                )}
              />
        
             </View>
            </View>
          {/* </ScrollView> */}
       
           
 
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
  HomeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    fontWeight: '500',
    color: '#818181'
  },
  Counter:{
    position: 'absolute',
    padding: 2,
    backgroundColor: '#FD0B0C',
    height: 13,
    width: 13,
    color: '#ffffff',
    fontSize: 8,
    textAlign: 'center',
    borderRadius: 13
  },
  SearchBar:{
    marginTop: 10,
  

  },
  InputField:{
    backgroundColor: "#F5F5F5",
    width: '100%', 
    height: 50,
    marginBottom: 16,
    padding: 10, 
    borderRadius: 7,
    borderColor: '#A0A0A0',
    borderWidth: 1,

  },
  homeBlackText: {
    fontSize: 35,
    fontWeight: '600'
  },
  homeBlueText: {
    fontSize: 35,
    fontWeight: '600',
    color: '#387FFF'

  },
  
  ProductItemContainer:{
    width: '50%',
    margin: 8,
    
  },
  ProductItem:{
    marginBottom: 16,
    justifyContent: 'space-between',
    // marginLeft: 10,
    padding: 8,
    backgroundColor: '#DEDEDE',
    borderRadius: 8, // Add border radius for rounded corners
    borderColor: '#E0E0E0', // Add border color for separation
    borderWidth: 1, // Add border width for separation
    alignItems: 'center',
    // width: 40,

  },
  ProductImage: {
    width: 130,
    height: 150,
  },
 
 

});

export default Home
