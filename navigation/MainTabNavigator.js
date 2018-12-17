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
import UpdateProfile from "../components/UpdateProfile";
import userBudgets from "../components/Budgets";
import AddTransactionView from "../components/AddTransactionView";
import TransactionsView from "../components/TransactionsView";
import BudgetsView from "../components/BudgetsView";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Goals from "../components/Goal";
import Deposit from "../components/Deposit";
import GoalsView from "../components/GoalView";
import Location from "../components/Location";

const HomeStack = createStackNavigator(
  {
    Location: Location,
    Home: HomeScreen,

    mandatoryInfo: mandatoryInfo,

    UpdateProfile: UpdateProfile,
    Login: Login,
    Profile: Profile,
    Goals: Goals,
    Deposit: Deposit,
    GoalsView: GoalsView
  },
  {
    initialRouteName: "Location",
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
  //Links: LinksScreen

  Budgets: BudgetsView,
  userBudgets: userBudgets,
  Add: AddTransactionView
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
  // Settings: SettingsScreen

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
