import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import LineGraphForList from "../ui/LineGraphForList";
import { ScrollView } from "react-native-gesture-handler";

export default function IpoList({ navigation }) {
    return (
        <View style={styles.backgroundColor}>
            <ScrollView>
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
                <View style={styles.graphObjects}>
                    <LineGraphForList />
                    <LineGraphForList />
                    <LineGraphForList />
                    <LineGraphForList />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundColor: {
        height: "100%",
        backgroundColor: "#20232a",
    },
    container: {
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
    graphObjects: {
        paddingLeft: "2.5%",
    },
});
