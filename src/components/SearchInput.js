// src/components/SearchInput.js

import React from 'react';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone desejado

import styled from 'styled-components/native';



const SearchInput = ({ placeholder }) => {
  return (
    <Container>
      <Icon name="search" size={20} color="#777" /> {/* Ícone de pesquisa */}
      <Input
        placeholder={placeholder}
        placeholderTextColor="#777"
      />
    </Container>
  );
};


const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 10px;
`;

const Input = styled(TextInput)`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
`;

export default SearchInput;
