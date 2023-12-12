import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, Text } from 'react-native';

const Carousel = () => {
  // const slides = [
  //   require('../assets/images/fashion1.png'),
  //    require('../assets/images/fashion2.png'),
  //     require('../assets/images/fashion3.png'),
  // ];

  return (
    <View style={styles.carouselContainer}>
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      {/* <FlatList
        data={slides}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>
            <Image source={item} style={styles.slideImage} />
          </View>
        )}
      /> */}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
  // slideContainer: {
  //   width,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // slideImage: {
  //   width: '100%',
  //   height: '100%',
  //   resizeMode: 'cover',
  // },
});

export default Carousel;
