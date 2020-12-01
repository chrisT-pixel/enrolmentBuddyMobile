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

 import React, { Component } from 'react'
 import {View, Image, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
 import HomeScreen from './homeScreen.js'

 class LoginScreen extends Component {
     state = {
         email: '',
         password: ''
     }

     //Sets user's text inputs into the State.
     handleEmail = (text) => {
         this.setState({email: text})
     }
     handlePassword = (text) => {
         this.setState({password: text})
     }
     //Displays the current State when called
     login = (email, pass) => {
        alert('email: ' + email + '\npassword: ' + pass);
     }

     render() {
         return(
            <View style = {styles.container}>
                <View style = {styles.columnContainer}>
                    <View >
                        <Image 
                        style={styles.headerImage_TAFELogo}
                        source={require('../assets/tafe_logo3.png')} />
                    </View>
                    <View style = {styles.inputView}>
                        <Image 
                            style={styles.passwordImage}
                            source={require('../assets/usernameIcon.png')}/>
                        <TextInput 
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Username / Email"
                            placeholderTextColor = "#ff6173"
                            autoCapitalize = "none"
                            onChangeText = {this.handleEmail}/>
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
                            onChangeText = {this.handlePassword} />
                    </View>
                    <Text style = {styles.subInputText}>
                        Forgot your password? Click HERE
                    </Text> 
                    <View style = {styles.inputView} >
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {
                                () => this.login(this.state.email, this.state.password)
                                }>
                            <Text 
                                style = {styles.submitButtonText}> Login 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
     }
 }
 export default LoginScreen

 const styles  = StyleSheet.create({
     container:{
        flex: 1,
        paddingTop: 23
     },
     columnContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
     },
     inputView:{
        height: 50,
        //backgroundColor: 'steelblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     },
     headerImage_TAFELogo:{
        paddingBottom: 200,
        width: 325,
        resizeMode: 'contain'
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
         width: 300
     },
     submitButtonText:{
         textAlign: "center",
         color: 'white'
     }
 })