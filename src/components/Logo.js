// src/components/Logo.js
import React from 'react';
import { SvgXml } from 'react-native-svg';
import LogoSvg from '../assets/logo.svg'; // Supondo que você tenha um arquivo SVG na pasta assets

const Logo = () => {
  return <SvgXml xml={LogoSvg} width="100%" height="100%" />;
};

export default Logo;
