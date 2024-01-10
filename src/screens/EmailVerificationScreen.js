import {ImageBackground, StyleSheet} from 'react-native';
import EmailVerificationComponent from '../components/Auth/EmailVerificationComponent';

const EmailVerificationScreen = () => {
  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
          paddingHorizontal: 20,
        alignItems:"center"
      }}>
       <EmailVerificationComponent email={"voldimuyumba57@gmail.com"}/>
    </ImageBackground>
  );
};

export default EmailVerificationScreen;
