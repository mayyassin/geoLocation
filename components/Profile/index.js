import React, { Component } from "react";
import { connect } from "react-redux";

import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
// NativeBase Components
import { Text } from "native-base";

// Style
import styles from "./styles";

// Actions
import * as actionCreators from "../../store/actions";

// Navigation

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile"
  });

  componentDidMount() {}

  render() {
    const prof = this.props.profile;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>
              {this.props.user.username.toUpperCase()}
            </Text>
            <Text style={styles.info}>Number {prof.phoneNo}</Text>
            <Text style={styles.info}>Email {prof.user.email}</Text>
            <Text style={styles.info}>Date Of Birth: {prof.dob}</Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddressList")}
              style={styles.buttonContainer}
            >
              <Text>Addresses</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Orders")}
              style={styles.buttonContainer}
            >
              <Text>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              danger
              onPress={() => this.props.logout(this.props.navigation)}
              style={styles.buttonContainer}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile
});

const mapActionsToProps = dispatch => ({
  logout: navigation => dispatch(actionCreators.logout(navigation))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Profile);
