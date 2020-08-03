import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function IpoList({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{ width: "33%" }}>
                <Button
                    title="back"
                    onPress={() => navigation.navigate("Landing")}
                    style={styles.backButton}
                ></Button>
            </View>
            <View style={{ width: "33%" }}>
                <Text style={styles.topText}>{"All  IPOs"}</Text>
            </View>
            <View style={{ width: "33%" }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#20232a",
        height: "100%",
        paddingTop: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    backButton: {},
    topText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
        paddingTop: 20,
    },
});
