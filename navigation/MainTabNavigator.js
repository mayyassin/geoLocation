import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import mandatoryInfo from "../components/MandatoryUserInfo";
import RegisterationForm from "../components/RegisterationForm";
import userBudgets from "../components/Budgets";
import AddTransactionView from "../components/AddTransactionView";
import TransactionsView from "../components/TransactionsView";
import BudgetsView from "../components/BudgetsView";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Add: AddTransactionView,
    Budgets: BudgetsView,
    mandatoryInfo: mandatoryInfo,
    userBudgets: userBudgets,
    RegisterationForm: RegisterationForm
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "white"
      },
      headerTextStyle: {
        fontWeight: "bold",
        color: "black"
      }
    },
    cardStyle: {
      backgroundColor: "gray"
    }
  }
);

HomeStack.navigationOptions = {
  title: "Home",
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const LinksStack = createStackNavigator({

  Transaction: TransactionsView

});

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator({
   Transaction: TransactionsView

});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
