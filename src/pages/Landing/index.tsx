import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import style from "./styles";

import LandingModal from "../../components/LandingModal";
import background from "../../../assets/background.png";
import logo from "../../../assets/logowithtext.png";

function Landing() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={style.container}>
      <ImageBackground
        source={background}
        style={{
          width: 334,
          height: 566,
          marginTop: "25%",
          marginBottom: "25%",
        }}
      >     
            <Image
              source={logo}
            />
        <LandingModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ImageBackground>
      <TouchableHighlight
            onPress={handleModalVisible}
            underlayColor="transparent"
            style={style.inputContainer}
          >
            <>
              <Feather name="chevron-up" size={24} color="black" />
              <Text style={{...style.contentText, fontWeight: "bold"}}>Começar</Text>
            </>
          </TouchableHighlight>
    </View>
  );
}

export default Landing;
