import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from "react-native";

import { Input } from "native-base";

import { Row, Grid } from "react-native-easy-grid";
import { Button, H1, Item, Picker, Icon } from "native-base";
import styles from "./styles";
class userBudgets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBudget: 0,
      budgets: [{ category: "", label: "", amount: "0" }]
    };
    this.handleAddBudget = this.handleAddBudget.bind(this);
    this.handleBudgetLabelChange = this.handleBudgetLabelChange.bind(this);
    this.handleBudgetAmountChange = this.handleBudgetAmountChange.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
  }

  handleBudgetLabelChange = (value, i) => {
    const newLable = this.state.budgets.map((budget, sidx) => {
      if (i !== sidx) return budget;
      return { ...budget, label: value };
    });

    this.setState({ budgets: newLable });
  };

  handleBudgetAmountChange = (value, i) => {
    let oldAmount = 0;
    // let value = 0;
    // if (e.nativeEvent.text.length > 0) {
    //   value = parseFloat(e.nativeEvent.text);
    // }
    // value = parseFloat(value);

    if (
      this.state.totalBudget < this.props.balance &&
      value + this.state.totalBudget < this.props.balance
    ) {
      const newAmount = this.state.budgets.map((budget, sidx) => {
        if (i !== sidx) return budget;
        oldAmount = budget.amount;
        return { ...budget, amount: value + "" };
      });
      this.setState(prevState => ({
        budgets: newAmount,
        // totalBudget: prevState.totalBudget - parseFloat(oldAmount) + value
        totalBudget: prevState.totalBudget - oldAmount + value
      }));
    } else {
      alert("You can't exceed you current balance");
    }
  };

  handleAddBudget = () => {
    this.setState({
      budgets: this.state.budgets.concat([
        { category: "", label: "", amount: "0" }
      ])
    });
  };
  handleSubmitBudget = () => {
    let filled = false;
    this.state.budgets.forEach(budget => {
      let { amount, category, label } = { ...budget };

      if (category !== "" && label !== "" && amount !== "0") {
        filled = true;
      }
    });
    if (filled) {
      this.state.budgets.forEach(budget =>
        this.props.addBudget(budget, this.props.navigation)
      );
    } else {
      alert("Please make sure that you fill in all the boxes");
    }
  };
  handleRemoveBudget = i => {
    this.setState({
      budgets: this.state.budgets.filter((budget, sidx) => {
        if (i !== sidx) return budget;
      })
    });
  };

  onValueChange2(value, i) {
    const newCategory = this.state.budgets.map((budget, sidx) => {
      if (i !== sidx) return budget;
      return { ...budget, category: value };
    });

    this.setState({
      budgets: newCategory
    });
  }

  render() {
    const inputRows = this.state.budgets.map((idx, i) => (
      <Row key={`${i}`}>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>Label</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={idx.label}
              style={styles.inputs}
              onChangeText={value => this.handleBudgetLabelChange(value, i)}
            />
          </View>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <Input
              style={styles.inputs}
              // keyboardType="numeric"
              value={idx.amount}
              clearTextOnFocus={true}
              onChangeText={value =>
                this.handleBudgetAmountChange(parseFloat(value), i)
              }
              // onEndEditing={e => this.handleBudgetAmountChange(e, i)}
            />
          </View>
        </View>
        <Button
          type="button"
          onPress={() => this.handleRemoveBudget(i)}
          style={{ width: 30, justifyContent: "center", marginTop: 13 }}
        >
          <Text>x</Text>
        </Button>
        <Row>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-dropdown" />}
              placeholder="Select the Budget"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={idx.category}
              onValueChange={value => this.onValueChange2(value, i)}
            >
              <Picker.Item key={1} label={"Food"} value={"Food"} />
              <Picker.Item key={2} label={"Health"} value={"Health"} />
              <Picker.Item key={3} label={"Emergency"} value={"Emergency"} />
              <Picker.Item
                key={4}
                label={"Entertainment"}
                value={"Entertainment"}
              />
              <Picker.Item key={5} label={"Others"} value={"Others"} />
            </Picker>
          </Item>
        </Row>
      </Row>
    ));
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Grid>
          <H1>Current Balance {this.props.balance} KD</H1>

          <H1>Your budgets</H1>
          {inputRows}
        </Grid>
        <Button block full onPress={() => this.handleAddBudget()}>
          <Text>Add</Text>
        </Button>
        <Button
          block
          full
          onPress={() => this.handleSubmitBudget()}
          style={{ marginTop: 10 }}
        >
          <Text>Submit</Text>
        </Button>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.userInfo.balance
});

const mapActionsToProps = dispatch => {
  return {
    addBudget: (budget, navigation) =>
      dispatch(actionCreators.addBudget(budget, navigation))
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(userBudgets);
