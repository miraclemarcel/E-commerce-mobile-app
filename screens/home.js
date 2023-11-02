import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({navigation}) => {
  return (
   <SafeAreaView>
      <View style={styles.MainContainer} >
          <View style={styles.HomeHeader}>
            <Ionicons name='location-outline' size={24} />
            <Text style={styles.location}>Lagos, Nigeria</Text>
           <TouchableOpacity 
           onPress={() => navigation.navigate('Cart')}
           >
                    <Ionicons name='cart-outline' size={24} />
           </TouchableOpacity>
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
  HomeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    fontWeight: '500',
    color: '#818181'
  }
 
 

});

export default Home
