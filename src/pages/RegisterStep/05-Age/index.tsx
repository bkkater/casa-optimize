import { useNavigation } from "@react-navigation/native";
import React from "react";
import RegisterStep from "..";

const Age: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <RegisterStep
      label="Qual é a sua idade?"
      handleNextSection={() => navigate('MaritalStatus')}
      inputType="none"
      progressBar={0.825}
      nextSectionButtonLabel="Próximo"
      checkboxOptions= {["Entre 18 e 25", "Entre 26 e 35", "Entre 39 e 45", "Entre 46 e 55", "55+"]}
    />
  );
};

export default Age;
