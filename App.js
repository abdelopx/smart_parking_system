import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import Toast from 'react-native-toast-message';

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); 


export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
