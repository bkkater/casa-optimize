import { useNavigation } from "@react-navigation/native";
import React from "react";
import RegisterStep from "..";

const Email: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <RegisterStep
      label="Qual o seu melhor email?"
      handleNextSection={() => navigate('Password')}
      inputType="emailAddress"
      progressBar={0.33}
      nextSectionButtonLabel="Próximo"
    />
  );
};

export default Email;
