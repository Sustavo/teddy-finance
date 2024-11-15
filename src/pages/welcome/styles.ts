import { StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const inputStyle: StyleProp<ViewStyle | TextStyle> = {
  paddingHorizontal: 15,
  borderWidth: 2,
  borderColor: "#d9d9d9",
  height: 60,
  width: "100%",
  fontSize: 24,
};

export const buttonStyle: ViewStyle = {
  borderRadius: 4,
  width: "100%",
};

export const textButtonStyle = {
  color: '#ffffff',
  fontSize: 24,
  paddingVertical: 16,
}

export const MainContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  padding: 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  font-weight: 400;
`;

export const MainTextInput = styled.TextInput`
  border: 2px solid #d9d9d9;
  padding: 0 15px;
  height: 60px;
  width: 100%;
  font-size: 24px;
`;
