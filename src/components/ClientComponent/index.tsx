import { Image, Text, TouchableOpacity } from "react-native";
import { ContainerIcons, DefaultText, IconImage, MainContainer, NameText } from "./style";
import DeleteClientModal from "../Modals/DeleteClientModal";
import { useEffect, useState } from "react";
import useDeleteUser from "../../hooks/user/useDeleteUser";
import ClientModal from "../Modals/ClientModal";
import { UpdateClient } from "../../@types/client";
import { useFindUserById } from "../../hooks/user/useFindUserById";

interface ClientComponentProps {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
}

export default function ClientComponent({ id, companyValuation, name, salary }: ClientComponentProps) {
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
                    <TouchableOpacity>
                        <IconImage source={require('../../assets/plus.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsOpenUpdate(true)}>
                        <IconImage source={require('../../assets/pencil.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsOpenDelete(true)}>
                        <IconImage source={require('../../assets/trash.png')} />
                    </TouchableOpacity>
                </ContainerIcons>
            </MainContainer>
        </>
    )
}