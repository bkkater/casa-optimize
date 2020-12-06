import { useNavigation } from "@react-navigation/native";
import React from "react";
import RegisterStep from "..";

const Password: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <RegisterStep
      label="Defina uma senha"
      handleNextSection={() => navigate('Cep')}
      inputType="password"
      progressBar={0.495}
      nextSectionButtonLabel="Próximo"
    />
  );
};

export default Password;
