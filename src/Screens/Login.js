import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {colors} from "../Utilities/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

export default function Login(Props) {
  const [secure, setSecure] = React.useState(true);
  return (
    <ImageBackground
      source={require("../Assets/PNG/login.jpg")}
      style={styles.container}
    >
      <Text style={styles.heading}>Hello!{" \n"} Welcome Back</Text>
      <View style={styles.inputbox}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.customInput} />
      </View>
      <View style={styles.inputbox}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.customInput} secureTextEntry={secure} />
        <MaterialCommunityIcons
          onPress={() => setSecure(!secure)}
          name={!secure ? "eye-off-outline" : "eye-outline"}
          style={styles.eye}
          size={20}
          color="#FFFFFF"
        />
      </View>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity
        onPress={() => {
          Props.navigation.navigate("Home");
        }}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{...styles.forgotPassword, ...styles.signupText}}>
        You don't have Account?<Text style={styles.link}> Signup</Text>
      </Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "#fff",
    width: "70%",
    textAlign: "center",
    fontWeight: "300",
    marginBottom: 50,
  },
  button: {
    width: "88%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.main,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
  },
  inputbox: {
    width: "88%",
    height: 53,
    marginTop: 25,
  },
  customInput: {
    width: "100%",
    height: 53,
    backgroundColor: "rgba(49, 62, 85, 0.78)",
    borderRadius: 8,
    color: "#FFFFFF",
    paddingLeft: 15,
    fontSize: 12,
    paddingTop: 5,
  },
  label: {
    fontSize: 9,
    color: "#fff",
    position: "absolute",
    top: 4,
    left: 10,
  },
  eye: {
    position: "absolute",
    right: 15,
    top: 17,
  },
  forgotPassword: {
    fontSize: 12,
    color: "#FFFFFF",
    width: "87%",
    textAlign: "right",
    marginTop: 5,
    fontWeight: "400",
  },
  signupText: {
    textAlign: "center",
  },
  link: {
    color: colors.main,
  },
});
