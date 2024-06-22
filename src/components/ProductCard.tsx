// src/components/ProductCard.tsx
import React from 'react';
import styled from 'styled-components/native';

const Card = styled.View`
  padding: 16px;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  elevation: 2; // for shadow on Android
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2 };
  shadow-opacity: 0.2;
  shadow-radius: 2; // for shadow on iOS
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #666;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
    </Card>
  );
};

export default ProductCard;
