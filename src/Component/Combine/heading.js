import {StyleSheet, View, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {colors} from "../../Utilities/colors";
export default function Heading({label, back, Props, translucent}) {
  const styles = StyleSheet.create({
    headingBox: {
      width: "86%",
      height: 110,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: translucent ? "transparent" : "#fff",
    },
    heading: {
      fontSize: 20,
      color: translucent ? "#fff" : colors.secondary,
      marginBottom: 15,
    },
    backArrow: {
      position: "absolute",
      top: 67,
      left: 0,
    },
  });
  return (
    <View style={styles.headingBox}>
      {back && (
        <MaterialCommunityIcons
          name={"chevron-left"}
          style={styles.backArrow}
          size={30}
          color={translucent ? "#fff" : colors.main}
          onPress={() => Props.navigation.goBack()}
        />
      )}
      <Text style={styles.heading}>{label ? label : ""}</Text>
    </View>
  );
}
