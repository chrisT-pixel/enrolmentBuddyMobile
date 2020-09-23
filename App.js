import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

//import StudentLanding from './Student/StudentLanding';
//import LecturerLanding from './Lecturer/LecturerLanding';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';
import lecturerImg from './assets/lecturer-profile.jpg';
import studentImg from './assets/student-profile.jpg';

function Landing(props) {
  const isStudent = props.isStudent;
  if (isStudent) {
    return <StudentLanding />;
  }
  return <LecturerLanding />;
}

function StudentLanding(props) {
  return (

    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 18, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Tafe Buddy</Text>
      <Text style={{ fontSize: 22, color: 'black', margin: 12 }}>Hi *StudentName*</Text>
      <Image source={studentImg} style={{ width: 305, height: 150 }} />
      <Text style={{ fontSize: 18, color: 'black', margin: 25 }}>Welcome to the Tafe Buddy System. Your options are below.</Text>
      </View>

  );
}

function LecturerLanding(props) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 90 }} />
      <Text style={{ fontSize: 18, color: 'black', margin: 5, backgroundColor: '#efefef', padding: 8, width: 305, }}>Tafe Buddy</Text>
      <Text style={{ fontSize: 22, color: 'black', margin: 12 }}>Hi *LecturerName*</Text>
      <Image source={lecturerImg} style={{ width: 305, height: 150 }} />
      <Text style={{ fontSize: 18, color: 'black', margin: 25 }}>Welcome to the Tafe Buddy System. Your options are below.</Text>
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

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StudentTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        children={()=><Landing isStudent={true} />}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => (
              <Ionicons name="md-home" size={32} color="#be1428" />
          ),
        }}
      />

      <Tab.Screen
        name="Enrol"
        component={EnrolInSubjectsScreen}
        options={{
          tabBarLabel: 'Enrol',
          tabBarIcon: ({}) => (
            <Ionicons name="md-add" size={32} color="#be1428" />
          ),
        }}
      />
      <Tab.Screen
        name="Training Plan"
        component={BrowseTrainingPlanScreen}
        options={{
          tabBarLabel: 'Training Plan',
          tabBarIcon: ({}) => (
            <Ionicons name="md-paper" size={32} color="#be1428" />
          ),
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={ViewScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({}) => (
            <Ionicons name="md-calendar" size={32} color="#be1428" />
          ),
        }}
      />



    </Tab.Navigator>
  );
}

function LecturerTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        children={()=><Landing isStudent={false} />}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => (
              <Ionicons name="md-home" size={32} color="#be1428" />
          ),
        }}
      />

      <Tab.Screen
        name="BrowseLecturer"
        component={BrowseLecturerScreen}
        options={{
          tabBarLabel: 'Browse Student Enrolment Summary',
          tabBarIcon: ({}) => (
              <Ionicons name="md-search" size={32} color="#be1428" />
          ),
        }}
      />

      <Tab.Screen
        name="BrowseMySubjects"
        component={BrowseMySubjectsScreen}
        options={{
          tabBarLabel: 'Browse My Subjects',
          tabBarIcon: ({}) => (
              <Ionicons name="md-person" size={32} color="#be1428" />
          ),
        }}
      />

      <Tab.Screen
        name="BrowseAllSubjects"
        component={BrowseAllSubjectsScreen}
        options={{
          tabBarLabel: 'Browse All Subjects',
          tabBarIcon: ({}) => (
              <Ionicons name="md-school" size={32} color="#be1428" />
          ),
        }}
      />



    </Tab.Navigator>
  );
}


export default function App(props) {

  const isStudent = true;

  if (isStudent) {

    return <NavigationContainer>
      <StudentTabs />
    </NavigationContainer>;

  }

  else{

    return <NavigationContainer>
      <LecturerTabs />
    </NavigationContainer>;

  }

  //return (





//  );
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
