import React from "react";
import { FlatList } from "react-native";
import Cards from "../Cards";
import Title from "../Title";

const ListVideos = ({ data, text }) => {
  return (
    <>
      <Title text={text}/>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(items) => items.id}
        renderItem={({ item }) => <Cards {...item} />}
      />
    </>
  );
};

export default ListVideos;
