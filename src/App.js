/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {Alert, Button} from 'react-native';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";

import { LocalNotification } from './NotifService'
import RemotePushController from "./RemotePushController";

const App: () => Node = () => {

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            LocalNotification(JSON.stringify(remoteMessage));
        });
        return unsubscribe;
    }, []);

    const handleButtonPress = () => {
        LocalNotification();
    };
    return (
        <View style={styles.screen} >
            <Text style={styles.title} > Push Notification1 </Text>
            <Button title={'Local Push Notification'} onPress={handleButtonPress} />
            <RemotePushController />
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
