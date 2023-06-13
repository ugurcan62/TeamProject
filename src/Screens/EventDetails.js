import React from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import Heading from "../Component/Combine/heading";
import Card from "../Component/EventDetails/card";
import {colors} from "../Utilities/colors";
import {options} from "../Utilities/categories";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import BorderOutlineButton from "../Component/Combine/OutlineButton";
import FillButton from "../Component/Combine/FilledButton";

export default function EventDetails(Props) {
  const [participants, setparticipants] = React.useState(false);
  const data = Props.route.params.data;

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <StatusBar translucent={true} />
        <View style={styles.container}>
          <Heading
            back={true}
            translucent={true}
            Props={Props}
            label={data?.title}
          />
          <Image
            style={styles.backgroundImage}
            source={typeof data.url !== "number" ? {uri: data.uri} : data?.url}
          />
          <View style={styles.bottomPart}>
            <View style={styles.firstSection}>
              <View>
                <Text style={styles.heading}>{data?.title}</Text>
                <View>
                  <View style={{...styles.imageBox}}>
                    <Image
                      style={styles.image}
                      source={require("../Assets/PNG/profile.png")}
                    />
                    <Text style={styles.subheading}>
                      created by Alan Rodriguez
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <MaterialCommunityIcons
                  name={"share-variant-outline"}
                  size={23}
                  color={"#565656"}
                />
                <MaterialCommunityIcons
                  name={"bookmark-outline"}
                  size={23}
                  color={"#565656"}
                />
              </View>
            </View>
            {participants ? (
              <>
                <Text style={styles.maiheading}>Participants</Text>
                {options.slice(0, 2).map((v, i) => {
                  return <Card data={v} identifier={i} />;
                })}
              </>
            ) : (
              <>
                {/* <View style={{...styles.rowForm, marginTop: 30}}>
                  <Text style={styles.unerlineText}>Address:</Text>
                  <Text style={styles.ununerlinText}>Mieczysławy 24, Łódź</Text>
                </View> */}
                <View style={{...styles.rowForm, marginTop: 6}}>
                  <Text style={styles.unerlineText}>Phone:</Text>
                  <Text style={styles.ununerlinText}> +48 98450 08960</Text>
                </View>

                <Text style={styles.maiheading}>General Information</Text>
                <Text style={styles.para}>{data.description}</Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
      {participants ? (
        <View style={styles.buttonBoxRow}>
          <BorderOutlineButton
            width={"45%"}
            height={50}
            textSize={16}
            title={"Go Back"}
            onPress={() => setparticipants(false)}
          />
          <FillButton
            width={"45%"}
            height={51}
            textSize={16}
            title={"Create"}
          />
        </View>
      ) : (
        <View style={styles.buttonBox}>
          <FillButton
            width={"90%"}
            height={51}
            textSize={16}
            title={"Register"}
          />

          <FillButton
            width={"90%"}
            height={51}
            textSize={16}
            title={"Check participants"}
            onPress={() => setparticipants(true)}
          />
        </View>
      )}
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
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: 350,
    zIndex: -1,
    marginTop: -120,
  },
  bottomPart: {
    width: "90%",
    marginLeft: "5%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 10,
  },
  firstSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "20%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "500",
  },
  subheading: {
    fontSize: 12,
    color: "#ADADAD",
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginLeft: 2,
    marginRight: 5,
  },
  imageBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  rowForm: {
    display: "flex",
    flexDirection: "row",
  },
  unerlineText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  ununerlinText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "400",
  },
  maiheading: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.primary,
    marginTop: 30,
  },
  para: {
    width: "100%",
    textAlign: "left",
    fontSize: 12,
    color: colors.primary,
    lineHeight: 30,
  },
  buttonBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    flexDirection: "column",
    height: 120,
  },
  buttonBoxRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
});
