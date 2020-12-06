import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableHighlight, Text, View } from "react-native";

import ProductStep from "..";
import MoneyInput from "../../../components/MoneyInput";

const MaxValue: React.FC = (props) => {
  const { navigate } = useNavigation();
  const [advanced, setAdvanced] = useState("0");

  function handleChangeText(numbertext: string) {
    
  }

  return (
    <ProductStep
      label="Qual valor que deseja investir?"
      description=""
      handleNextSection={() => navigate("DesignStyle")}
      nextSectionButtonLabel="Estilo de design"
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableHighlight
          style={{
            backgroundColor: "#ededed",
            borderRadius: 100,
            marginRight: 15,
          }}
          onPress={() => {
            
            let moneyValue = parseFloat(advanced);
            console.log(moneyValue)

            moneyValue = moneyValue > 100 ? moneyValue - 100 : 0

            
            

            setAdvanced(moneyValue.toString())
          }}
        >
          <Text
            style={{
              paddingVertical: 10,
              paddingHorizontal: 18,
              fontFamily: "Ubuntu_700Bold",
              fontSize: 18,
            }}
          >
            -
          </Text>
        </TouchableHighlight>
        
        <MoneyInput advanced={advanced} setAdvanced={setAdvanced}/>

        <TouchableHighlight
          style={{
            backgroundColor: "#ededed",
            borderRadius: 100,
            marginLeft: 15,
          }}
          onPress={() => {
            let moneyValue = parseInt(advanced.substring(2, advanced.length - 3));
            
          }}
        >
          <Text
            style={{
              paddingVertical: 11,
              paddingHorizontal: 17,
              fontFamily: "Ubuntu_700Bold",
              fontSize: 18,
            }}
          >
            +
          </Text>
        </TouchableHighlight>
      </View>
    </ProductStep>
  );
};

export default MaxValue;
