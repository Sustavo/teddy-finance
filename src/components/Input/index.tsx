import { StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Container, TextMain } from "./styles";

interface InputProps extends TextInputProps {
    label?: string;
    type?: 'text' | 'password' | 'email';
    inputStyle?: StyleProp<ViewStyle | TextStyle>
    labelStyle?: TextStyle;
}

export default function Input({ label, type = 'text', inputStyle, labelStyle, ...rest }: InputProps) {
    const width = (inputStyle as ViewStyle)?.width ?? 'auto';

    return (
        <Container style={{ width }}>
            {label && <TextMain style={labelStyle} >{label}</TextMain>}
            <TextInput
                {...rest}
                placeholder={rest.placeholder || "Digite um placeholder"}
                style={inputStyle}
                keyboardType={type === 'email' ? 'email-address' : 'default'}
                secureTextEntry={type === 'password'}
            />
        </Container>
    )
}