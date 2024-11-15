import { Image, View } from "react-native";
import { MainContainer } from "./style";

export default function Header() {

    return (
        <MainContainer>
            <Image source={require('../../assets/logo.png')} />
            <Image source={require('../../assets/feather.png')} />
        </MainContainer>
    )

}