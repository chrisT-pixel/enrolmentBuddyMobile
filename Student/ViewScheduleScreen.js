//import { StatusBar } from 'expo-status-bar';
//import 'react-native-gesture-handler';
import React from 'react';
//import { Ionicons } from '@expo/vector-icons';

//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/logo.png';
//import studentImg from '../assets/student-profile.jpg';

function ViewScheduleScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>View Schedule Page</Text>
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

export default ViewScheduleScreen;
