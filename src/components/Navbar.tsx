// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon  from 'react-native-vector-icons/AntDesign';

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
      <FontAwesomeIcon  name='home' size={24} color={"#288474"}/>
      <FontAwesomeIcon  name='search' size={24} color={"#288474"}/>
      <AntDesignIcon  name='profile' size={24} color={"#288474"}/>
    </NavbarContainer>
  );
}

export default Navbar;
