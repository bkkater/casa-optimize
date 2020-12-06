import React from 'react';
import { View, Image } from 'react-native';
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import logo from "../../../assets/logoonlyimage.png";

const HomeHeader: React.FC = () => {
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
      <Image source={logo} />

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
}

export default HomeHeader;