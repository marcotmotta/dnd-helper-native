import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Spell from './components/Spell/Spell';
import { NavigationContainer } from '@react-navigation/native';
import Topbar from './components/Topbar/Topbar';

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Topbar />
      <Spell spell_name='fireball'/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
