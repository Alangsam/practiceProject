import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

export default function LineGraphForList(props) {
    const navigation = useNavigation();

    return (
        <View>
            <LineChart
                data={{
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get("window").width * 0.95} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#59405c",
                    backgroundGradientFrom: "#59405c",
                    backgroundGradientTo: "#87556f",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },

                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "white",
                    },
                }}
                getDotColor={(dataPoint, dataPointIndex) => "#810000"}
                bezier
                style={{
                    borderRadius: 8,
                }}
            />
            <View style={styles.label}>
                <Text style={styles.companyName}>FaceBook</Text>
                <Button
                    title={"View More"}
                    style={styles.viewMoreButton}
                    onPress={() => navigation.navigate("IpoIndividual")}
                    color={"white"}
                ></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewMoreButton: {},
    companyName: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
    label: {
        width: "90%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 70,
        paddingLeft: "5%",
    },
});
