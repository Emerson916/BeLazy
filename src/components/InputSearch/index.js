import React from 'react';
import {InputContainer, Input} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputSearch = ({placeholder, value, onChangeText}) => {
  return (
    <InputContainer>
      <Icon name="search" size={18} color="#5c5a5a" />
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </InputContainer>
  );
};

export default InputSearch;
