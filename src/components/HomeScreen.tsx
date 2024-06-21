// src/components/HomeScreen.js
import React from 'react';
import { Button, Alert } from 'react-native';
import styled from 'styled-components/native';


const MainContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Container = styled.View`
    flex-direction: column;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #288474;

`;
const Paragraph = styled.Text`
  font-size: 16px;
  color: #285A84;
  margin-bottom: 20px;
`;

const Line = styled.Text`
  width: 50px;
  height: 2px;
  background-color: #A2EBC1;
`;

const HomeScreen = () => {
  return (
    <MainContainer>
        <Container>
        <Line />  
        <Title>nutriverde</Title>
        <Paragraph>Sabores da terra em sua mesa</Paragraph>
        <Button
            title="Login"
            color={'#A2EBC1'}
            onPress={() => Alert.alert('Botão Pressionado')}
        />
        </Container>
    </MainContainer>
  );
};

const Logo = () => {
    return (
        <>       
          <Line />  
          <Title>
            nutriverde
          </Title>
          <Paragraph>
            Sabores da terra em sua mesa
          </Paragraph>
        </>
    );
};

export { Logo };

export default HomeScreen;