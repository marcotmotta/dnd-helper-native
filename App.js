import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [num, setNum] = useState(0)

  const handleSum = () => {
    setNum(num + 1)
  }

  return (
    <View style={styles.container}>
      <Text>{num}</Text>
      <Button title="Sum" onPress={handleSum}/>
      <StatusBar style="auto" />
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
