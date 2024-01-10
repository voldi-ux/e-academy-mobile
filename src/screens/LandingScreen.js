import {ImageBackground, StyleSheet} from 'react-native';
import SignInComponent from '../components/Auth/SignInComponent';
import LandingComponent from '../components/landing/LandingComponent';

const LandingScreen = () => {
  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
       <LandingComponent />
    </ImageBackground>
  );
};

export default LandingScreen;
