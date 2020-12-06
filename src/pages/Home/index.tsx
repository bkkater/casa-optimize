import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Row, Col } from "fluid-react";

import background from "../../../assets/background-3.png";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { products } from "../../utils/ProductList";
import ProductCard from "../../components/ProductCard";
import HomeHeader from "../../components/HomeHeader";

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      style={{ backgroundColor: "#FFF", flex: 1, padding: 20, paddingTop: 50 }}
    >
      <HomeHeader />
      <View>
        <Text
          style={{ fontFamily: "Ubuntu_700Bold", fontSize: 18, marginTop: 50 }}
        >
          Encontrarmos o que você procura:
        </Text>

        <TouchableHighlight>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Ubuntu_500Medium",
                fontSize: 16,
                marginRight: 10,
              }}
            >
              Relevância
            </Text>
            <Feather name="filter" size={20} color="black" />
          </View>
        </TouchableHighlight>
      </View>

      <View
        style={{
          flexWrap: "wrap",
          marginTop: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Row>
          {products.chairs.map((product) => {
            return (
              <Col md="6">
                <ProductCard
                  image={product.image}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                />
              </Col>
            );
          })}
        </Row>
      </View>

      <ImageBackground
        source={background}
        style={{ width: 335, height: 189 }}
      />

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <PrimaryButton
          onPress={() => navigate("LookingForProductv2")}
          label={"Preencher novamente"}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
