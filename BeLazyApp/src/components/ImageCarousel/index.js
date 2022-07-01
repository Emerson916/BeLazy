import React, { useEffect, useRef } from "react";
import { FlatList, View } from "react-native";
import ImageCarouselItem from "../../components/ImageCarouselItem";

const ImageCarousel = ({ data }) => {
  let currentSlider = 0;
  // const flatListRef = React.createRef();
  const myRef = useRef(null);
  const goToNext = () => {
    myRef.current.scrollToIndex({
      index: ++currentSlider,
      animated: true,
    });
  };



  useEffect(() => {
    const qntBanner = data?.length / 2;
    console.log("BANNER", qntBanner);
    const timer = setInterval(() => {
      if (currentSlider <= qntBanner) {
        goToNext();
      } else {
        currentSlider = -1;
      }
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={myRef}
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <ImageCarouselItem {...item} />}
      />
    </View>
  );
};

export default ImageCarousel;
