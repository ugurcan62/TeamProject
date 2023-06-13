import React from "react";
import {EvilIcons} from "@expo/vector-icons";
//import all the components we are going to use
import {StyleSheet, View, TextInput} from "react-native";
import {colors} from "../../Utilities/colors";

const Input = ({placeholder}) => {
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        placeholderTextColor={"#ABABAB"}
      />
      <EvilIcons
        style={styles.icon}
        name="search"
        size={24}
        color={colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    height: 54,
    borderRadius: 10,

    width: "100%",
  },
  input: {
    width: "80%",
    height: 54,
    marginLeft: 20,
    fontSize: 14,
    color: colors.primary,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Input;
