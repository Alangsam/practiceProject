import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function LineGraphForList(props) {
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
                    marginVertical: 40,
                    borderRadius: 8,
                }}
            />
            <Text style={styles.companyName}>{props.name}</Text>
            <Button title={"View More"} style={styles.viewMoreButton}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    viewMoreButton: {
        width: "20%",
    },
    companyName: {
        width: "80%",
    },
});
