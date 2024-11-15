import styled from "styled-components/native";

export const buttonStyle = {
    backgroundColor: "transparent"
}

export const textStyle = {
    fontSize: 14,
    color: 'black',
    padding: 10
}

export const MainContainer = styled.View`
    display: flex;
    gap: 10px;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const PaginationText = styled.Text`
    background-color: transparent;
    font-size: 14px;
    padding: 10px;
    border-radius: 6px;
`

export const ThreeDotsText = styled.Text`
    font-weight: 700;
    font-size: 14px;
`

export const PaginationTextActive = styled.Text`
    background-color: #EC6724;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
    padding: 10px 14px;
`