import {ImageBackground, StyleSheet} from 'react-native';
import SignInComponent from '../components/Auth/SignInComponent';
import SignUpComponent from '../components/Auth/SignUpCompnent';

const AuthScreenSignUp = () => {
  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <SignUpComponent />
    </ImageBackground>
  );
};

export default AuthScreenSignUp;
