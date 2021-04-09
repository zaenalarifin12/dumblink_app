import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.button}>Register</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.textBottom}>Already have an account ? Klik </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkBottom}>Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    paddingTop: 120,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    fontSize: 18,
    padding: 10,
    marginTop: 20,
    backgroundColor: "rgba(210, 210, 210, 0.25)",
    color: "#333333",
    borderColor: "#333333",
    borderRadius: 5,
    borderWidth: 2,
  },
  button: {
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#FF9F00",
    color: "#FFFF",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textBottom: {
    fontSize: 18,
  },
  linkBottom: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
