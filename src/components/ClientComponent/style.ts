import styled from "styled-components/native";

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 16px 30px;
  border-radius: 4px;
`;

export const ContainerIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  width: 100%;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const DefaultText = styled.Text`
  font-size: 14px;
`;

export const IconImage = styled.Image`
  width: 20px;
  height: 20px;
`