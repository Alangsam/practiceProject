import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./components/pages/Landing";
import IpoList from "./components/pages/IpoList";
import IpoIndividual from "./components/pages/IpoIndividual";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IpoList"
                    component={IpoList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IpoIndividual"
                    component={IpoIndividual}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
