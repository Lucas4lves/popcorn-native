import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    container,
    formContainer,
    imageContainer,
    title,
    loginTitle,
    callToActionSign,
  } = style;
  return (
    <SafeAreaView style={container}>
      <View style={imageContainer}>
        {/* <Image source={require("../assets/popcorn-logo.png")} /> */}
      </View>
      <View style={formContainer}>
        <View style={title}>
          <Text style={loginTitle}>Login</Text>
        </View>
        <InputField
          handleInput={setUsername}
          value={username}
          fieldName={"Username"}
        />

        <InputField
          handleInput={setPassword}
          value={password}
          fieldName={"Password"}
        />
        <ActionButton text={"Submit"} />
        <Text style={callToActionSign}>Don't have an account? Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#17141C",
    alignItems: "center",
    gap: 4,
  },
  formContainer: {
    padding: 8,
    width: "80%",
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  title: {
    alignSelf: "flex-start",
  },
  loginTitle: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#F2BC57",
  },
  callToActionSign: { marginTop: 14, alignSelf: "center", color: "white" },
});

export default Login;
