import { createDrawerNavigator } from "@react-navigation/drawer"
import Welcome from "../pages/welcome";

export function DrowerRoutes() {
    const { Navigator, Screen } = createDrawerNavigator();
    return (
        <Navigator>
            <Screen
                name="Welcome"
                component={Welcome}
            />
        </Navigator>
    )
}