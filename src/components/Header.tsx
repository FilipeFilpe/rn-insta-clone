import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>InstaClone [TESTE]</Text>
      <View style={styles.icons}>
        <Feather name="plus-square" size={24} color="black" style={styles.icon} />
        <Feather name="heart" size={24} color="black" style={styles.icon} />
        <Feather name="message-circle" size={24} color="black" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#c1c1c1',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    marginLeft: 15
  }
});
