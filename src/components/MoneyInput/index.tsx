import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";

interface MoneyInputProps {      
    readonly advanced: string
    setAdvanced: Dispatch<SetStateAction<string>>
}

const MoneyInput: React.FC<MoneyInputProps> = ({ advanced,  setAdvanced}) => {

  return (
    <View style={{borderBottomColor: "#333", borderBottomWidth: 1}}>
      <TextInputMask
          type={"money"}
          options={{
            precision: 2,
            separator: ",",
            delimiter: ".",
            unit: "R$",
            suffixUnit: "",
          }}
          placeholder="R$ 0,00"
          value={advanced}
          onChangeText={(text) => {
            setAdvanced(text);
          }}
          style={{
            fontFamily: "Ubuntu_500Medium",
            fontSize: 18,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: 150,
            height: 30
          }}
        />
    </View>
  );
};

export default MoneyInput;
