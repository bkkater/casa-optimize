import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import ProductStep from "..";
import Select from "../../../components/Select";

const options = [
  "this is ebin",
  "label2"
];

const LookingForProduct: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedItem, setSelectedItem] = useState("");

  const onValueChange = (value: string) => {
    setSelectedItem(value);
  }

  return (
    <ProductStep
    label="Cadastro feito, Francisco!"
    description="Vamos às compras? O que você procura?"
    handleNextSection={() => navigate("MaxValue")}
    nextSectionButtonLabel="Qual valor que deseja investir?"
  >
    <Select selectedValue={selectedItem} onValueChange={(value: string) => onValueChange(value)} items={options}/>
  </ProductStep>
  );
};

export default LookingForProduct;
