import { Image, Text, TouchableOpacity, View } from "react-native";
import { ContainerIcons, DefaultText, IconImage, MainContainer, NameText } from "./style";
import DeleteClientModal from "../Modals/DeleteClientModal";
import { useEffect, useState } from "react";
import useDeleteUser from "../../hooks/user/useDeleteUser";
import ClientModal from "../Modals/ClientModal";
import { UpdateClient } from "../../@types/client";
import { useFindUserById } from "../../hooks/user/useFindUserById";
import { AddUserAsyncStorage } from "../../api/user/user";
import { removeClientToStorage } from "../../api/user/asyncUser";

interface ClientComponentProps {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
    isSelected?: boolean;
    handleMinus?: () => void;
}

export default function ClientComponent({ id, companyValuation, name, salary, isSelected = false, handleMinus }: ClientComponentProps) {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const { data: userData } = useFindUserById(id);

    return (
        <>
            <DeleteClientModal
                id={id}
                isVisible={isOpenDelete}
                onPressBackDrop={() => setIsOpenDelete(false)}
            />
            <ClientModal
                isVisible={isOpenUpdate}
                onPressBackDrop={() => setIsOpenUpdate(false)}
                clientData={userData}
            />
            <MainContainer style={{
                shadowColor: "#cecece",
                elevation: 2,
            }}>
                <NameText>{name}</NameText>
                <DefaultText>Salário: {salary}</DefaultText>
                <DefaultText>Empresa: {companyValuation}</DefaultText>
                <ContainerIcons>
                    {isSelected ? (
                        <>
                            <View />
                            <View />
                            <TouchableOpacity style={{padding: 10}} onPress={handleMinus}>
                                <IconImage source={require('../../assets/minus.png')} />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity style={{padding: 10}} onPress={() => AddUserAsyncStorage(id)}>
                                <IconImage source={require('../../assets/plus.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding: 10}} onPress={() => setIsOpenUpdate(true)}>
                                <IconImage source={require('../../assets/pencil.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding: 10}} onPress={() => setIsOpenDelete(true)}>
                                <IconImage source={require('../../assets/trash.png')} />
                            </TouchableOpacity>
                        </>
                    )}
                </ContainerIcons>
            </MainContainer>
        </>
    )
}