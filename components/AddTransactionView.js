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
import {
  Button,
  List,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Picker,
  Icon,
  Input
} from "native-base";
import { WebBrowser } from "expo";
import { connect } from "react-redux";
import { MonoText } from "../components/StyledText";
import * as actionCreators from "../store/actions";

class AddTransactionView extends React.Component {
  static navigationOptions = {
    title: "Add Expanses"
  };
  constructor(props) {
    super(props);
    this.state = {
      budget: undefined,
      amount: 0,
      label: ""
    };
  }
  onValueChange2(value) {
    this.setState({
      budget: value
    });
  }
  async sendTransaction() {
    if (this.state.budget === undefined) {
      alert("Please select a budget");
    } else if (this.state.label === "") {
      alert("Please enter a label");
    } else if (this.state.amount === 0) {
      alert("Please enter a valid value");
    } else {
      let setBudget = this.props.budgets.find(b => {
        if (b.id === this.state.budget) {
          return b;
        }
        return false;
      });
      setBudget.amount = setBudget.amount - this.state.amount;
      console.log(setBudget.amount + "is it updated?");
      await this.props.updateBudget(setBudget, this.props.navigation);
      await this.props.makeTransaction(
        { label: this.state.label, amount: this.state.amount },
        this.state.budget,
        this.props.navigation
      );
      // console.log(this.props.transactions);
      // this.props.navigation.goBack();
    }
  }
  renderCard(budget) {
    return (
      <Picker.Item key={budget.id} label={budget.label} value={budget.id} />
    );
  }
  render() {
    const budgets = this.props.profile.budgets;
    let ListItems;
    if (budgets) {
      ListItems = budgets.map(budget => this.renderCard(budget));
    }
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-dropdown" />}
                style={{ width: undefined }}
                placeholder="Select the Budget"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.budget}
                onValueChange={this.onValueChange2.bind(this)}
              >
                {ListItems}
              </Picker>
            </Item>
            <Item>
              <Input
                placeholder="Transaction..."
                onChangeText={value => this.setState({ label: value })}
              />
            </Item>
            <Item>
              <Input
                placeholder="0.00"
                keyboardType="decimal-pad"
                onChangeText={value =>
                  this.setState({ amount: parseInt(value) })
                }
              />
            </Item>
          </Form>
        </ScrollView>
        <View>
          <Button block success onPress={() => this.sendTransaction()}>
            <Text style={{ color: "white" }}>ADD</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
  budgets: state.budget.budgets,
  transactions: state.transaction.transactions
});
const mapDispatchToProps = dispatch => ({
  updateBudget: (budget, navigation) =>
    dispatch(actionCreators.updateBudget(budget, navigation)),
  makeTransaction: (transaction, budget_id, navigation) =>
    dispatch(actionCreators.addTransaction(transaction, budget_id, navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionView);

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
