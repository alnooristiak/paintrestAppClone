import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './screens/navigation/Navigation';

export default function App() {
  return (
    // <>
     <SafeAreaView >
       <StatusBar style="auto" hidden  />
       <Navigation />
     </SafeAreaView> 
    // </>
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
