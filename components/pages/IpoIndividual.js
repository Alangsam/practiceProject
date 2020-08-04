import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import LineGraphForList from "../ui/LineGraphForList";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import LineGraphForIndividual from "../ui/LineGraphForIndividual";

export default function IpoIndividual(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.backgroundColor}>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={{ width: "30%" }}>
                        <Button
                            title="back"
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        ></Button>
                    </View>
                    <View style={{ width: "40%" }}>
                        <Text style={styles.topText}>{"FaceBook"}</Text>
                    </View>
                    <View style={{ width: "30%" }} />
                </View>
                <View style={styles.graphObjects}>
                    <LineGraphForIndividual name={"FaceBook"} />
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
    backButton: {
        color: "white",
    },
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
