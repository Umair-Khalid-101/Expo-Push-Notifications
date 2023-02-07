import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

import { useStateContext } from "../context";

const PushNotifications = () => {
  const navigation = useNavigation();
  const [notification, setNotification] = useState();
  const notificationListener = useRef();
  const responseListener = useRef();
  const { expoToken } = useStateContext();

  // console.log("Token(PN):", expoToken);

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // PUSH NOTIFICATION FUNCTION
  const sendPushNotification = async (expoPushToken) => {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Muns TrashValet",
      body: "Your Valet is on the way!",
      data: { valet: "Your Valet is on the way" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PushNotifications</Text>
      {/* <Text>Your expo push token: {expoToken}</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttontext}>Go to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await sendPushNotification(expoToken);
        }}
      >
        <Text style={styles.buttontext}>Send Notification</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PushNotifications;

const styles = StyleSheet.create({
  button: {
    color: "blue",
    height: "7%",
    width: "70%",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: "2%",
  },
  buttontext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});
