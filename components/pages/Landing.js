import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Landing({ navigation }) {
    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.lighterGreen}>
                <Text style={styles.topText}>Open To View IPOs</Text>
            </View>
            <View style={styles.triangles} />
            <View style={styles.darkerGreen}>
                <Button
                    title="OPEN"
                    onPress={() => navigation.navigate("IpoList")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    lighterGreen: {
        backgroundColor: "#DAF7A6",
        alignItems: "center",
        height: "45%",
    },
    darkerGreen: {
        backgroundColor: "#A5C578",
        height: "50%",
    },
    triangles: {
        width: "100%",
        height: "5%",
        borderTopColor: "#DAF7A6",
        borderTopWidth: 80,
        borderBottomWidth: 0,
        borderBottomColor: "red",
        borderLeftWidth: 0,
        borderLeftColor: "yellow",
        borderRightWidth: 500,
        borderRightColor: "#A5C578",
        borderStyle: "solid",
    },
    topText: {
        color: "#EB9669",
        width: "80%",
        fontSize: 70,
        textAlign: "center",
        paddingTop: "55%",
        fontWeight: "bold",
        fontStyle: "italic",
    },
});
