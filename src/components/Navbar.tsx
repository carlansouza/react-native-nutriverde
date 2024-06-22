// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components/native';

const NavbarContainer = styled.View`
  height: 60px;
  width: 100%;
  background-color: #A2EBC1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: absolute;
  top: 0;
`;

const NavbarText = styled.Text`
  color: white;
  font-size: 18px;
  color: #288474;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarText>Home</NavbarText>
      <NavbarText>Buscar</NavbarText>
      <NavbarText>Profile</NavbarText>
    </NavbarContainer>
  );
}

export default Navbar;
