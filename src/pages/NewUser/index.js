import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import firebase from "../../config/firebaseconfig";
import styles from "./style";

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorRegister(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Create A Task Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your E-mail"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter A Password"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {errorRegister === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#BDBDBD"
          />
          <Text style={styles.warningAlert}>Invalid e-mail or password</Text>
        </View>
      ) : (
        <View />
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonRegister} onPress={register}>
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.login}>
        Already Registeres ?
        <Text
          style={styles.linkLogin}
          onPress={() => navigation.navigate("Login")}
        >
          Login...
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
