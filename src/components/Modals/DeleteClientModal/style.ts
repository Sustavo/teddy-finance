import { ViewStyle } from "react-native";
import styled from "styled-components/native";

export const buttonStyle: ViewStyle = {
  width: "100%",
  backgroundColor: "transparent",
  borderTopWidth: 1,
  borderTopColor: "#75797e",
};

export const textStyle = {
  color: "#0A84FF",
  fontSize: 17,
  paddingVertical: 11,
};

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  padding-top: 19px;
`;

export const TitleText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 6px;
`;

export const SubTitleText = styled.Text`
  font-size: 13px;
  padding: 0 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;
