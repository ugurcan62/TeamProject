import { StyleSheet, Text, Image, View } from "react-native";

export default function Card({data, identifier}) {
  return (
    <View key={identifier} style={styles.row}>
      <Image
        style={styles.banner}
        source={{
          uri: "https://yt3.googleusercontent.com/xIPexCvioEFPIq_nuEOOsv129614S3K-AblTK2P1L9GvVIZ6wmhz7VyCT-aENMZfCzXU-qUpaA=s900-c-k-c0x00ffffff-no-rj",
        }}
      />
      <Text style={styles.heading}>{data?.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  banner: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    borderRadius: 60,
  },
  heading: {
    fontSize: 12,
    color: "#ADADAD",
    marginLeft: 10,
  },
});
