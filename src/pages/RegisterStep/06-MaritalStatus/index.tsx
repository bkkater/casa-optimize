import { useNavigation } from "@react-navigation/native";
import React from "react";
import RegisterStep from "..";

const MaritalStatus: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <RegisterStep
      label="Qual é seu estado civil?"
      handleNextSection={() => navigate('LookingForProduct')}
      inputType="none"
      progressBar={1}
      nextSectionButtonLabel="Finalizar"
      checkboxOptions= {["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"]}
    />
  );
};

export default MaritalStatus;
