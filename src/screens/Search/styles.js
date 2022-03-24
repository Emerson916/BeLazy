import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerBackground = styled.View`
  width: 300px;
  height: 100%;
  justify-content: flex-end;
  padding: 15px;
`;

export const TextFromBackground = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`;

export const ContainerSearch = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Image = styled.Image`
  height: 250px;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #000;
`;

export const ContainerCardSearch = styled.View`
  width: 160px;
  height: 250px;
  background-color: antiquewhite;
  margin: 20px;
`;
