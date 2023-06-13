import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Image, ScrollView} from "react-native";
import {colors} from "../Utilities/colors";
import Card from "../Component/Profile/card";
import {options} from "../Utilities/profile";
import Heading from "../Component/Combine/heading";
export default function Profile(Props) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor="#fff" />
        <Heading label={"Profile"} />
        <View style={styles.avatarbox}>
          <Image
            style={styles.avatar}
            source={require("../Assets/PNG/profile.png")}
          />
          <Text style={styles.username}>Alan Rodriguez</Text>
        </View>
        {options.map((v, i) => (
          <Card Props={Props} key={i} data={v}  />
        ))}
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
  avatarbox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 116,
    height: 113,
    borderRadius: 50,
    resizeMode: "contain",
  },
  username: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 15,
  },
});
