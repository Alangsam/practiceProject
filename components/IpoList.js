import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function IpoList() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#20232a",
        alignItems: "center",
        height: "100%",
    },
});
