import React, { useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import  { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = () => {
    
    const { state, signin }  = useContext(Context);

    return (
        <View style = {styles.container}>
            <NavigationEvents 
                onWillBlur = { () => { clearErrorMessage } }
            />
            <AuthForm
                headerText = "Sin In to your Account"
                errorMessage = {state.errorMessage}
                submitButtonText = "Sign In"
                //instead of this onSubmit = {({email, password}) => signin({ email, password }) }
                onSubmit = { signin }
                
            />
            <NavLink 
                text = "Don't have an account signup instead"
                routeName = "Signup"
            /> 
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        marginBottom : 250
    }
});

export default SigninScreen;