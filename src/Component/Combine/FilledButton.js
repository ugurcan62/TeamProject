import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const FillButton = ({title, onPress, width, height, textSize}) => {
  const styles = StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height,
      backgroundColor: "#5F19F2",
      borderRadius: 6,
      elevation: 1,
    },
    buttonText: {
      color: "#FFF",
      fontSize: textSize,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FillButton;
