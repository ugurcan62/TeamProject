import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Card({data, indexing, Props}) {
  return (
    <TouchableOpacity
      onPress={() =>
        Props.navigation.navigate("SubCategories", {name: data.name})
      }
      style={styles.card}
    >
      <LinearGradient
        key={indexing}
        colors={[data.color1, data.color2]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{...styles.card, width: "100%", height: "100%"}}
      >
        <Image style={styles.banner} source={data.image} />
        <Text style={styles.heading}>{data?.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "47.6%",
    height: 160,
    borderRadius: 15,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 15,
  },
  banner: {
    width: "90%",
    resizeMode: "contain",
    position: "absolute",
    top: -63,
    right: -5,
  },
  heading: {
    fontSize: 16,
    color: "#fff",
    padding: 15,
    paddingBottom: 20,
  },
});
