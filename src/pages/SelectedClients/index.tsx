import { ScrollView } from "react-native";
import Header from "../../components/Header";
import { buttonStyle, ClientsContainer, MainContainer, textStyle, TitleText } from "./styles";
import ClientComponent from "../../components/ClientComponent";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native"
import useRemoveClientToStorage from "../../hooks/asyncUser/useRemoveClientToStorage";
import { getClientsFromStorage } from "../../api/user/asyncUser";
import { useEffect, useState } from "react";
import { Client } from "../../@types/client";

export default function SelectedClients() {
    const navigation = useNavigation<NavigationProp<any>>()
    const [clients, setClients] = useState<Client[]>([]);
    const { mutate: removeClienToStorage, isSuccess } = useRemoveClientToStorage();

    const clearClientsArray = async () => {
        await AsyncStorage.setItem('@clients', JSON.stringify([]));
        await fetchClients();
    };

    const fetchClients = async () => {
        const storedClients = await getClientsFromStorage();
        setClients(storedClients);
    };

    useEffect(() => {
        fetchClients();
    }, [isSuccess]);

    return (
        <>
            <Header onPress={() => navigation.navigate("main")} />
            <ScrollView>
                <MainContainer>
                    <TitleText>Clientes selecionados: </TitleText>
                    <ClientsContainer>
                        {
                            clients?.map(({ id, name, salary, companyValuation }) => (
                                <ClientComponent
                                    key={id}
                                    id={id}
                                    name={name}
                                    salary={salary}
                                    companyValuation={companyValuation}
                                    isSelected={true}
                                    handleMinus={() => removeClienToStorage(id)}
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