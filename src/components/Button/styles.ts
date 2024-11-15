import { ViewStyle } from "react-native";
import styled from "styled-components/native";

export const disabledStyle: ViewStyle = {
  backgroundColor: "#878787"
}

export const textDisabled = {
  color: "#9e9e9e"
}

export const ScopeButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background-color: #ec6724;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
`;
