import { View, Text, StyleSheet } from "react-native";
import * as React from "react";
import { Link } from "react-router-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const NavBar = () => {
  return (
    <View style={styles.div}>
      <Link style={styles.link} to="/">
        <Text>Home</Text>
      </Link>
      <Link style={styles.link} to="/">
        <Text>My Account</Text>
      </Link>
      <Link style={styles.link} to="/">
        <Text>My Tweets</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    height: 40,
  },
});

export default NavBar;
