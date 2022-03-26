import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

import { useState, useEffect } from "react";
import { database } from "../Core/Config";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import React from "react";

const Map = () => {
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSpots = async () => {
    let fetchedSpots = [];
    const querySnapshot = await getDocs(collection(database, "spots"));
    querySnapshot.forEach((doc) => {
      fetchedSpots.push(doc.data());
    });
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
