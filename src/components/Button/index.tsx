import { GestureResponderEvent, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { disabledStyle, ScopeButton, TextButton, textDisabled } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    onPress: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export default function Button({ onPress, children, buttonStyle, textStyle, ...rest }: ButtonProps) {
    return (
        <ScopeButton
            onPress={onPress}
            style={[rest.disabled && disabledStyle, buttonStyle]}
            {...rest}
        >
            <TextButton style={[rest.disabled && textDisabled, textStyle]}>{children}</TextButton>
        </ScopeButton>

    );
}