/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import CameraRoll from "@react-native-community/cameraroll";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  LogBox
} from 'react-native';
import axios from 'axios';
import LifeCounter from './Components/LifeCounter.js';
import Wow from './Components/Wow.js';


const App: () => React$Node = () => {
  const [axie, setAxie] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Process-stop.svg/60px-Process-stop.svg.png");
  const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Process-stop.svg/60px-Process-stop.svg.png");
  const [count, setCount] = useState(0);
  const axieAPIuri = "https://axieinfinity.com/api/v2/axies/";

  const getAxie = () => {
    const tempCount = count + 1;
    setCount(tempCount);
    axios.get(axieAPIuri + count)
      .then((res) => {

        setAxie(res.data.image);
      })
      .catch((err) => {
        setAxie("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Dialog-error.svg/60px-Dialog-error.svg.png");
      })
  }

  const handleGetPicture = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        console.log(r.edges)
        // setImage(r.edges[0].node.image.uri);
      })
      .catch((err) => {
        console.log(err.message);
        setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Dialog-error.svg/60px-Dialog-error.svg.png");
      });
  }

  return (
    <>
      <Wow></Wow>

      <View style={styles.flexAround}>
        <LifeCounter />
        <LifeCounter />
      </View>

      <View style={styles.flexAround}>
        <TouchableHighlight onPress={getAxie} style={styles.button}>
          <View >
            <Text style={styles.font}>
              Get Axie
            </Text>
          </View>
        </TouchableHighlight>
        <Image source={{ uri: axie }} style={styles.image}></Image>
      </View>

      <View style={styles.flexAround}>
        <TouchableHighlight onPress={handleGetPicture} style={styles.button}>
          <View >
            <Text style={styles.font}>
              Get Pictures
            </Text>
          </View>
        </TouchableHighlight>
        <Image source={{ uri: image }} style={styles.image}></Image>


      </View>

    </>
  );
};

const styles = StyleSheet.create({
  flexAround: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  button: {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100
  },
  image: {
    width: 100,
    height: 100
  },
  font: {
    color: "white"
  }
});

export default App;
