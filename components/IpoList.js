import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function IpoList() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Button title=""></Button>
            <Text style={styles.topText}>{"All  IPOs"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#20232a",
        alignItems: "center",
        height: "100%",
    },
    topText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
    },
});
