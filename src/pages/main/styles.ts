import { TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const buttonStyle: ViewStyle = {
  borderRadius: 4,
  borderWidth: 2,
  borderColor: "#EC6724",
  width: "100%",
  backgroundColor: "transparent",
};

export const textStyle: TextStyle = {
  color: "#EC6724",
  fontSize: 14,
  fontWeight: 700,
  paddingVertical: 12,
};

export const PickerContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  borderWidth: 1,
  borderRadius: 10,
  width: 110,
  height: 55,
  marginTop: -10,
};

export const MainContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  gap: 10px;
  margin-bottom: 50px;
`;

export const ClientText = styled.Text`
  font-size: 18px;
  color: #000000;
`;

export const PageClientsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ClientsContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;
