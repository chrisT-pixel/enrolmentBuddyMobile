import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation='flipInY'
                source={require('../assets/TAFEcirclelogo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer]}
            animation="fadeInUpBig">
            <Text style={[styles.title, {
                color: colors.text
            }]}>Keep track of your subjects today!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <Animatable.View style={styles.buttonView}
            animation="pulse" 
            easing="ease-out" 
            iterationCount="infinite">
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignInScreen')}>
                    <Text 
                    style={styles.textSign}
                    >
                        Get Started
                    </Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
            </TouchableOpacity>
            </Animatable.View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'red'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  buttonView: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  button: {
    flexDirection: 'row',
    width: 200,
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});