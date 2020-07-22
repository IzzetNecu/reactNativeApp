import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableHighlight
} from 'react-native';

const LifeCounter = (prop) => {

    const [counter, setCounter] = useState(20);
    const [visible, setVisible] = useState("flex");

    const incCounter = (amount) => {
        let temp = counter + amount;
        setCounter(temp);
    };

    const removeCounter = () => {
        setVisible("none");
    }


    const styles = StyleSheet.create({
        container: {
            display: visible,
            flexDirection: "column",
            marginLeft: 30,
            marginRight: 30
        },
        btnFlex: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: 2
        },

        button: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 50,
            borderRadius: 2
        },
        red: {
            backgroundColor: "rgb(255,0,0)"
        },
        green: {
            backgroundColor: "rgb(0,255,0)"
        },
        number: {
            fontSize: 50
        },
        removeX: {
            top: 0,
            left: 100
        },
        leftX: {
            backgroundColor: "black",
            transform: [{ rotate: "45deg" }, { translateY: 1 }, { translateX: 1.5 }],
            width: 10,
            height: 2
        },
        rightX: {
            backgroundColor: "black",
            transform: [{ rotate: "-45deg" }],
            width: 10,
            height: 2,
        }
    })

    return (
        <View style={styles.container}>

            <TouchableHighlight onPress={() => removeCounter()}>
                <View >
                    <View style={styles.leftX}></View>
                    <View style={styles.rightX}></View>
                </View>
            </TouchableHighlight>

            <View style={styles.btnFlex}>
                <TouchableHighlight onPress={() => incCounter(1)}>
                    <View style={[styles.button, styles.green]}>
                        <Text>+1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => incCounter(5)}>
                    <View style={[styles.button, styles.green]}>
                        <Text>+5</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.btnFlex}>
                <Text style={styles.number}>{counter}</Text>
            </View>

            <View style={styles.btnFlex}>
                <TouchableHighlight onPress={() => incCounter(-1)}>
                    <View style={[styles.button, styles.red]}>
                        <Text>-1</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => incCounter(-5)}>
                    <View style={[styles.button, styles.red]}>
                        <Text>-5</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )

};




export default LifeCounter;
