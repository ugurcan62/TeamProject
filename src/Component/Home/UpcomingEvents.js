import {StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function UpcomingEventsCard({data, uniqueKey1, onPress}) {
  return (
    <TouchableOpacity
      style={styles.card}
      key={uniqueKey1}
      onPress={() => onPress()}
      activeOpacity={0.8}
    >
      <Image
        style={styles.image}
        source={typeof data.url !== "number" ? {uri: data.uri} : data?.url}
      />
      <View style={styles.blurPart}>
        <Text style={styles.heading}>See Details</Text>
      </View>
      <View style={styles.textArea}>
        <View style={styles.part1}>
          <Text>{data.title}</Text>
          <View style={styles.contentBox}>
            {/* <MaterialCommunityIcons
              name={"map-marker-outline"}
              size={12}
              color="#ADADAD"
            /> */}
            {/* <Text style={styles.location}>{data.location}</Text> */}
            <MaterialCommunityIcons
              name={"calendar-refresh-outline"}
              size={12}
              color="#ADADAD"
              style={styles.icon}
            />
            <Text style={styles.location}>
              {data.date ? data.date : data.startDate}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 300,
    minHeight: 220,
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 170,
    resizeMode: "cover",
    borderRadius: 10,
  },
  blurPart: {
    width: "100%",
    height: 35,
    backgroundColor: "#F5F5F580",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    position: "absolute",
    top: 135,
  },
  heading: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
  },
  textArea: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  part1: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 5,
  },
  contentBox: {
    display: "flex",
    flexDirection: "row",
  },
  location: {
    fontSize: 10,
    color: "#ADADAD",
    marginLeft: 3,
  },
  icon: {
    marginRight: 5,
    marginLeft: 0,
  },
});
