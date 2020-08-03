import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./components/Landing";
import IpoList from "./components/IpoList";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                    // options={{ title: "Landing" }}
                />
                <Stack.Screen name="IpoList" component={IpoList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
