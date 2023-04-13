import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { container, formContainer } = style;
  return (
    <SafeAreaView style={container}>
        <View style={{flex: .5, justifyContent: 'center'}}>
            <Image style={{width: '400px' , height: '50%'}} source={require('../assets/popcorn-logo.png')}  />
        </View>
      <View style={formContainer}>
        <View style={{ alignSelf: "flex-start"}}>
          <Text style={{ fontWeight: "bold", fontSize: 28, color: '#F2BC57' }}>Login</Text>
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
        <ActionButton text={"Submit"}/>
        <Text style={{marginTop: 14, alignSelf: 'center', color: 'white'}}>
            Don't have an account? Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#17141C',
    alignItems: "center",
    gap: 4,
  },
  formContainer: {
    padding: 8,
    width: '80%'
  },
});

export default Login;
