// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialComunutyIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NavbarContainer = styled.View`
  height: 60px;
  width: 100%;
  background-color: #A2EBC1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: absolute;
  bottom: 0;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <FontAwesomeIcon  name='home' size={24} color={"#fff"} />
      <FontAwesomeIcon  name='search' size={24} color={"#fff"}/>
      <MaterialComunutyIcons  name='face-woman-profile' size={24} color={"#fff"}/>
    </NavbarContainer>
  );
}

export default Navbar;
