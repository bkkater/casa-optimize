import React, { useState } from 'react';
import {Item, Picker, Icon} from 'native-base';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';
import { View } from 'react-native';

interface SelectProps {
    size?: string,
  selectedValue: boolean,
  onValueChange(): void,
  items: string[]
}

const Select: React.FC<SelectProps> = ({
  size,
  selectedValue,
  onValueChange,
  items,
}) => {
    return (
  <View>
    <Item
      style={[]}
      regular>
      <Picker
        note
        mode="dropdown"
        textStyle={
          size === 'medium' ? styles.mediumPicker : styles.defaultPicker
        }
        itemTextStyle={styles.defaultPicker}
        enabled
        headerBackButtonText="Voltar"
        iosIcon={<Icon name="arrow-down" />}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item label="Selecione uma opção" value={null} />

        {items.map(item => (
          <Picker.Item label={item} value={item} />
        ))}
      </Picker>
    </Item>
  </View>
    )
}

export default Select;
