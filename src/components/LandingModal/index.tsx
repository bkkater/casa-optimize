import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  StyleProp,
  Image,
  View,
  Text,
  ViewStyle,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";

import style from "./styles";

import logo from "../../../assets/logowithimage.png";
import background from "../../../assets/background-2.png";

interface LandingModalProps {
  readonly styles?: StyleProp<ViewStyle>
  readonly modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

const LandingModal: React.FC<LandingModalProps> = ({
  styles,
  modalVisible,
  setModalVisible,
}) => {
  const { navigate } = useNavigation();

  const handleNavigateToRegisterStep = () => {
    setModalVisible(!modalVisible);
    navigate("Name");
  };

  return (
    <View style={styles}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View
              style={{
                position: "relative",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Image source={logo} />

              <ImageBackground
                source={background}
                style={{ width: 332, height: 261, marginVertical: 80 }}
              />

              <View style={{ marginBottom: 50 }}>
                <RectButton
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                  }}
                >
                  <Text style={{ ...style.contentText, fontWeight: "bold" }}>
                    Acessar
                  </Text>
                  <Feather name="chevron-right" size={24} color="black" />
                </RectButton>

                <TouchableHighlight
                  style={{
                    padding: 18,
                    backgroundColor: "#F2F2F2",
                    marginTop: 20,
                  }}
                  underlayColor="#F7F7F7"
                  onPress={handleNavigateToRegisterStep}
                > 
                <View style={{flexDirection: "row", justifyContent: "space-between",}}>
                  <Text style={{ ...style.contentText, fontWeight: "bold" }}>
                    Cadastrar
                  </Text>
                  <Feather name="chevron-right" size={24} color="black" />
                </View>
                </TouchableHighlight>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Text style={{ ...style.contentText, fontSize: 13 }}>
                  Desenvolvido em um Hackathon
                </Text>
                <AntDesign
                  name="heart"
                  size={13}
                  color="black"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

LandingModal.displayName = "LandingModal";

export default LandingModal;
