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
    const incCounter = (amount) => {
        let temp = counter + amount;
        setCounter(temp);
    };

    const decCounter = (amount) => {
        let temp = counter - amount;
        setCounter(temp);
    }
    return (
        <View style={styles.container}>
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
                <TouchableHighlight onPress={() => decCounter(1)}>
                    <View style={[styles.button, styles.red]}>
                        <Text>-1</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => decCounter(5)}>
                    <View style={[styles.button, styles.red]}>
                        <Text>-5</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
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
    }

})


export default LifeCounter;
