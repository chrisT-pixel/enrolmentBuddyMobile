import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>

      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Options for Students</Text>

      <TouchableOpacity
       onPress={() => alert('Option 1 selected!')}
       style={{ backgroundColor: 'black', marginBottom: 8,}}>
       <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center'}}>Option 1</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => alert('Option 2 selected!')}
        style={{ backgroundColor: 'black', marginBottom: 8, }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => alert('Option 3 selected!')}
         style={{ backgroundColor: 'black', marginBottom: 8, }}>
         <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Option 3</Text>
         </TouchableOpacity>

      <StatusBar style="auto" />

      <Text style={{ fontSize: 26, color: 'black', margin: 12 }}>Options for Lecturers</Text>
      <TouchableOpacity
       onPress={() => alert('Option 1 selected!')}
       style={{ backgroundColor: '#be1428', marginBottom: 8,}}>
       <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center'}}>Option 1</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => alert('Option 2 selected!')}
        style={{ backgroundColor: '#be1428', marginBottom: 8, }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => alert('Option 3 selected!')}
         style={{ backgroundColor: '#be1428', marginBottom: 8, }}>
         <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Option 3</Text>
         </TouchableOpacity>
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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
});
