import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import LineGraphForList from "../ui/LineGraphForList";
import { ScrollView } from "react-native-gesture-handler";
import { TabActions } from "@react-navigation/native";

export default function IpoList({ navigation }) {
    return (
        <View style={styles.backgroundColor}>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={{ width: "33%" }}>
                        <Button
                            title="back"
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        ></Button>
                    </View>
                    <View style={{ width: "33%" }}>
                        <Text style={styles.topText}>{"All  IPOs"}</Text>
                    </View>
                    <View style={{ width: "33%" }} />
                </View>
                <View style={styles.graphObjects}>
                    <LineGraphForList
                        name={"FaceBook"}
                        data={[1, 2, 3, 4]}
                        labels={[
                            Date.now() - 311000,
                            Date.now() - 211000,
                            Date.now() - 111000,
                            Date.now(),
                        ]}
                    />
                    <LineGraphForList
                        name={"Twitter"}
                        data={[1, 2, 3, 4]}
                        labels={[
                            Date.now() - 111500,
                            Date.now() - 111000,
                            Date.now() - 11500,
                            Date.now(),
                        ]}
                    />
                    <LineGraphForList
                        name={"Snap"}
                        data={[1, 2, 3, 4]}
                        labels={[
                            Date.now() - 111500,
                            Date.now() - 111000,
                            Date.now() - 11500,
                            Date.now(),
                        ]}
                    />
                    <LineGraphForList
                        name={"Instagram"}
                        data={[1, 2, 3, 4]}
                        labels={[
                            Date.now() - 111500,
                            Date.now() - 111000,
                            Date.now() - 11500,
                            Date.now(),
                        ]}
                    />
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
        paddingBottom: 55,
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
