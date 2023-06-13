import React, {useCallback, useEffect, useState} from "react";
import {View, StyleSheet, Image, StatusBar} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {StackActions} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Splash(Props) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      setTimeout(() => {
        Props.navigation.dispatch(StackActions.replace("TabNavigation"));
      }, 2000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <LinearGradient
        onLayout={onLayoutRootView}
        colors={["#856AD7", "#343243"]}
        style={styles.main}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <View style={styles.absoluteWhite}></View>
        <Image style={styles.logo} source={require("../Assets/PNG/logo.png")} />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 290,
    height: 290,
    resizeMode: "contain",
    zIndex: 1,
  },
  absoluteWhite: {
    width: 240,
    height: 240,
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 200,
  },
});
