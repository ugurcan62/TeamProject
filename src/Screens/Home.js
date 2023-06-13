import React from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, ScrollView, Image, Text} from "react-native";
import Card from "../Component/Categories/slidercard";
import {colors} from "../Utilities/colors";
import {options} from "../Utilities/categories";
import {options as savedOption} from "../Utilities/saved";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Input from "../Component/Combine/input";
import SavedCard from "../Component/Saved/card";
import UpcomingEventsCard from "../Component/Home/UpcomingEvents";
import {useSelector} from "react-redux";

export default function Home(Props) {
  const state = useSelector((state) => state.BookingApp);
  const events = state.events;

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <View style={styles.navbar}>
            <View>
              <View style={styles.locationbox}>
                <MaterialCommunityIcons
                  name={"map-marker"}
                  style={styles.addIcon}
                  size={14}
                  color={"#ADADAD"}
                />
                <Text style={styles.locationText}>Łódź</Text>

                <MaterialCommunityIcons
                  name={"chevron-down"}
                  style={styles.chevron}
                  size={16}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.userName}>Politechnika Łódzka</Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name={"bell-outline"}
                style={styles.chevron}
                size={22}
                color={colors.main}
              />
              <Image
                style={styles.userimage}
                source={require("../Assets/PNG/Saved/user.png")}
              />
            </View>
          </View>
          <Input placeholder="Search" />
          <View style={styles.headingBox}>
            <Text style={styles.heading}>Categories</Text>
            <Text style={{...styles.heading, ...styles.subheading}}>
              See all
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.horizontal}
            showsHorizontalScrollIndicator={false}
          >
            {options.map((v, index) => (
              <Card
                GotoNext={true}
                Props={Props}
                uniqueIndex={index}
                data={v}
              />
            ))}
          </ScrollView>
          <View style={styles.headingBox}>
            <Text style={styles.heading}>Upcoming Event</Text>
            <Text style={{...styles.heading, ...styles.subheading}}>
              See all
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.horizontal}
            showsHorizontalScrollIndicator={false}
          >
            {events.map((v, index) => (
              <UpcomingEventsCard
                onPress={() => {
                  Props.navigation.navigate("EventDetails", {data: v});
                }}
                uniqueKey1={index}
                data={v}
              />
            ))}
          </ScrollView>
          <View style={styles.headingBox}>
            <Text style={styles.heading}>Events around</Text>
            <Text style={{...styles.heading, ...styles.subheading}}>
              See all
            </Text>
          </View>
          {savedOption.map((v, i) => (
            <SavedCard Props={Props} data={v} identifier={i} />
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
    paddingTop: 50,
    width: "90%",
    marginLeft: "5%",
    paddingBottom: 100,
  },
  horizontal: {
    width: "100%",
  },
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 15,
  },
  locationbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "48%",
  },
  locationText: {
    fontSize: 14,
    color: "#ADADAD",
    marginLeft: 5,
  },
  chevron: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 16,
    color: colors.primary,
  },
  userimage: {
    width: 35,
    height: 35,
    resizeMode: "cover",
    marginLeft: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headingBox: {
    width: "98%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "500",
  },
  subheading: {
    fontSize: 12,
    color: "grey",
    fontWeight: "400",
  },
});
