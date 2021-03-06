import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import firebase from "../../config/firebaseconfig";
import style from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Task", { idUser: user.uid });
      }
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <Text style={styles.title}>Task</Text>
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
      {errorLogin === true ? (
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
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>
        Don't Have a Registration?
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("NewUser")}
        >
          Subscribe Now..
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
