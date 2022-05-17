import React from "react";
import { FlatList } from "react-native";
import Cards from "../Cards";
import Title from "../Title";

const ListVideos = ({ data }) => {
  return (
    <>
      <Title text={data.title} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.items}
        keyExtractor={(items) => items.id}
        renderItem={({ item }) => <Cards {...item} />}
      />
    </>
  );
};

export default ListVideos;
