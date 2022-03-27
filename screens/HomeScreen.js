import { StyleSheet, Text, View, Dimensions } from "react-native";


import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
import React from "react";
import Map from "../components/Map";
import HeaderNav from "../components/HeaderNav";



const HomeScreen = () => {
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <View style={styles.nav}>
        <HeaderNav />
      </View>
      <Map />
    </View>
  );
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
  nav: {
    position: "absolute",
    marginTop: 40,
    padding: 10,
    borderRadius: 30,
    zIndex: 120,
    backgroundColor: "#2B6426",
    width: "80%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
