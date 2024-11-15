import { createStackNavigator } from "@react-navigation/stack"
import Welcome from "../pages/welcome";
import Main from "../pages/main";

export default function Routes() {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <Navigator
            initialRouteName="welcome"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#FFF"
                }
            }}
        >
            <Screen  
                name="welcome"
                component={Welcome}
            />
            <Screen  
                name="main"
                component={Main}
            />
        </Navigator>

    )
}