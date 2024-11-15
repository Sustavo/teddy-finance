import { ScrollView, Text, View } from "react-native";
import ClientComponent from "../../components/ClientComponent";
import Button from "../../components/Button";
import { TextBold } from "../../global/globalStyles";
import { buttonStyle, ClientsContainer, ClientText, MainContainer, PageClientsContainer, PickerContainer, textStyle } from "./styles";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFetchAllUsers } from "../../hooks/user/useFetchAllUsers";
import ClientModal from "../../components/Modals/ClientModal";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Picker } from "@react-native-picker/picker";
import { useCountUsers } from "../../hooks/user/useCountUsers";

export default function Main() {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedValue, setSelectedValue] = useState(5);

    const { data, isLoading, refetch } = useFetchAllUsers(currentPage, selectedValue);
    const { data: dataClientsQuantity } = useCountUsers();

    useEffect(() => {
        refetch();
    }, [currentPage, selectedValue])

    return (
        <>
            <Header />
            <ScrollView>
                <ClientModal isVisible={isOpenCreate} onPressBackDrop={() => setIsOpenCreate(false)} />
                <MainContainer>
                    <ClientText><TextBold>{dataClientsQuantity}</TextBold> clientes encontrados: </ClientText>
                    <PageClientsContainer>
                        <ClientText>Clientes por página: </ClientText>
                        <View style={PickerContainer}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Picker.Item label="5" value={5} />
                                <Picker.Item label="10" value={10} />
                                <Picker.Item label="15" value={15} />
                                <Picker.Item label="20" value={20} />
                            </Picker>
                        </View>
                    </PageClientsContainer>
                    <ClientsContainer>
                        {
                            data?.clients.map(({ id, name, salary, companyValuation }) => (
                                <ClientComponent
                                    key={id}
                                    id={id}
                                    name={name}
                                    salary={salary}
                                    companyValuation={companyValuation}
                                />
                            ))
                        }
                    </ClientsContainer>
                    <Button
                        children="Criar Cliente"
                        onPress={() => setIsOpenCreate(true)}
                        buttonStyle={buttonStyle}
                        textStyle={textStyle}
                    />
                    <Pagination
                        page={currentPage}
                        totalPages={data !== undefined ? data?.totalPages : 0}
                        handleFirstPage={() => setCurrentPage(1)}
                        handleLastPage={() => setCurrentPage(data?.totalPages || 0)}
                        handleNextPage={() => setCurrentPage(data ? data.currentPage + 1 : currentPage)}
                        handlePrevPage={() => setCurrentPage(data ? data.currentPage - 1 : currentPage)}
                    />
                </MainContainer>
            </ScrollView >
        </>
    )
}
