import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigate } from "react-router-native";

import { logIn, signIn } from "../API/Auth";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    const body = {
      email,
      password,
    };

    const user = await signIn(body);
    navigate("/signinconfirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 40,
    width: "80%",
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 15,
    marginTop: 20,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SignInForm;
