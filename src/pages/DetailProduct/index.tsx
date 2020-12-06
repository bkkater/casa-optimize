import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Product } from "../../@types/app";
import DetailProductHeader from "../../components/DetailProductHeader";

import detail_image from "../../../assets/Products/chair-detail.png";

import style from "./styles";

interface DetailProductProps {
  readonly route: {
    params: {
      product: Product;
    };
  };
}

const DetailProduct: React.FC<DetailProductProps> = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      {/* <ImageBackground source={} style={{width: "100%", height: 353}}> */}
      <DetailProductHeader />
      {/* </ImageBackground> */}

      <Text
        style={{
          fontFamily: "Ubuntu_600SemiBold",
          marginTop: 10,
          fontSize: 18,
          color: "#A67356",
        }}
      >
        Cadeira do lar
      </Text>
      <Text
        style={{
          fontFamily: "Ubuntu_400Regular",
          marginTop: 10,
          fontSize: 14,
        }}
      >
        Cadeira estilo rústica, confortável e na cor preta e de mandeira
        proveniente de reflorestamente.
      </Text>

      <Text
        style={{
          justifyContent: "flex-end",
          marginTop: 15,
          fontFamily: "Ubuntu_700Bold",
          fontSize: 20,
        }}
      >
        R$ 189,99
      </Text>

      <Image source={detail_image} />

      <View style={{ borderTopColor: "#A67356" }}>
        <View style={{ marginBottom: 50 }}>
          <RectButton
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <Text style={{ ...style.contentText, fontWeight: "bold" }}>
              Colocar no ambiente
            </Text>
            <Feather name="move" size={24} color="black" />
          </RectButton>

          <TouchableHighlight
            style={{
              padding: 18,
              backgroundColor: "#A67356",
              marginTop: 20,
            }}
            underlayColor="#A67356"
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  ...style.contentText,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Adicionar ao carrinho
              </Text>
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color="white"
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;
