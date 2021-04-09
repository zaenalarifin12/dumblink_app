import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Logo from "../assets/icons/logo.svg";
import SvgUri from "react-native-svg";

function Home({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <SvgUri width="200" height="200" uri={Logo} /> */}
          <View></View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.textLogin}
            >
              <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.buttonRegister}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.textTitle}>The Only Link You’ll Ever Need</Text>
        <Text style={styles.textSubtitle}>
          Add a link for your Social Bio and optimize your social media traffic.
        </Text>
        <Text style={styles.textSubtitle}>safe, fast and easy to use</Text>
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapperButton: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textLogin: {
    fontSize: 14,
  },
  buttonRegister: {
    fontSize: 14,
    padding: 10,
    backgroundColor: "#FF9F00",
    color: "#FFFF",
    borderRadius: 10,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    flex: 1,
    backgroundColor: "#FF9F00",
    paddingRight: 20,
    paddingLeft: 20,
  },
  textTitle: {
    fontSize: 72,
    color: "#FFFF",
  },
  textSubtitle: {
    fontSize: 24,
    color: "#FFFF",
  },
});
