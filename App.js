import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';


function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>

      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Options for Students</Text>

      <TouchableOpacity
       onPress={() => navigation.navigate('EnrolInSubjects')}
       style={{ backgroundColor: 'black', marginBottom: 8,}}>
       <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center'}}>Enrol In Subjects</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => navigation.navigate('BrowseTrainingPlan')}
        style={{ backgroundColor: 'black', marginBottom: 8, }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Browse Training Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate('ViewSchedule')}
         style={{ backgroundColor: 'black', marginBottom: 8, }}>
         <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>View Schedule</Text>
         </TouchableOpacity>

      <StatusBar style="auto" />

      <Text style={{ fontSize: 26, color: 'black', margin: 12 }}>Options for Lecturers</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate('BrowseLecturer')}
       style={{ backgroundColor: '#be1428', marginBottom: 8,}}>
       <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center'}}>Browse Student Enrolment Summary</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => navigation.navigate('BrowseMySubjects')}
        style={{ backgroundColor: '#be1428', marginBottom: 8, }}>
        <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Browse Enrolment Summary For My Subjects</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('BrowseAllSubjects')}
         style={{ backgroundColor: '#be1428', marginBottom: 8, }}>
         <Text style={{ fontSize: 20, color: '#fff', padding: 8, width: 305, textAlign: 'center' }}>Browse Enrolment Summary For Particular Subjects</Text>
         </TouchableOpacity>
      <StatusBar style="auto" />
    </View>

  );
}

function EnrolInSubjectsScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Enrol in Subjects Page</Text>
    </View>
  );
}

function BrowseTrainingPlanScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Browse Training Plan Page</Text>
    </View>
  );
}

function ViewScheduleScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>View Schedule Page</Text>
    </View>
  );
}

function BrowseLecturerScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Browse Student Enrolment Summary Page</Text>
    </View>
  );
}

function BrowseMySubjectsScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Browse My Subjects Page</Text>
    </View>
  );
}

function BrowseAllSubjectsScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 22, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Enrolment Buddy</Text>
      <Text style={{ fontSize: 26, color: 'black', margin: 15 }}>Browse All Subjects Page</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Landing">
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        {/* Student Screens */}
        <Stack.Screen name="EnrolInSubjects" component={EnrolInSubjectsScreen} />
        <Stack.Screen name="BrowseTrainingPlan" component={BrowseTrainingPlanScreen} />
        <Stack.Screen name="ViewSchedule" component={ViewScheduleScreen} />
        {/* Lecturer Screens */}
        <Stack.Screen name="BrowseLecturer" component={BrowseLecturerScreen} />
        <Stack.Screen name="BrowseMySubjects" component={BrowseMySubjectsScreen} />
        <Stack.Screen name="BrowseAllSubjects" component={BrowseAllSubjectsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
