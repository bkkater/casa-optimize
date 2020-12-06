import { useNavigation } from "@react-navigation/native";
import React from "react";
import RegisterStep from "..";

const Cep: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <RegisterStep
      label="Qual é o seu Cep?"
      handleNextSection={() => navigate('Age')}
      inputType="none"
      progressBar={0.66}
      nextSectionButtonLabel="Próximo"
      >
        
      </RegisterStep>
  );
};

export default Cep;
