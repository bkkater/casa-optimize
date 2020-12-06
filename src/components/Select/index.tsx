import React, { useState } from "react";
import Select2 from "react-native-select-two";

const mockData = [
    { id: 1, name: "Cadeira" },
    { id: 2, name: "Escrivaninha" },
    { id: 3, name: "Mesa de Jantar" },
    { id: 4, name: "Mesa de Canto" },
    { id: 5, name: "Mesa de Cabeceira"},
    { id: 6, name: "Rack" },
    { id: 7, name: "Sofá" },
  ];

const Select: React.FC = () => {
  const [dataValue, setDataValue] = useState<number[]>([])

  return (
    <Select2
      isSelectSingle={false}
      style={{ borderRadius: 5}}
      colorTheme="gray"
      popupTitle="Escolha os produtos desejados"
      title="Selecione"
      data={mockData}
      onSelect={(data: number[]) => {
        setDataValue(data);
      }}
      onRemoveItem={(data: number[]) => {
        setDataValue(data);
      }}
      selectButtonText="Selecionar"
      cancelButtonText="Voltar"
      searchPlaceHolderText="Pesquisar"
    />
  );
};

export default Select;
