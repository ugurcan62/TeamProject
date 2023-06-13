import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FillButton from "../Combine/FilledButton";
export default function Card({identifier, data, ViewDetails, Props}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      key={identifier}
      style={styles.card}
      onPress={() => {
        Props.navigation.navigate("EventDetails", {data: data});
      }}
    >
      <Image
        style={styles.cardImage}
        source={typeof data.url !== "number" ? {uri: data.uri} : data?.url}
      />
      <View style={styles.contentBox}>
        <Text style={styles.heading}>{data.title}</Text>

        <View>
          <View style={styles.rowbox}>
            {/* <MaterialCommunityIcons
              name={"map-marker-outline"}
              size={12}
              color="#ADADAD"
            />

            <Text style={styles.subheading}>{data.location}</Text> */}
          </View>
          <View style={{...styles.rowbox, marginTop: 3}}>
            <MaterialCommunityIcons
              name={"calendar-refresh-outline"}
              size={12}
              color="#ADADAD"
            />

            <Text style={styles.subheading}>{data.date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentBox1}>
        <Text style={styles.subheading}>
          {data.price !== "Free" && !ViewDetails ? "Starting From" : ""}
        </Text>
        {ViewDetails ? (
          <FillButton
            onPress={() => {
              Props.navigation.navigate("EventDetails", {data: data});
            }}
            textSize={12}
            width={70}
            height={40}
            title="View"
          />
        ) : (
          <Text style={styles.price}>{data.price}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 15,
    height: 110,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: "cover",
  },
  contentBox: {
    width: "50%",
    height: 90,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  heading: {
    fontSize: 13,
  },
  subheading: {
    fontSize: 10,
    color: "#ADADAD",
    marginLeft: 5,
  },
  rowbox: {
    display: "flex",
    flexDirection: "row",
  },
  contentBox1: {
    width: "30%",
    height: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  price: {
    fontSize: 16,
    textAlign: "right",
    width: "60%",
  },
});
