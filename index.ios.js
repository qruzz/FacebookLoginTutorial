/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk'

export default class FacebookLoginTutorial extends Component {

   _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(
         function(result) {
            if (result.isCancelled) {
               alert('Login cancelled');
            } else {
               alert('Login success with permissions: '
               +result.grantedPermissions.toString());
            }
         },
         function(error) {
            alert('Login fail with error: ' + error);
         }
      );
   }

   render() {
      return (
         <View style={styles.container}>
            <TouchableOpacity onPress={this._fbAuth}>
               <Text>Login with Facebook</Text>
            </TouchableOpacity>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
});

AppRegistry.registerComponent('FacebookLoginTutorial', () => FacebookLoginTutorial);
