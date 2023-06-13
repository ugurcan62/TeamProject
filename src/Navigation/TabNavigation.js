import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../Utilities/colors";
import { TabNavigation } from "../Utilities/TabRouter";
const Tab = createBottomTabNavigator();
function TabNavigator(Props) {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        activeTintColor: "#fff",
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {TabNavigation.map((v, i) => {
        return (
          <Tab.Screen
            key={i}
            name={v.name}
            component={v.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.center}>
                  <Image style={styles.icon} source={v.image} />
                  <Text style={styles.routerText}>{v.name}</Text>
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.main,
    elevation: 0,
    borderTopWidth: 0,
    height: 65,
    elevation: 3,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  routerText: {
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#fff",
    marginTop: 5,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});

export default TabNavigator;
