import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button, List, Card, CardItem, Body } from "native-base";
import { WebBrowser } from "expo";
import { connect } from "react-redux";
import { MonoText } from "../components/StyledText";
import BudgetsView from "../components/BudgetsView";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text> Home</Text>
        </ScrollView>
        <View>
          <Button
            block
            success
            onPress={() => this.props.navigation.navigate("Budgets")}
          >
            <Text style={{ color: "white" }}>Move</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
