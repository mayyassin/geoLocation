import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { AsyncStorage } from "react-native";
import styles from "./styles";
// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";
import { Platform, ScrollView, StyleSheet, View } from "react-native";

class Location extends Component {
  static navigationOptions = {
    title: "Location"
  };
  async componentDidMount() {
    await this.props.getCurrentPositionThunk();
  }

  render() {
    if (!this.props.fetching) console.log(this.props.location);
    return (
      <View style={styles.container}>
        <List>
          <Text />
        </List>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
  location: state.location.position,
  fetching: state.location.fetching
});

const mapDispatchToProps = dispatch => ({
  getCurrentPositionThunk: options =>
    dispatch(actionCreators.getCurrentPositionThunk(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
