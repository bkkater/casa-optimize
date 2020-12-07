import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Product } from "../../@types/app";
import DetailProductHeader from "../../components/DetailProductHeader";

import detail_image from "../../../assets/Products/chair-detail.png";
import image from "../../../assets/Products/image.png";

import chair01 from '../../../assets/Products/chair-01G.png';
import chair02 from '../../../assets/Products/chair-02G.png';
import chair03 from '../../../assets/Products/chair-03G.png';
import chair04 from '../../../assets/Products/chair-04G.png';
import chair05 from '../../../assets/Products/chair-05G.png';
import chair06 from '../../../assets/Products/chair-06G.png';

import style from "./styles";

const images = [
  {
    id: 0,
    image: chair01
  },
  {
    id: 1,
    image: chair02
  },
  {
    id: 2,
    image: chair03
  },
  {
    id: 3,
    image: chair04
  },
  {
    id: 4,
    image: chair05
  },
  {
    id: 5,
    image: chair06
  }
]

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
    <ScrollView>
      <ImageBackground
        source={images[product.id].image}
        style={{
          width: "100%",
          height: 365,
          flex: 1,
          position: "relative",
          bottom: -50
        }}
      >
        <DetailProductHeader />
      </ImageBackground>

      <View style={{ padding: 20, marginTop: 50 }}>
        <View style={{ paddingHorizontal: 5 }}>
          <Text
            style={{
              fontFamily: "Ubuntu_700Bold",
              marginTop: 10,
              fontSize: 18,
              color: "#A67356",
            }}
          >
            {product.name}
          </Text>
          <Text
            style={{
              fontFamily: "Ubuntu_500Medium",
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Cadeira confortável, na cor preta e de mandeira proveniente de
            reflorestamente.
          </Text>

          <Text
            style={{
              justifyContent: "flex-end",
              marginVertical: 15,
              fontFamily: "Ubuntu_700Bold",
              fontSize: 18,
              marginBottom: 30,
            }}
          >
            R$ {product.price}
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image source={detail_image} style={{ alignItems: "center" }} />
        </View>

        <View
          style={{
            borderTopColor: "#A67356",
            borderTopWidth: 1,
            marginTop: 40,
          }}
        >
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
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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
    </ScrollView>
  );
};

export default DetailProduct;
