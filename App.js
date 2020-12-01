import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();
//const AuthContext = React.createContext();
const mockData = require('./mockData.json');

const App = () => {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN': console.log('Reducer: RESTORE_TOKEN');return{
          ...prevState,
          userToken: action.token,
          isLoading: false,};
        case 'SIGN_IN': console.log('Reducer: SIGN_IN: userToken: ' + action.token);return{
          ...prevState,
          isSignout: false,
          userToken: action.token,};
          
        case 'SIGN_OUT': console.log('Reducer: SIGN_OUT');return{
          ...prevState,
          isSignout: true,
          userToken: null,};
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userName: null,
    }
  );


  // After Starting Up Application. Check to see if a valid token is still in storage.
  React.useEffect(
    ()=> { 
      const bootstrapAsync = async () => {
        let userToken = state.userToken;
        if (userToken == null){console.log('dispatching SIGN_IN');dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });console.log('After dispatch SIGN_IN userToken: ' + userToken)};
        // try {userToken = await AsyncStorage.getItem('userToken');
        // console.log('Success in fetching data: ' + userToken)
        // }catch (e) {
        //   console.log('Restore Token Failed Error:/n'+e)
        // }
        //   //After Restoring Token, Validate token.
        //   //This will switch to the Home Screen or SignIn Screen.
        //   dispatch({type: 'RESTORE_TOKEN', token: userToken});
      };
    bootstrapAsync();
    },
    []
  );
  const authContext = React.useMemo(() => ({
    signIn: async data => {
      // Need to send data (Username, Password,etc.) to server and get a token.
      // Need to handle Errors on Sign in fail.
      // Need to store token using 'AsyncStorage'
      console.log('authContext Triggered: SIGN_IN');
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => {console.log('authContext Triggered: SIGN_IN'); dispatch({ type: 'LOGOUT' })},
  }),
  []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen/>
        </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;