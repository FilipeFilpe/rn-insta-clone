import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
