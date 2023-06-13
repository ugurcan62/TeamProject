import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Heading from "../Combine/heading";
import Card from "../../Component/Categories/slidercard";
import { colors } from "../../Utilities/colors";
import { options } from "../../Utilities/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDown from "../Combine/Dropdown";
import FillButton from "../Combine/FilledButton";
import BorderOutlineButton from "../Combine/OutlineButton";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { BookingApp } from "../../Store/BookingApp/action";

export default function EventForm(Props) {
  const dispatch = useDispatch();
  let [active, setActive] = React.useState(false);
  let [title, setTitle] = React.useState("");
  let [price, setPrice] = React.useState("Free");
  let [image, setImage] = React.useState("");
  let [startDate, setStartDate] = React.useState(null);
  let [endDate, setEndDate] = React.useState(null);
  let [startTime, setStartTime] = React.useState(null);
  let [Duration, setDuration] = React.useState(50);
  let [Description, setDescription] = React.useState("");

  // Date and Time
  let [showPicker, setShowPicker] = React.useState(false);
  let [showPicker1, setShowPicker1] = React.useState(false);
  let [showPicker2, setShowPicker2] = React.useState(false);

  let showDateTimePicker = () => {
    setShowPicker(true);
  };
  let hideDateTimePicker = () => {
    setShowPicker(false);
  };

  let handleDateChange = (event, selectedDate) => {
    // Handle the selected date here
    // You can use the selectedDate value as needed
    hideDateTimePicker();
    setStartDate(formatDate(selectedDate));
  };

  // End Date

  let showDateTimePicker1 = () => {
    setShowPicker1(true);
  };
  let hideDateTimePicker1 = () => {
    setShowPicker1(false);
  };

  let handleDateChange1 = (event, selectedDate) => {
    // Handle the selected date here
    // You can use the selectedDate value as needed
    hideDateTimePicker1();
    setEndDate(formatDate(selectedDate));
  };

  // End Date

  let showDateTimePicker2 = () => {
    setShowPicker2(true);
  };
  let hideDateTimePicker2 = () => {
    setShowPicker2(false);
  };

  let handleDateChange2 = (event, selectedDate) => {
    // Handle the selected date here
    // You can use the selectedDate value as needed
    hideDateTimePicker2();
    setStartTime(formatTime(selectedDate));
  };

  let pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  let formatDate = (date) => {
    let options = {day: "2-digit", month: "2-digit", year: "numeric"};
    return date.toLocaleDateString("en-GB", options);
  };

  let formatTime = (time) => {
    let options = {hour: "2-digit", minute: "2-digit", hour12: true};
    return time.toLocaleTimeString("en-US", options);
  };
  const validateForm = () => {
    if (!active) {
      alert("Select Event Type!");
      return;
    }
    if (!title || title === "") {
      alert("Title is required");
      return false;
    }
    if (!Duration || Duration === "") {
      alert("Duration is required");
      return false;
    }
    if (!image || image === "") {
      alert("Image is required");
      return false;
    }
    if (!startDate) {
      alert("Start Date is required");
      return false;
    }
    if (!startTime) {
      alert("Start Time is required");
      return false;
    }
    if (!Description || Description === "") {
      alert("Description is required");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      const eventObject = {
        active,
        title,
        price,
        uri: image,
        startDate,
        endDate,
        startTime,
        duration: Duration,
        description: Description,
      };

      dispatch(BookingApp.addEvent(eventObject));
      Props.navigation.navigate("Sucess");
      // Perform form submission or any other action
      // Reset the states after successful submission
      setActive(false);
      setTitle("");
      setPrice("");
      setImage("");
      setStartDate(null);
      setEndDate(null);
      setStartTime(null);
      setDuration(50);
      setDescription("");
    }
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <Heading Props={Props} label={"Create an event"} back />
          <ScrollView
            horizontal={true}
            style={styles.horizontal}
            showsHorizontalScrollIndicator={false}
          >
            {options.map((v, index) => (
              <Card
                onSelected={() => setActive(v)}
                selected={active == v}
                uniqueIndex={index}
                data={v}
              />
            ))}
          </ScrollView>
          <View style={styles.border} />
          <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              value={title}
              onChangeText={(e) => setTitle(e)}
              style={styles.input}
            />
            <Text style={styles.label}>Date</Text>
            <View style={styles.backLabel}>
              <TouchableOpacity
                style={styles.row}
                activeOpacity={0.8}
                onPress={() => showDateTimePicker()}
              >
                <Text>{startDate ? startDate : "--/--/----"}</Text>
                <MaterialCommunityIcons
                  name={"chevron-down"}
                  style={styles.backArrow}
                  size={20}
                  color={colors.main}
                />
              </TouchableOpacity>

              <MaterialCommunityIcons
                name={"minus"}
                style={styles.backArrow}
                size={20}
                color={colors.primary}
              />
              <TouchableOpacity
                style={styles.row}
                activeOpacity={0.8}
                onPress={() => showDateTimePicker1()}
              >
                <Text>{endDate ? endDate : "--/--/----"}</Text>
                <MaterialCommunityIcons
                  name={"chevron-down"}
                  style={styles.backArrow}
                  size={20}
                  color={colors.main}
                />
              </TouchableOpacity>
            </View>

            <View style={{...styles.backLabel, ...styles.backLabel1}}>
              <View style={styles.subbox}>
                <Text style={styles.label}>Time</Text>
                <TouchableOpacity
                  style={styles.backLabel1Block}
                  activeOpacity={0.8}
                  onPress={() => showDateTimePicker2()}
                >
                  <Text>{startTime ? startTime : "00:00 __"}</Text>

                  <MaterialCommunityIcons
                    name={"chevron-down"}
                    style={styles.backArrow}
                    size={20}
                    color={colors.main}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.subbox}>
                <Text style={styles.label}>Duration</Text>
                <TouchableOpacity
                  style={{...styles.backLabel1Block, ...styles.timebox}}
                  activeOpacity={0.8}
                >
                  <MaterialCommunityIcons
                    name={"minus"}
                    style={styles.backArrow}
                    size={20}
                    color={colors.main}
                    onPress={() => {
                      setDuration(--Duration);
                    }}
                  />
                  <Text>{Duration}</Text>
                  <MaterialCommunityIcons
                    name={"plus"}
                    style={styles.backArrow}
                    size={20}
                    color={colors.main}
                    onPress={() => {
                      setDuration(++Duration);
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.label}>Description</Text>
            <TextInput
              value={Description}
              onChangeText={(e) => setDescription(e)}
              multiline
              style={styles.input2}
            ></TextInput>

            <View style={{...styles.backLabel, ...styles.backLabel1}}>
              <View style={styles.subbox}>
                <Text style={styles.label}>Photo</Text>
                <TouchableOpacity
                  style={{
                    ...styles.backLabel1Block,
                    backgroundColor: "transparent",
                  }}
                  activeOpacity={0.8}
                  onPress={() => pickImageAsync()}
                >
                  <Image
                    style={styles.imageInput}
                    source={
                      image == ""
                        ? require("../../Assets/PNG/Saved/ev1.png")
                        : {uri: image}
                    }
                  />
                  <MaterialCommunityIcons
                    name={"camera"}
                    style={styles.cameraicon}
                    size={20}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.subbox}>
                <Text style={styles.label}>Price</Text>
                <TouchableOpacity
                  style={{...styles.backLabel1Block, ...styles.timebox}}
                  activeOpacity={0.8}
                >
                  <DropDown setPrice={setPrice} price={price} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonBox}>
        <BorderOutlineButton
          width={"45%"}
          height={50}
          textSize={16}
          title={"Back"}
        />
        <FillButton
          onPress={() => handleSubmit()}
          width={"45%"}
          height={51}
          textSize={16}
          title={"Create "}
        />
      </View>
      {showPicker && (
        <DateTimePicker
          mode="date"
          value={new Date()} // Set initial value as needed
          onChange={handleDateChange}
        />
      )}

      {showPicker1 && (
        <DateTimePicker
          mode="date"
          value={new Date()} // Set initial value as needed
          onChange={handleDateChange1}
        />
      )}

      {showPicker2 && (
        <DateTimePicker
          mode="time"
          value={new Date()} // Set initial value as needed
          onChange={handleDateChange2}
        />
      )}
    </>
  );
}

let styles = StyleSheet.create({
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
  },
  horizontal: {
    width: "95%",
    marginLeft: "4%",
  },
  border: {
    borderTopWidth: 0.7,
    borderTopColor: colors.primary,
    width: "84%",
  },
  form: {
    width: "85%",
    marginTop: 10,
  },
  label: {
    fontSize: 15,
    color: colors.primary,
    width: "100%",
    textAlign: "left",
    fontWeight: "300",
    marginTop: 5,
  },
  input: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  backLabel: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  backLabel1: {
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    height: 80,
    alignItems: "flex-start",
  },
  subbox: {
    width: "40%",
    // marginTop: 10,
  },
  backLabel1Block: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: "37%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    color: colors.primary,
    fontSize: 25,
  },
  timebox: {
    justifyContent: "space-around",
  },
  input2: {
    width: "100%",
    height: 70,
    borderWidth: 0.7,
    borderColor: "#000",
    marginTop: 10,
    textAlignVertical: "top",
    padding: 10,
  },
  imageInput: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: 40,
    opacity: 0.6,
  },
  cameraicon: {
    position: "absolute",
    top: 32,
  },
  buttonBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  inputBox: {
    width: 30,
  },
});
