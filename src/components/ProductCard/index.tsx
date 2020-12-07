import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { products } from "../../utils/ProductList";

// import { Container } from './styles';

interface ProductCardProps {
  id: number;
  image: any;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  id,
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableHighlight
      style={{ padding: 15, paddingBottom: 0 }}
      onPress={() =>
        navigate("DetailProduct", { product: products.chairs[id] })
      }
      underlayColor="transparent"
    >
      <View>
        <Image source={image} style={{ width: 150, height: 150 }} />
        <Text
          style={{
            fontFamily: "Ubuntu_700Bold",
            fontSize: 15,
            color: "#A67356",
          }}
        >
          {name}
        </Text>
        <Text
          style={{ fontFamily: "Ubuntu_700Bold", fontSize: 14, marginTop: 5 }}
        >
          R$ {price}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default ProductCard;
