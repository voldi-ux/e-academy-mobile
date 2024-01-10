import {ImageBackground, StyleSheet} from 'react-native';
import LandingComponent from '../components/landing/LandingComponent';
import LandingDetailsComponent from '../components/landing/LandingDetailsComponent';
import { useState } from 'react';

const LandingDetailsScreen = () => {
  
  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <LandingDetailsComponent />
    </ImageBackground>
  );
};

export default LandingDetailsScreen;
