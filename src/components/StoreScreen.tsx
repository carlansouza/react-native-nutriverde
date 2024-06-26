import React from "react";
import styled from "styled-components/native";

const StoreScreen: React.FC = () => {
  const products = [
    { id: 1, name: "Loja 1", description: "Descrição da loja 1" },
    { id: 2, name: "Loja 2", description: "Descrição da loja 2" },
    { id: 3, name: "Loja 3", description: "Descrição da loja 3" },
    ];

    return (
        <Container>
            <Title>Lojas</Title>
            <Content>
                {products.map((product) => (
                    <StoreContainer key={product.id}>
                        <StoreTitle>{product.name}</StoreTitle>
                        <StoreDescription>{product.description}</StoreDescription>
                    </StoreContainer>
                ))}
            </Content>
        </Container>
    );

}

const Container = styled.View`
    flex: 1;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    padding: 16px;
`;

const Content = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

const StoreContainer = styled.View`
    width: 45%;
    margin-left: 3.5%;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    
`;

const StoreTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const StoreDescription = styled.Text`
    font-size: 16px;
    color: #666;
    margin-bottom: 8px;
`;


export default StoreScreen;