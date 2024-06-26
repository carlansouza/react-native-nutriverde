// src/screens/ProductSearchScreen.tsx

import React from 'react';
import styled from 'styled-components/native';
import { Product } from '../screens/types';
import Icon from 'react-native-vector-icons/AntDesign';
import ProductCard from '../components/ProductCard';


const ProductSearchScreen = () => {
  return (
    <Container>
      <Content>
        <SearchInputS placeholder="Search for products" />
        <Icon
          name="search1"
          size={20}
          color="#000"
          onPress={() => {
            console.warn('Search button pressed');
          }}
        />
      </Content>
      <ProductList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCardContainer>
            <ProductCard product={item} />
          </ProductCardContainer>
        )}
      />
    </Container>
  );
};

const products: Product[] = [
  { id: '1', name: 'Apple', description: 'Fresh and crispy apples', price: 1.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
  { id: '2', name: 'Banana', description: 'Sweet bananas', price: 0.99, imageUrl: 'https://example.com/banana.jpg' },
  { id: '3', name: 'Orange', description: 'Juicy oranges', price: 1.49, imageUrl: 'https://example.com/orange.jpg' },
  { id: '4', name: 'Strawberry', description: 'Ripe strawberries', price: 2.99, imageUrl: 'https://example.com/strawberry.jpg' },
  { id: '5', name: 'Blueberry', description: 'Tasty blueberries', price: 3.49, imageUrl: 'https://example.com/blueberry.jpg' },
  { id: '6', name: 'Pineapple', description: 'Delicious pineapples', price: 2.99, imageUrl: 'https://example.com/pineapple.jpg' },
  { id: '7', name: 'Kiwi', description: 'Exotic kiwis', price: 1.99, imageUrl: 'https://example.com/kiwi.jpg' },
  { id: '8', name: 'Grapes', description: 'Fresh grapes', price: 2.49, imageUrl: 'https://example.com/grapes.jpg' },
  { id: '9', name: 'Watermelon', description: 'Juicy watermelons', price: 4.99, imageUrl: 'https://example.com/watermelon.jpg' },
  { id: '10', name: 'Peach', description: 'Sweet peaches', price: 1.99, imageUrl: 'https://example.com/peach.jpg' },
  { id: '11', name: 'Mango', description: 'Ripe mangoes', price: 2.99, imageUrl: 'https://example.com/mango.jpg' },
  { id: '12', name: 'Papaya', description: 'Tropical papayas', price: 3.49, imageUrl: 'https://example.com/papaya.jpg' },
  { id: '13', name: 'Cherry', description: 'Fresh cherries', price: 2.49, imageUrl: 'https://example.com/cherry.jpg' },
  { id: '14', name: 'Pear', description: 'Sweet pears', price: 1.99, imageUrl: 'https://example.com/pear.jpg' },
  { id: '15', name: 'Plum', description: 'Juicy plums', price: 1.49, imageUrl: 'https://example.com/plum.jpg' },
  // Add more products as needed
];

// Defina os componentes estilizados
const Container = styled.View`
  flex: 1;
  margin: 10px 0;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const SearchInputS = styled.TextInput`
  height: 40px;
  width: 80%;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 8px;
  margin: 16px;
`;

const ProductList = styled.FlatList`
  flex: 1;
  margin-left: 5%;
  margin-right: 3%;
`;

const ProductCardContainer = styled.View`
  width: 48%; 
  heigth:100px;
  margin: 1%;
`;

export default ProductSearchScreen;
