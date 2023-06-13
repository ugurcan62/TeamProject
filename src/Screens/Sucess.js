import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../Utilities/colors";
import BorderOutlineButton from "../Component/Combine/OutlineButton";
import FillButton from "../Component/Combine/FilledButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Sucess(Props) {
  return (
    <>
      <View style={styles.scrollView}>
        <MaterialCommunityIcons
          name={"check-circle-outline"}
          size={110}
          color={colors.main}
        />
        <Text style={styles.text}>Event succesfully created!</Text>
      </View>
      <View style={styles.buttonBox}>
        <BorderOutlineButton
          width={"45%"}
          height={50}
          textSize={16}
          title={"Back"}
          onPress={()=>Props.navigation.goBack()}
        />
        <FillButton
          width={"45%"}
          height={51}
          textSize={16}
          onPress={()=>Props.navigation.navigate('Home')}
          title={"View event"}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
    color: colors.main,
    fontWeight: "300",
    textAlign: "center",
  },
  buttonBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
});
