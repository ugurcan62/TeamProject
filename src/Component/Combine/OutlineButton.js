import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const BorderOutlineButton = ({title, onPress, width, height, textSize}) => {
  const styles = StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height,
      borderWidth: 1,
      borderColor: "#5F19F2",
      borderRadius: 6,
      backgroundColor: "transparent",
    },
    buttonText: {
      color: "#5F19F2",
      fontSize: textSize,
      fontWeight: "bold",
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BorderOutlineButton;
