import { useNavigation } from "@react-navigation/native";
import React from "react";
import ProductStep from "..";

const MaxValue: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <ProductStep
      label="Qual o valor máximo?"
      description="O valor que você está disposto a pagar."
      handleNextSection={() => navigate("DesignStyle")}
      nextSectionButtonLabel="Estilo de design"
    ></ProductStep>
  );
};

export default MaxValue;
