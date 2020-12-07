import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import background from "../../../assets/background-3.png";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { products } from "../../utils/ProductList";
import ProductCard from "../../components/ProductCard";
import HomeHeader from "../../components/HomeHeader";
import { Row } from 'react-native-easy-grid';

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
          marginTop: 20,
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >

        <Row>
          <ProductCard
            image={products.chairs[0].image}
            key={products.chairs[0].id}
            name={products.chairs[0].name}
            price={products.chairs[0].price}
            id={products.chairs[0].id}
          />
          <ProductCard
            image={products.chairs[1].image}
            key={products.chairs[1].id}
            name={products.chairs[1].name}
            price={products.chairs[1].price}
            id={products.chairs[1].id}
          />
        </Row>

        <Row>
          <ProductCard
            image={products.chairs[2].image}
            key={products.chairs[2].id}
            name={products.chairs[2].name}
            price={products.chairs[2].price}
            id={products.chairs[2].id}
          />

          <ProductCard
            image={products.chairs[3].image}
            key={products.chairs[3].id}
            name={products.chairs[3].name}
            price={products.chairs[3].price}
            id={products.chairs[3].id}
          />
        </Row> 

        <Row>
          <ProductCard
            image={products.chairs[4].image}
            key={products.chairs[4].id}
            name={products.chairs[4].name}
            price={products.chairs[4].price}
            id={products.chairs[4].id}
          />
          <ProductCard
            image={products.chairs[5].image}
            key={products.chairs[5].id}
            name={products.chairs[5].name}
            price={products.chairs[5].price}
            id={products.chairs[5].id}
          />
        </Row>
        
      </View>

      <Image
        source={background}
        style={{ width: 335, height: 189, marginVertical: 40 }}
      />

      <View style={{ flexDirection: "row", marginVertical: 20, paddingBottom: 100 }}>
        <PrimaryButton
          onPress={() => navigate("LookingForProductv2")}
          label={"Preencher novamente"}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
