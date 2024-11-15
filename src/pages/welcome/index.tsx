import { Text, TextInput, View } from "react-native";
import { MainContainer, MainTextInput, TitleText } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigation, NavigationProp } from "@react-navigation/native"


export default function Welcome() {
    const navigation = useNavigation<NavigationProp<any>>()

    return (
        <MainContainer>
            <TitleText>Olá, seja bem-vindo!</TitleText>
            <Input
                placeholder="Digite o seu nome:"
                placeholderTextColor="#AAAAAA"
                inputStyle={{
                    paddingHorizontal: 15,
                    borderWidth: 2,
                    borderColor: '#d9d9d9',
                    height: 60,
                    width: '100%',
                    fontSize: 24
                }}
            />
            <Button
                children="Entrar"
                onPress={() => navigation.navigate("main")}
                buttonStyle={{
                    borderRadius: 4,
                    width: '100%',
                }}
                textStyle={{
                    color: '#ffffff',
                    fontSize: 24,
                    paddingVertical: 16,
                }}
            />
        </MainContainer>
    )
}