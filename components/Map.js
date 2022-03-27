import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

import { useState, useEffect } from "react";
import { Audio } from 'expo-av';
import Toast from "react-native-toast-message";
import { database } from "../Core/Config";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import React from "react";

const showToastFree = () => {
  Toast.show({
    type: "success",
    text1: "A parking spot has been changed",
    position: "bottom",
    visibilityTime: 1200,
  });
};

const Map = () => {
  const [spots, setSpots] = useState([]);
  const [sound, setSound] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/notification.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  const getSpots = async () => {
    let fetchedSpots = [];
    const querySnapshot = await getDocs(collection(database, "spots"));
    querySnapshot.forEach((doc) => {
      fetchedSpots.push(doc.data());
    });
    showToastFree();
    playSound();
    setSpots(fetchedSpots);
  };

  useEffect(() => {
    const q = query(collection(database, "spots"));
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      if (querySnapshot) {
        await getSpots();
      }
    });
  }, []);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 33.5391007,
        longitude: -5.1067849505058565,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    >
      {spots.map((spot, index) => {
        if (spot.isFree) {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(spot.loc.latitude),
                longitude: Number(spot.loc.longitude),
              }}
              image={require("../assets/images/free_spot.png")}
            />
          );
        } else {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(spot.loc.latitude),
                longitude: Number(spot.loc.longitude),
              }}
              image={require("../assets/images/busy_spot.png")}
            />
          );
        }
      })}
      <Marker
        coordinate={{
          latitude: 33.542093,
          longitude: -5.105102,
        }}
        image={require("../assets/images/busy_spot.png")}
      />
      <Marker
        coordinate={{
          latitude: 33.542035,
          longitude: -5.105145,
        }}
        image={require("../assets/images/free_spot.png")}
      />
      <Marker
        coordinate={{
          latitude: 33.541998,
          longitude: -5.105174,
        }}
        image={require("../assets/images/busy_spot.png")}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
