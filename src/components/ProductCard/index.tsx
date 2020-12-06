import React from 'react';
import { View, Text, Image } from 'react-native';

// import { Container } from './styles';

interface ProductCardProps {
    image: any,
    name: string,
    price: string
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price}) => {
  return (
      <View>
          <Image source={image} style={{width: 110, height: 110}}/>
          <Text>{name}</Text>
          <Text>R$ {price}</Text>
      </View>
  );
}

export default ProductCard;