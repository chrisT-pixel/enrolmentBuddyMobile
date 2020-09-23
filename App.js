import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

//student imports
import StudentLanding from './Student/StudentLanding';
import EnrolInSubjectsScreen from './Student/EnrolInSubjectsScreen';
import BrowseTrainingPlanScreen from './Student/BrowseTrainingPlanScreen';
import ViewScheduleScreen from './Student/ViewScheduleScreen';

//lecturer imports
import LecturerLanding from './Lecturer/LecturerLanding';
import BrowseLecturerScreen from './Lecturer/BrowseLecturerScreen';
import BrowseMySubjectsScreen from './Lecturer/BrowseMySubjectsScreen';
import BrowseAllSubjectsScreen from './Lecturer/BrowseAllSubjectsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

}
