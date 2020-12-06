import { useNavigation } from "@react-navigation/native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableHighlight, Text } from "react-native";
import { ProgressBar, RadioButton } from "react-native-paper";

import logo from "../../../assets/logomini.png";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";

interface RegisterStepProps {
  handleNextSection(): void;
  label: string;
  inputType: string;
  progressBar: number;
  checkboxOptions?: string[];
  nextSectionButtonLabel: string;
}

const RegisterStep: React.FC<RegisterStepProps> = ({
  handleNextSection,
  inputType,
  progressBar,
  label,
  checkboxOptions,
  nextSectionButtonLabel,
}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 55,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image source={logo} />
        <ProgressBar
          style={{ marginTop: 50, height: 15, backgroundColor: "#F2F2F2" }}
          progress={progressBar}
          color={"#6CBAD9"}
        />

        <Text
          style={{
            marginTop: 50,
            fontFamily: "Ubuntu_700Bold",
            fontSize: 18,
          }}
        >
          {label}
        </Text>
        {!checkboxOptions ? (
          <Input
            label=""
            type={inputType}
            maxlength={50}
            keyboardtype="default"
            style={{
              marginTop: -10,
            }}
          />
        ) : (
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
        )}
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TouchableHighlight
          underlayColor="#FAFAFA"
          style={{
            padding: 15,
            flex: 1,
          }}
          onPress={() => navigation.goBack()}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Feather name="chevron-left" size={24} color="black" />
            <Text
              style={{
                fontFamily: "Ubuntu_700Bold",
                color: "#333",
                marginLeft: 10,
                fontSize: 18
              }}
            >
              Voltar
            </Text>
          </View>
        </TouchableHighlight>

        <PrimaryButton
          onPress={handleNextSection}
          label={nextSectionButtonLabel}
        />
      </View>
    </View>
  );
};

export default RegisterStep;
