import React from 'react';
import styled from 'styled-components/native';


const RequestsScreen: React.FC = () => {
    const orders = [
        { id: 1, name: 'Pedido 1', status: 'Em andamento' },
        { id: 2, name: 'Pedido 2', status: 'Concluído' },
        { id: 3, name: 'Pedido 3', status: 'Em andamento' },
    ];

    return (
        <Container>
            <Title>Meus Pedidos</Title>
            {orders.map((order) => (
                <OrderContainer key={order.id}>
                    <OrderTitle>{order.name}</OrderTitle>
                    <OrderStatus>Status: {order.status}</OrderStatus>
                    <OrderButton>
                        <OrderButtonText>Detalhes</OrderButtonText>
                    </OrderButton>
                </OrderContainer>
            ))}
        </Container>

    );
};

const Container = styled.View`
    flex: 1;
    padding: 16px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const OrderContainer = styled.View`
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
`;

const OrderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const OrderStatus = styled.Text`
    font-size: 16px;
    color: #666;
    margin-bottom: 8px;
`;

const OrderButton = styled.TouchableOpacity`
    background-color: #A2EBC1;
    padding: 8px;
    border-radius: 4px;
`;

const OrderButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;



export default RequestsScreen;