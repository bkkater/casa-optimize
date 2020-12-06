import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableHighlight, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

import ProductStep from "..";

const MaxValue: React.FC = (props) => {
  const { navigate } = useNavigation();
  const [money, setMoney] = useState(0);
  const [value, setValue] = useState(`R$ ${money},00`);
  const { colors } = useTheme();
  
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
          flex: 1,
          alignItems: "flex-start",
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
            money !== 0 && setMoney(money - 1)
            setValue(`R$ ${money},00`)
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
        
        <TextInput
            {...props}
            label=""
            value={value}
            onChangeText={(numbertext) => handleChangeText(numbertext)}
            style={[{ backgroundColor: "transparent", marginBottom: 20, width: '30%' }]}
            underlineColor={'#262626'}
            keyboardType="number-pad"
            selectionColor={"#262626"}
            theme={{colors: {
                primary: "#262626"
            }}}
        />

        <TouchableHighlight
          style={{
            backgroundColor: "#ededed",
            borderRadius: 100,
            marginLeft: 15,
          }}
          onPress={() => { 
            setMoney(money + 1)
            setValue(`R$ ${money},00`)
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
