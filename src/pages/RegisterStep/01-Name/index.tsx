import { useNavigation } from "@react-navigation/native";
import React from "react";
import RegisterStep from "..";

const Name: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <RegisterStep
      label="Qual é o seu nome?"
      handleNextSection={() => navigate('Email') }
      inputType="name"
      progressBar={0.165}
      nextSectionButtonLabel="Próximo"
    />
  );
};

export default Name;
