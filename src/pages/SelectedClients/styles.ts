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

export const MainContainer = styled.View`
    padding: 20px;
    display: flex;
    align-items: center;
    width: 100%;
`

export const TitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
`

export const ClientsContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

