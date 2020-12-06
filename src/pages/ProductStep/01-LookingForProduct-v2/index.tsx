import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import ProductStep from "..";
import Select from "../../../components/Select";

const options = ["this is ebin", "label2"];

const LookingForProductv2: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedItem, setSelectedItem] = useState("");

  const onValueChange = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <ProductStep
      label="Olá novamente, Francisco!"
      description="Vamos às compras? O que você procura?"
      handleNextSection={() => navigate("MaxValue")}
      nextSectionButtonLabel="Qual valor que deseja investir?"
    >
      <View style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
        <Select />
      </View>
    </ProductStep>
  );
};

export default LookingForProductv2;
