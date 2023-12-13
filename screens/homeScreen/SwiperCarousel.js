import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperCarousel = () => {
  const slides = [
    require('../../assets/images/fashion1.png'),
    require('../../assets/images/fashion2.png'),
    require('../../assets/images/fashion3.png'),
  ];

  return (
    <View style={styles.carouselContainer}>
      <Swiper>
        {slides.map((slide, index) => (
          <View key={index}>
            <Image source={slide} style={styles.slideImage} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default SwiperCarousel;
