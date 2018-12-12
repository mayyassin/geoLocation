import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from "react-native";
import { H1 } from "native-base";
import styles from "./styles";

class RegisterationForm extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    this.props.navigation.navigate("mandatoryInfo");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Image
            style={styles.bgImage}
            source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/nolan/40/000000/email.png"
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
            <Image
              style={styles.inputIcon}
              source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="First Name"
              underlineColorAndroid="transparent"
              onChangeText={firstName => this.setState({ firstname })}
            />
            <Image
              style={styles.inputIcon}
              source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Last name"
              underlineColorAndroid="transparent"
              onChangeText={lastName => this.setState({ lastName })}
            />
            <Image
              style={styles.inputIcon}
              source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Monthley Income"
              underlineColorAndroid="transparent"
              onChangeText={income => this.setState({ income })}
            />
            <Image
              style={styles.inputIcon}
              source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
            />
          </View>
          <TouchableOpacity
            style={styles.btnForgotPassword}
            onPress={() => this.onClickListener("restore_password")}
          >
            <Text style={styles.btnText}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener("login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.onClickListener("register")}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default RegisterationForm;
