import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableHighlight, Text, View } from "react-native";

import ProductStep from "..";
import MoneyInput from "../../../components/MoneyInput";

const MaxValue: React.FC = (props) => {
  const { navigate } = useNavigation();
  const [advanced, setAdvanced] = useState("0");

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
            let moneyValue = parseFloat(advanced.substring(2).replace(',', '.'));
            let moneyString = '';
            
            moneyValue = moneyValue > 100 ? parseFloat((moneyValue - 100).toFixed(2)) : 0;

            if(moneyValue.toString().includes('.')) {
              moneyString = `R$${moneyValue}`.replace('.', ',');
            }else{
              moneyString = `R$${moneyValue},00`;
            }

            setAdvanced(moneyString);
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
            let moneyValue = parseFloat(advanced.substring(2).replace(',', '.'));
            let moneyString = '';
            
            moneyValue = parseFloat((moneyValue + 100).toFixed(2))

            if(moneyValue.toString().includes('.')) {
              moneyString = `R$${moneyValue}`.replace('.', ',');
            }else{
              moneyString = `R$${moneyValue},00`;
            }

            setAdvanced(moneyString);
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
