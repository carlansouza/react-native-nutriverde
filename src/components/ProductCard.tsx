import React from 'react';
import styled from 'styled-components/native';



const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card>
      <Title>{product.name}</Title>
      <Description numberOfLines={2}>{product.description}</Description>
      <Price>${product.price.toFixed(2)}</Price>
      <ProductButton onPress={() => {}} > 
        <ProductButtonText>Comprar</ProductButtonText>  
      </ProductButton>
    </Card>
  );
};

const Card = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px; /* for shadow on iOS */
  align-items: center; 
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 8px; 
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center; 
`;

const Description = styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center; 
  margin-bottom: 8px; 
`;

const Price = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  text-align: center; 
`;

const ProductButton = styled.TouchableOpacity`
  background-color: #a2ebc1;
  margin: 5px 0;
  padding: 8px;
  border-radius: 8px;
`;

const ProductButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

type ProductProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
};

export default ProductCard;
