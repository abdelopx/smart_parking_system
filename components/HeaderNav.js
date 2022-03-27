import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";


const HeaderNav = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>AUI's Smart Paking System</Text>
    </SafeAreaView>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
});
