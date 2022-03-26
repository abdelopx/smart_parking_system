import { StyleSheet, Text, View, Dimensions } from "react-native";

import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
import React from "react";
import Map from "../components/Map";

const HomeScreen = () => {
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  return <View>
      <Map />
  </View>;
};

export default HomeScreen;

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
