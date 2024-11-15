import { ScrollView } from "react-native";
import Header from "../../components/Header";
import { buttonStyle, ClientsContainer, MainContainer, textStyle, TitleText } from "./styles";
import ClientComponent from "../../components/ClientComponent";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { useGetClientsFromStorage } from "../../hooks/asyncUser/useGetClientsFromStorage";
import useRemoveClientToStorage from "../../hooks/asyncUser/useRemoveClientToStorage";

export default function SelectedClients() {
    const navigation = useNavigation<NavigationProp<any>>()
    const { data, refetch } = useGetClientsFromStorage();
    const { mutate: removeClienToStorage } = useRemoveClientToStorage();

    const clearClientsArray = async () => {
        await AsyncStorage.setItem('@clients', JSON.stringify([]));
        refetch()
    };

    return (
        <>
            <Header onPress={() => navigation.navigate("main")} />
            <ScrollView>
                <MainContainer>
                    <TitleText>Clientes selecionados: </TitleText>
                    <ClientsContainer>
                        {
                            data?.map(({ id, name, salary, companyValuation }) => (
                                <ClientComponent
                                    key={id}
                                    id={id}
                                    name={name}
                                    salary={salary}
                                    companyValuation={companyValuation}
                                    isSelected={true}
                                    handleMinus={ () => {
                                        removeClienToStorage(id)
                                        refetch();
                                    }}
                                />
                            ))
                        }
                    </ClientsContainer>
                    <Button
                        children="Limpar clientes selecionados"
                        onPress={() => clearClientsArray()}
                        buttonStyle={buttonStyle}
                        textStyle={textStyle}
                    />
                </MainContainer>
            </ScrollView>

        </>
    )
}