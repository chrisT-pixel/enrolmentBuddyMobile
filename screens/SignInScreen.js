/**
 * Author: Nathan Genikas
 * Date: 19/10/2020
 * Version 1.0
 * 
 * Descripton:
 * Initial State starts of defined as an empty string.
 * handleEmail and the handlePassword functions are used for updating State.
 * 
 * The login() function will just alert the current value of the state.
 * 
 * Note: Currently there is a Text properties to disable auto captialisation
 * 
 * 
 * TODO: 
 * 1) Update Login() function with logic (i.e. grant or deny access) and redirection based on userType.
 */

import React from 'react'
import * as Animatable from 'react-native-animatable';
import {View, Image, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './RootStackScreen';
import { State } from 'react-native-gesture-handler';


const LoginScreen = ( {navigation} ) => {
    const [email, setEmail] = React.useState (null);
    const [password, setPassword] = React.useState(null);
    //const {signIn} = React.useContext(AuthContext);
 
    const handleEmail = (text) => {
        //Validate Email 
            const expression = /[a-z]{1,14}\.[a-z]{1,14}@student.edu.au/
            if (expression.test(text)){
                setEmail(text);
            }else{console.log('Email Validation Failure: Invalid Address');}
    }
    const handlePassword = (text) => {
        setPassword(text);
    }

    //Displays the current State when called
    const loginHandler = () => {
       alert('email: ' + email + '\npassword: ' + password);
       //Going to send Email & Password. Receive Token and UserDetails.
       //Validation on Server Side.
       //Response, Pass/ Fail. Need responses for both.
       if(email != null){navigation.navigate('HomeScreen');}
       
    }

    return(
           <View style = {styles.container}>
                <View style={styles.header}>
                    <Animatable.Image 
                       style={styles.headerImage_TAFELogo}
                       animation='flipInY'
                       source={require('../assets/tafesa.png')} />
                </View>
                 <Animatable.View style = {styles.columnContainer} animation="fadeInUpBig">

                   <View style = {styles.inputView}>
                       <Image 
                           style={styles.passwordImage}
                           source={require('../assets/usernameIcon.png')}/>
                       <TextInput 
                           style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Email"
                           placeholderTextColor = "#ff6173"
                           autoCapitalize = "none"
                           onChangeText = {(text) => handleEmail(text)} />
                   </View>
                   <View style = {styles.inputView}>
                       <Image 
                           style={styles.passwordImage}
                           source={require('../assets/passwordIcon.png')}/>

                       <TextInput 
                           style = {styles.input}
                           secureTextEntry = {true}
                           underlineColorAndroid = "transparent"
                           placeholder = "Password"
                           placeholderTextColor = "#ff6173"
                           autoCapitalize = "none"
                           onChangeText = {(text) => handlePassword(text)} />
                   </View>
                   <View style = {styles.inputView} >
                       <TouchableOpacity
                           style = {styles.submitButton}
                           onPress={() => loginHandler()}>
                           <Text 
                               style = {styles.submitButtonText}> Login 
                           </Text>
                       </TouchableOpacity>
                   </View>
               </Animatable.View>
           </View>
       )
    }

export default LoginScreen;

const styles  = StyleSheet.create({
    container:{
       flex: 1,
       paddingTop: 23,
       backgroundColor: 'red'
    },
    header:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'red'
    },
    headerImage_TAFELogo:{
        position: 'absolute',
        margin: 0,
     },
    columnContainer:{
       flex: 4,
       borderTopLeftRadius: 50,
       borderTopRightRadius: 50,
       flexDirection: 'column',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       backgroundColor: 'white'
       
    },
    inputView:{
       height: 50,
       //backgroundColor: 'steelblue',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
    },
    passwordImage:{
       height: 49,
       width: 49,
       borderRadius: 25,
    },
    input: {
        textAlign: "center",
        marginLeft: -50,
        height: 50,
        width: 250,
        borderColor: '#db120b',
        borderWidth: 1,
        borderRadius: 25,
    },
    subInputText:{
       color: 'red',
   },
    submitButton:{
        backgroundColor: '#db120b',
        padding: 10,
        margin: 15,
        height: 40,
        width: 300,
        borderRadius: 10
    },
    submitButtonText:{
        textAlign: "center",
        color: 'white'
    }
})