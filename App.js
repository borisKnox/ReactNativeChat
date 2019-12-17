import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Text style={styles.textColor1}>Changes you make will automatically reload.</Text>
      <Text style={styles.textColor2}>Shake your phone to open the developer menu.</Text>
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

  textColor1:{
    fontSize: 18,
  },

  textColor2:{
    fontSize: 8,
  },

});
