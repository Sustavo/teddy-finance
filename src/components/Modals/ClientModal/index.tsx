import { buttonTextStyle, ContainerInput, ContainerModal, inputStyle, labelStyle, TextModal } from "./style";
import { Overlay } from "@rneui/themed";
import Input from "../../Input";
import Button from "../../Button";
import { Controller, useForm } from "react-hook-form";
import { CreateClient, UpdateClient } from "../../../@types/client";
import { useEffect, useState } from "react";
import useCreateUser from "../../../hooks/user/useCreateUser";
import useUpdateUser from "../../../hooks/user/useUpdateUser";

interface ClientModalProps {
    isVisible: boolean;
    onPressBackDrop: () => void;
    onClientUpdated?: () => void;
    clientData?: UpdateClient;
}

export default function ClientModal({ isVisible = false, onPressBackDrop, clientData, onClientUpdated }: ClientModalProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const { control, handleSubmit, reset, watch } = useForm<CreateClient>({
        defaultValues: clientData
            ? {
                name: clientData.name,
                salary: clientData.salary,
                companyValuation: clientData.companyValuation,
            }
            : {
                name: '',
                salary: 0,
                companyValuation: 0,
            },
    });

    const { mutate: createUserMutate } = useCreateUser();
    const { mutate: updateUserMutate } = useUpdateUser();

    const onSubmit = async (data: CreateClient) => {
        try {
            if (clientData) {
                updateUserMutate({
                    id: clientData.id,
                    name: data.name,
                    salary: data.salary,
                    companyValuation: data.companyValuation,
                })
            } else {
                createUserMutate({
                    name: data.name,
                    salary: data.salary,
                    companyValuation: data.companyValuation,
                })
            }

            reset();
            onPressBackDrop();
            if (onClientUpdated) onClientUpdated();
        } catch (error) {
            console.error('Erro ao salvar cliente:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (clientData) {
            reset({
                name: clientData.name,
                salary: clientData.salary,
                companyValuation: clientData.companyValuation,
            });
        }
    }, [clientData, reset]);

    const name = watch("name");
    const salary = watch("salary");
    const companyValuation = watch("companyValuation");

    useEffect(() => {
        if (name && salary > 0 && companyValuation > 0) {
            setIsEnabled(true);
        } else {
            setIsEnabled(false);
        }
    }, [name, salary, companyValuation]);

    return (
        <Overlay
            isVisible={isVisible}
            onBackdropPress={onPressBackDrop}
            overlayStyle={{
                backgroundColor: "#7A7A7A",
                borderRadius: 10,
                elevation: 1
            }}
        >
            <ContainerModal>
                <TextModal>{clientData ? 'Atualizar cliente' : 'Criar cliente'}</TextModal>
                <ContainerInput>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Nome"
                                placeholder="Digite o nome:"
                                placeholderTextColor="#FFFFFF66"
                                labelStyle={labelStyle}
                                inputStyle={inputStyle}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="salary"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Salário"
                                placeholder="Digite o salário:"
                                placeholderTextColor="#FFFFFF66"
                                labelStyle={labelStyle}
                                inputStyle={inputStyle}
                                onBlur={onBlur}
                                onChangeText={(text) => onChange(Number(text))}
                                value={value ? String(value) : ''}
                                keyboardType="number-pad"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="companyValuation"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Valor da empresa"
                                placeholder="Digite o valor da empresa:"
                                placeholderTextColor="#FFFFFF66"
                                labelStyle={labelStyle}
                                inputStyle={inputStyle}
                                onBlur={onBlur}
                                onChangeText={(text) => onChange(Number(text))}
                                value={value ? String(value) : ''}
                                keyboardType="number-pad"
                            />
                        )}
                    />
                </ContainerInput>

                <Button
                    onPress={handleSubmit(onSubmit)}
                    textStyle={buttonTextStyle}
                    buttonStyle={{
                        borderRadius: 8
                    }}
                    disabled={!isEnabled}
                >
                    {clientData ? 'Atualizar Cliente' : 'Criar Cliente'}
                </Button>
            </ContainerModal>
        </Overlay>
    );
}
