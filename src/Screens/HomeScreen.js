import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PushNotifications")}
      >
        <Text style={styles.buttontext}>Go to Push Notifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
