import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import logo from "../../../assets/logoonlyimage.png";

const DetailProductHeader: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
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
