import { Overlay } from "@rneui/themed";
import { buttonStyle, MainContainer, SubTitleText, textStyle, TitleText } from "./style";
import Button from "../../Button";
import useDeleteUser from "../../../hooks/user/useDeleteUser";
import { useEffect } from "react";

interface DeleteClientModalProps {
    id: number;
    isVisible: boolean;
    onPressBackDrop: () => void;
}


export default function DeleteClientModal({ id, isVisible, onPressBackDrop }: DeleteClientModalProps) {
    const { mutate: deleteUser, isSuccess } = useDeleteUser();

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                onPressBackDrop();
            }, 1000);
        }
    }, [isSuccess]);

    return (
        <Overlay
            isVisible={isVisible}
            onBackdropPress={onPressBackDrop}
            overlayStyle={{
                backgroundColor: "#252525d1"
            }}
        >
            <MainContainer>
                <TitleText>Excluir cliente:</TitleText>
                <SubTitleText>Tem certeza que deseja excluir o cliente Eduardo?</SubTitleText>
                <Button
                    onPress={() => deleteUser(id)}
                    textStyle={textStyle}
                    buttonStyle={buttonStyle}

                >Excluir Cliente</Button>
                <Button
                    onPress={onPressBackDrop}
                    textStyle={textStyle}
                    buttonStyle={buttonStyle}

                >Cancelar</Button>
            </MainContainer>
        </Overlay>
    )
}