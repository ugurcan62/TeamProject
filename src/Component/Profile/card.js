import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {colors} from "../../Utilities/colors";
export default function Card({index, data, Props}) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.main}
      key={index}
      onPress={
        data.navigate
          ? () => {
              Props.navigation.navigate(data.navigate);
            }
          : () => {}
      }
    >
      <View style={styles.fportion}>
        <MaterialCommunityIcons name={data.icon} size={24} color="black" />
        <Text style={styles.heading}>{data.name}</Text>
      </View>
      <Image
        style={styles.chevron}
        source={require("../../Assets/ICONS/chevronright.png")}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    width: "86%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 10,
    height: 60,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  fportion: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
  },
  fportionicon: {
    width: 25,
    height: 25,
    tintColor: "#000",
    marginHorizontal: 15,
  },
  heading: {
    marginLeft: 10,
    fontSize: 15,
    color: colors.primary,
  },
  chevron: {
    width: 13,
    height: 13,
    resizeMode: "contain",
    marginRight: 5,
  },
});
