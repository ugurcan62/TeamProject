import {StyleSheet, Text, Image, View, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {colors} from "../../Utilities/colors";

export default function Card({
  uniqueIndex,
  data,
  selected,
  onSelected,
  GotoNext,
  Props,
}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (onSelected) {
            onSelected();
          }
          if (GotoNext) {
            Props.navigation.navigate("SubCategories", {name: data.name});
          }
        }}
        style={styles.main}
        activeOpacity={0.8}
      >
        <LinearGradient
          key={uniqueIndex}
          colors={[data.color1, data.color2]}
          style={styles.card}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        >
          <Image style={styles.banner} source={data.image} />
          <Text style={styles.heading}>{data?.name}</Text>
        </LinearGradient>
        {selected && (
          <View style={styles.selected}>
            <Text style={styles.selectedText}>Selected</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 130,
    marginTop: 10,
  },
  card: {
    width: 110,
    height: 110,
    borderRadius: 15,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: 10,
  },
  banner: {
    width: "90%",
    resizeMode: "contain",
    position: "absolute",
    top: -88,
    right: -4,
  },
  heading: {
    fontSize: 12,
    color: "#fff",
    padding: 13,
    paddingBottom: 15,
  },
  selected: {
    width: 70,
    height: 18,
    borderRadius: 4,
    backgroundColor: colors.main,
    position: "absolute",
    top: 96,
    left: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedText: {
    fontSize: 10,
    color: "#fff",
  },
});
