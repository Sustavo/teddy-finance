import { GestureResponderEvent, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { ScopeButton, TextButton } from "./styles";

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
            style={buttonStyle}
            {...rest}
        >
            <TextButton style={textStyle}>{children}</TextButton>
        </ScopeButton>

    );
}