import { useNavigation } from "@react-navigation/native";
import React, { Children, Dispatch, SetStateAction, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableHighlight, Text } from "react-native";
import { ProgressBar, RadioButton } from "react-native-paper";

import logo from "../../../assets/logomini.png";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

interface ProductStepProps {
  handleNextSection(): void;
  label: string;
  nextSectionButtonLabel: string;
  description: string;
}

const ProductStep: React.FC<ProductStepProps> = ({
  handleNextSection,
  label,
  description,
  nextSectionButtonLabel,
  children,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            marginTop: 50,
            fontFamily: "Ubuntu_700Bold",
            fontSize: 18,
          }}
        >
          {label}
        </Text>

        <Text
          style={{
            marginTop: 20,
            fontFamily: "Ubuntu_400Regular",
            fontSize: 18,
          }}
        >
          {description}
        </Text>

        <View style={{ marginTop: 30 }}>{children}</View>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <PrimaryButton
          onPress={handleNextSection}
          label={nextSectionButtonLabel}
        />
      </View>
    </View>
  );
};

export default ProductStep;
