import React from "react";
import { ContainerSearch, Image, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

const CardSearch = (props) => {
  const navigation = useNavigation();
  const { video, imageCard } = props;

  return (
    <ContainerSearch onPress={() => navigation.navigate("CardDetails", props)}>
      <Image source={{ uri: imageCard }} />
      <Text>{video.title_video}</Text>
    </ContainerSearch>
  );
};

export default CardSearch;