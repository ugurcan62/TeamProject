import React from "react";
import {StatusBar} from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Heading from "../Component/Combine/heading";
import Input from "../Component/Combine/input";
import Card from "../Component/Saved/card";
import {colors} from "../Utilities/colors";
import {options} from "../Utilities/saved";
import AddButton from "../Component/Combine/AddButton";

export default function Saved(Props) {
  const [active, setActive] = React.useState(true);
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <Heading label={"Saved"} />
          <Input placeholder="Search" />

          <View style={styles.tabsView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setActive(true)}
              style={active ? styles.activeView : styles.unactiveView}
            >
              <Text style={active ? styles.activeText : styles.unactiveText}>
                Saved
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setActive(false)}
              style={!active ? styles.activeView : styles.unactiveView}
            >
              <Text style={!active ? styles.activeText : styles.unactiveText}>
                Upcoming{" "}
              </Text>
            </TouchableOpacity>
          </View>
          {options.map((v, i) => (
            <Card Props={Props} data={v} key={i} />
          ))}
        </View>
      </ScrollView>
      <AddButton onPress={() => Props.navigation.navigate("EventForm")} />
    </>
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
    paddingBottom: 160,
    width: "90%",
    marginLeft: "5%",
  },

  mapview: {
    width: "93%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabsView: {
    width: "98%",
    height: 46,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  activeView: {
    width: "50%",
    backgroundColor: colors.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  activeText: {
    fontSize: 14,
    color: "#fff",
  },
  unactiveView: {
    width: "50%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },
  unactiveText: {
    fontSize: 14,
    color: colors.primary,
  },
});
