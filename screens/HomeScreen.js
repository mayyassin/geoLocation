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
// Actions
import * as actionCreators from "../store/actions";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  async componentDidMount() {
    await this.props.checkForExpiredToken();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.fetchBudgets();
    }
  }

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
          <Button onPress={() => this.props.navigation.navigate("Login")}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});
const mapDispatchToProps = dispatch => ({
  fetchBudgets: () => dispatch(actionCreators.fetchBudgets()),
  checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
