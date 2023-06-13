import {StyleSheet, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {colors} from "../../Utilities/colors";
export default function AddButton({onPress}) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.addbutton}
      activeOpacity={0.9}
    >
      <MaterialCommunityIcons
        name={"plus"}
        style={styles.addIcon}
        size={26}
        color={"#fff"}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  addbutton: {
    width: 70,
    height: 70,
    backgroundColor: colors.main,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    bottom: 80,
    right: 20,
    elevation: 4,
  },
});
