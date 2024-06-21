import React from 'react';
import { View, TextInput, Button, Alert, Text} from 'react-native';
import styled from 'styled-components/native';
import {Logo} from './HomeScreen';

const LoginScreen = () => {
  const handleLogin = () => {
    // Lógica de autenticação aqui (pode ser uma chamada a uma API, etc.)
    Alert.alert('Login realizado com sucesso!');
  };

  return (
    <Container>

      <Logo />

      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
      />

      <Text>
        Ainda não tem uma conta?{' '}
        <Text 
          onPress={() => Alert.alert('Criar conta')} style={{color: '#288474'}}
          marginBottom={10}>
          Crie uma conta
        </Text>
      </Text>

      <Text
        onPress={() => Alert.alert('Esqueceu a senha?')}
        marginBottom={10}>   
          Esqueceu a senha? 
      </Text>
      
      <LoginButton 
        title="Login" 
        onPress={handleLogin}
        color={'#A2EBC1'}
        />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


const LoginButton = styled.Button`
    display: flex;
    width: 100%;
`;

export default LoginScreen;
