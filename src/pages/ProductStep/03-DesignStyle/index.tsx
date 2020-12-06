import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import ProductStep from "..";

const checkboxOptions = [
  "Rústico",
  "Moderno",
  "Limpo/minimalista",
  "Gótico",
  "Vintage",
  "Luxuoso",
];

const DesignStyle: React.FC = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState("");

  return (
    <ProductStep
      label="Estilo de design"
      description="Qual o seu estilo preferido?"
      handleNextSection={() => {}}
      nextSectionButtonLabel="Ir para loja"
    >
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        {checkboxOptions.map((checkboxOption) => (
          <View
            key={checkboxOption}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <RadioButton
              value={checkboxOption}
              uncheckedColor="#E5E5E5"
              color="gray"
            />
            <Text style={{ fontFamily: "Ubuntu_400Regular", fontSize: 14 }}>
              {checkboxOption}
            </Text>
          </View>
        ))}
      </RadioButton.Group>
    </ProductStep>
  );
};

export default DesignStyle;
