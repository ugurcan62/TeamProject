import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import Heading from "../Component/Combine/heading";
import Card from "../Component/Saved/card";
import { colors } from "../Utilities/colors";
import { useSelector } from "react-redux";

export default function SubCategories(Props) {
  const state = useSelector((state) => state.BookingApp);
  const events = state.events.filter(
    (e) => e.active.name == Props.route.params.name
  );
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <Heading
            Props={Props}
            back={true}
            label={Props.route.params.name ? Props.route.params.name : ""}
          />
          {events.map((v, i) => (
            <Card ViewDetails={true} data={v} key={i} Props={Props}/>
          ))}
        </View>
      </ScrollView>
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
