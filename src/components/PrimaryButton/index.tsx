import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import style from "./styles";

interface PrimaryButtonProps {
  onPress(): void;
  label: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, label }) => {
  return (
    <TouchableHighlight
      style={style.button}
      onPress={onPress}
      underlayColor="#F7F7F7"
    >
      <View style={{ alignItems: "center", justifyContent: "space-around", flexDirection: 'row' }}>
        <Text style={style.buttonText}>{label}</Text>
        <Feather name="chevron-right" size={24} color="black" />
      </View>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
