import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scanner from './components/Scanner';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Skincare Scanner</Text>
      <Scanner />
      {/* <StatusBar style='auto' /> */}
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
