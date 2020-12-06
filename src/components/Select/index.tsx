import React, { useState } from "react";
import Select2 from "react-native-select-two";

// Styles
import { View } from "react-native";

interface DataArray {
  id: string;
  name: string;
}

interface SelectProps {
  data: DataArray[];
}

const mockData = [
  { id: 1, name: "React Native Developer" },
  { id: 2, name: "Android Developer" },
  { id: 3, name: "iOS Developer" },
];

const Select: React.FC<SelectProps> = ({ data }) => {
  const [dataValue, setDataValue] = useState();

  return (
    <Select2
      isSelectSingle={false}
      style={{ borderRadius: 5 }}
      colorTheme="blue"
      popupTitle="Select item"
      title="Select item"
      data={mockData}
      onSelect={(data) => {
        setDataValue({ data });
      }}
      onRemoveItem={(data) => {
        setDataValue({ data });
      }}
    />
  );
};

export default Select;
