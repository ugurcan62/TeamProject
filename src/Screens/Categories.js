import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Card from "../Component/Categories/card";
import { options } from "../Utilities/categories";
import Heading from "../Component/Combine/heading";
export default function Categories(Props) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor="#fff" />
        <Heading label={"Categories"} />
        <View style={styles.mapview}>
          {options.map((v, i) => {
            return <Card Props={Props} data={v} indexing={i} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingBottom: 100,
  },
  mapview: {
    width: "93%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
