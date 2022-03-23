import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import ImageCarouselItem from "../../components/ImageCarouselItem";

const ImageCarousel = ({ data }) => {
  let currentSlider = 0;
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
      if (currentSlider <= 2) {
        goToNext();
      } else {
        currentSlider = -1;
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const flatListRef = React.createRef();

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
