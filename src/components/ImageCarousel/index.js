import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import ImageCarouselItem from "../../components/ImageCarouselItem";

const ImageCarousel = ({ data, navigation }) => {
  let currentSlider = 0;
  const flatListRef = React.createRef();

  const goToNext = () => {
    // console.log(ref);
    flatListRef.current.scrollToIndex({
      index: ++currentSlider,
      animated: true,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // isso vai executar a cada 5 segundos
      if (currentSlider <= 5) {
        goToNext();
      } else {
        currentSlider = -1;
      }
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <ImageCarouselItem {...item} />}
      />
    </View>
  );
};

export default ImageCarousel;
