import { buttonStyle, inputStyle, MainContainer, textButtonStyle, TitleText } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Welcome() {
    const navigation = useNavigation<NavigationProp<any>>()
    const [inputValue, setInputValue] = useState("");

    const handlePress = async () => {
        await AsyncStorage.setItem("userName", inputValue);
        navigation.navigate("main");
    };

    return (
        <MainContainer>
            <TitleText>Olá, seja bem-vindo!</TitleText>
            <Input
                placeholder="Digite o seu nome:"
                placeholderTextColor="#AAAAAA"
                inputStyle={inputStyle}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <Button
                children="Entrar"
                onPress={handlePress}
                buttonStyle={buttonStyle}
                textStyle={textButtonStyle}
                disabled={inputValue.trim() === ""}
            />
        </MainContainer>
    )
}