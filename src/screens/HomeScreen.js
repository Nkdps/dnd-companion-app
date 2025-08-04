import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Modalità Giocatore" onPress={() => navigation.navigate('PlayerCharacter')} />
      <Button title="Modalità Master" onPress={() => navigation.navigate('MapMaster')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
});
