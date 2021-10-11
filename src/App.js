/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import { Alert } from 'react-native';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";





const App: () => Node = () => {

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
        });

        return unsubscribe;
    }, []);



  return (
        <View style={styles.screen} >
            <Text style={styles.title} > Push Notification </Text>
        </View>
  );
};

const styles = StyleSheet.create({
  screen: {
      flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  title: {
      flex:1,
      textAlign:"center",
      color:"rgb(0,0,0)",
      alignSelf:"center",
  },
});

export default App;
