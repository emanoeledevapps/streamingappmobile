import { StatusBar } from "expo-status-bar";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return(
        <NavigationContainer>
            <StatusBar style="light"/>
            <AppRoutes/>
        </NavigationContainer>
    )
}

