import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PinScreen from './screens/PinScreen';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar style="auto" hidden  />
      {/* Home screen section */}
      {/* <HomeScreen /> */}
      <PinScreen />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
