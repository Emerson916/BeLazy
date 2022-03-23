import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderDrawerLogo = styled.View`
  width: 100%;
  height: 100px;
  padding-left: 10px;
`;

export const ContainerDataUser = styled.View`
  width: 100%;
  height: 150px;
  margin-top: 1px;
  background-color: #6c63ff;
  border-top-color: #f4f4f4;
  border-bottom-color: #f4f4f4;
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const ContainerName = styled.View`
  padding: 5px 10px;
`;

export const NameUser = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  font-weight: bold;
  color: #fff;
`;

export const EmailUser = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const ContainerDrawerNavigation = styled.View`
  flex: 1;
  margin-top: 1px;
`;

export const ContainerExit = styled.View`
  margin-top: 175px;
  border-top-color: #f4f4f4;
  border-top-width: 1px;
`;
