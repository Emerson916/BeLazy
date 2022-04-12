import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  height: 250px;
  width: 100%;
`;

export const ContainerTypeVideo = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

export const TypeVideo = styled.Text`
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  padding-left: 20px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const ContainerCategory = styled.View`
  width: 100%;
  padding-left: 10px;
  flex-direction: row;
`;

export const LaunchText = styled.Text`
  color: #fff;
  font-size: 14px;
  padding: 10px;
`;

export const ContainerSinopse = styled.View`
  width: 100%;
  padding: 20px;
`;

export const TitleSinopse = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TextSinopse = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 15px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerStars = styled.View`
  margin: 5px 20px;
  flex-direction: row;
`;

export const Image = styled.Image`
  height: 20px;
  width: 20px;
`;

export const ContainerModel = styled.View`
  height: 300px;
  width: 90%;
  margin: 150px auto;
  border: 2px solid #fff;
  border-radius: 24px;
  background-color: #303c76;
  align-items: center;
`;

export const ContainerText = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 20px;
  padding-bottom: 30px;
  font-weight: bold;
`;

export const TextExit = styled.Text`
  color: #6c63ff;
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
`;
