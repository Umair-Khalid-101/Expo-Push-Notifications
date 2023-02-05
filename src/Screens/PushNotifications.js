import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const PushNotifications = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PushNotifications</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttontext}>Go to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert("Notification", "Notifications sent successfully!")
        }
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
