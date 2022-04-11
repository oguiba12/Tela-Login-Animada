import React from 'react'
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#38A69D' // Cor da StatusBar
        barStyle='light-content' // Icones da StatusBar claros. dark-content deixaria escuros
      />
      <Routes />
    </NavigationContainer>
  );
}