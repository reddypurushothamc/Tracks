import React , {useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import {Context as AuthContext}  from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
     
     const { state, signup, clearErrorMessage  } = useContext(AuthContext);
     
    


     return (  
     <View style = {styles.container}>
          <NavigationEvents 
               onWillBlur = { () => { clearErrorMessage } }
          />
          <AuthForm 
               headerText = "Sign Up for Tracker"
               errorMessage = {state.errorMessage}
               submitButtonText = "Sign Up"
               //instead of this onSubmit = {({email, password}) => signup({ email, password }) }
               onSubmit = { signup }
          />
          <NavLink
              routeName = "Signin"
              text = "Already have an account ? Sign in instead" 
          />
         
     </View>
     )
};

SignupScreen.navigationOptions = () => {
     return  {
          header : () => false,
     };
};

const styles = StyleSheet.create({
     container : {
          flex : 1,
          justifyContent : 'center',
          marginBottom : 250
     }
    
});

export default SignupScreen;