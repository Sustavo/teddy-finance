import { Image, TouchableOpacity } from "react-native";
import { MainContainer } from "./style";

interface HeaderProps {
    onPress: () => void;
}

export default function Header({onPress}: HeaderProps) {

    return (
        <MainContainer>
            <Image source={require('../../assets/logo.png')} />
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../assets/feather.png')} />
            </TouchableOpacity>
        </MainContainer>
    )

}