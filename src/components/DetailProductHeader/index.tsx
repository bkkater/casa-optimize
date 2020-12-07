import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const DetailProductHeader: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: "space-between",
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > 
      <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="transparent">
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Feather name="chevron-left" size={28} color="black" />
          <Text
            style={{
              fontFamily: "Ubuntu_700Bold",
              fontSize: 18,
              marginLeft: 15,
            }}
          >
            Voltar
          </Text>
        </View>
      </TouchableHighlight>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "40%",
          }}
        >
          <MaterialCommunityIcons name="cart-outline" size={30} color="black" />
          <Feather name="help-circle" size={28} color="black" />
          <Feather name="user" size={28} color="black" />
        </View>
      </View>
    </View>
  );
};

export default DetailProductHeader;
