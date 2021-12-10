import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Stories from '../components/Stories';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
});
