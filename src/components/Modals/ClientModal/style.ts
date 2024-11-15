import { StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const inputStyle: StyleProp<ViewStyle | TextStyle> = {
  width: "100%",
  borderColor: "#FFFFFF66",
  color: "#FFF",
  borderWidth: 2,
  borderRadius: 8,
  fontSize: 16,
  paddingHorizontal: 12,
  height: 50,
};

export const labelStyle = {
  fontSize: 14,
  color: "#FFF",
};

export const buttonTextStyle: TextStyle = {
  fontSize: 18,
  fontWeight: "600",
  paddingVertical: 10,
};

export const ContainerModal = styled.View`
  display: flex;
  gap: 30px;
  width: 350px;
  padding: 48px 32px 48px 32px;
`;

export const TextModal = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`;

export const ContainerInput = styled.View`
  display: flex;
  gap: 16px;
`;
