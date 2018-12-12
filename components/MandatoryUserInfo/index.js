import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from "react-native";
import { Row, Grid } from "react-native-easy-grid";
import { Button, H1 } from "native-base";
import styles from "./styles";
class mandatoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { income: 0, expenses: [{ label: "", amount: "0" }] };
    this.handleExpenseLabelChange = this.handleExpenseLabelChange.bind(this);
    this.handleExpenseAmountChange = this.handleExpenseAmountChange.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleExpenseLabelChange = (value, i) => {
    const newLable = this.state.expenses.map((expense, sidx) => {
      if (i !== sidx) return expense;
      return { ...expense, label: value };
    });

    this.setState({ expenses: newLable });
  };

  handleExpenseAmountChange = (value, i) => {
    const newAmount = this.state.expenses.map((expense, sidx) => {
      if (i !== sidx) return expense;
      return { ...expense, amount: value };
    });

    this.setState({ expenses: newAmount });
  };

  handleAddExpense = () => {
    this.setState({
      expenses: this.state.expenses.concat([{ label: "", amount: "0" }])
    });
  };
  handleSubmitExpenses = async () => {
    let filled = false;
    this.state.expenses.forEach(expense => {
      let { amount, label } = { ...expense };
      if (label !== "" && amount !== 0) {
        filled = true;
      } else {
        filled = false;
      }
    });

    if (filled && parseFloat(this.state.income) > 0) {
      await this.props.addIncome(this.state.income);
      await this.props.addExpenses(this.state.expenses);
      await this.props.getBalance(this.props.income, this.props.expenses);
      this.props.navigation.navigate("userBudgets");
    } else {
      alert("Please add at least one mandatory expense and income");
    }
  };
  handleRemoveExpense = async (idx, i) => {
    await this.setState({
      expenses: this.state.expenses.filter((expense, sidx) => {
        if (i !== sidx) return expense;
      })
    });
    console.log(this.state.expenses);
  };

  render() {
    // console.log(this.state.expenses);
    const inputRows = this.state.expenses.map((idx, i) => (
      <Row key={`${i}`}>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>Label</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              value={idx.label}
              onChangeText={value => this.handleExpenseLabelChange(value, i)}
            />
          </View>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              keyboardType="numeric"
              value={idx.amount}
              onChangeText={value => this.handleExpenseAmountChange(value, i)}
            />
          </View>
        </View>
        <Button
          type="button"
          onPress={() => this.handleRemoveExpense(idx, i)}
          style={{ width: 30, justifyContent: "center", marginTop: 13 }}
        >
          <Text>x</Text>
        </Button>
      </Row>
    ));
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Grid>
          <H1>Income</H1>
          <Row>
            <View style={styles.inputWrap}>
              <Text style={styles.label}>Income</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputs}
                  onChangeText={value => this.setState({ income: value })}
                />
              </View>
            </View>
          </Row>
          <H1>Mandatory expenses</H1>
          {inputRows}
        </Grid>
        <Button block full onPress={() => this.handleAddExpense()}>
          <Text>Add</Text>
        </Button>
        <Button
          block
          full
          onPress={() => this.handleSubmitExpenses()}
          style={{ marginTop: 10 }}
        >
          <Text>Submit</Text>
        </Button>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  income: state.userInfo.income,
  expenses: state.userInfo.expenses
});

const mapActionsToProps = dispatch => {
  return {
    addIncome: (Income, navigation) =>
      dispatch(actionCreators.addIncome(Income, navigation)),
    addExpenses: (expenses, navigation) =>
      dispatch(actionCreators.addExpenses(expenses, navigation)),
    getBalance: (income, expenses) =>
      dispatch(actionCreators.getBalance(income, expenses))
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(mandatoryInfo);
