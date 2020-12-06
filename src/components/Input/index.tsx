import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

interface InputProps {
    label: string,
    type: string,
    keyboardtype: string,
    maxlength: number,
    style?: StyleProp<ViewStyle>
    mockValue?: string
}

const Input: React.FC<InputProps> = ({ label, mockValue, type, keyboardtype, maxlength, style }, props) => {
    const [value, setValue] = useState('');
    const { colors } = useTheme();

    return (
        <TextInput
            {...props}
            label={label}
            value={mockValue || value}
            onChangeText={value => setValue(value)}
            style={[{ backgroundColor: colors.text + "00", marginBottom: 20 }, style]}
            underlineColor={'#262626'}
            textContentType={type}
            keyboardType={keyboardtype}
            secureTextEntry={type == 'password' ? true : false}
            maxLength={maxlength}
            selectionColor={"#262626"}
            theme={{colors: {
                primary: "#262626"
            }}}
        />
    );
}

export default Input;