// src/screens/ProductSearchScreen.tsx
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/types';

const products = [
  { id: '1', name: 'Apple', description: 'Fresh and crispy apples' },
  { id: '2', name: 'Banana', description: 'Sweet bananas' },
  { id: '3', name: 'Orange', description: 'Juicy oranges' },
  // Adicione mais produtos conforme necessário
];

const Container = styled.View`
  flex: 1;
  padding-top: 60px;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 8px;
  margin: 16px;
`;

const List = styled.FlatList`
  padding: 8px;
`;


type Props = NativeStackScreenProps<RootStackParamList, 'ProductSearchScreen'>;

const ProductSearchScreen: React.FC<Props> = ({ navigation }) => {

  return (
      <Container>
          <Navbar />
          <Content>
            <Text>Search for products</Text>
          </Content>
      </Container>
  );
};

export default ProductSearchScreen;
