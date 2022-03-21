import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  height: 250px;
  width: 100%;
`;

export const ContainerVideoData = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
`;

export const ContainerTextData = styled.View`
  width: 50%;
  flex-direction: row;
  padding: 20px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export const LaunchText = styled.Text`
  color: #fff;
  font-size: 14px;
  padding: 10px;
`;

export const ContainerButtons = styled.View`
  width: 50%;
`;

export const ContainerTypeVideo = styled.View`
  width: 100%;
  padding-left: 20px;
`;

export const TypeVideo = styled.Text`
  color: #fff;
  font-size: 16px;
`;