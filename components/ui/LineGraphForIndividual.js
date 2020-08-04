import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

export default function LineGraphForIndividual(props) {
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
                <Text style={styles.statisticNames}>Current Price</Text>
                <Text style={styles.statisticsBad}>$142.20 [42%]</Text>
                <Text style={styles.statisticNames}>
                    Avg Price at Execution
                </Text>
                <Text style={styles.statisticsGood}>$142.00 [51%]</Text>
                <Text style={styles.statisticNames}>
                    Number of Impactful Trades Since Open
                </Text>
                <Text style={styles.statisticsBad}>12 [29%]</Text>
                <Text style={styles.statisticNames}>
                    Avg Time Between Impactful Trades
                </Text>
                <Text style={styles.statisticsGood}>00:12:123</Text>
                <Text style={styles.statisticNames}>Should You Buy?</Text>
                <Text style={styles.statisticsBad}>NO [41%]</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewMoreButton: {},
    statisticNames: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
    statisticsGood: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#86c4ba",
    },
    statisticsBad: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#e97171",
    },
    label: {
        width: "90%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 70,
        paddingLeft: "5%",
    },
});
