import React, {useEffect, useRef, useState} from "react";
import {StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";

const Dropdown = ({price, setPrice}) => {
  const pickerRef = useRef();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    let options = [];
    options.push({label: "Free", value: "Free"});
    for (let i = 10; i <= 100; i += 10) {
      let label = `${i} zł`;
      let value = `${i} zł`;
      let option = {label: label, value: value};
      options.push(option);
    }
    setOptions(options);
  }, []);
  return (
    <Picker
      style={{width: 120}}
      ref={pickerRef}
      selectedValue={price}
      onValueChange={(itemValue, itemIndex) => setPrice(itemValue)}
    >
      {options.map((v, i) => {
        return <Picker.Item key={i} label={v.label} value={v.value} />;
      })}
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: 200,
    height: 40,
    backgroundColor: "#e1e1e1",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dropdownOpen: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default Dropdown;
