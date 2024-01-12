import {ImageBackground, StyleSheet} from 'react-native';
import SignInComponent from '../components/Auth/SignInComponent';
import SignUpComponent from '../components/Auth/SignUpCompnent';
import EdifyComponent from '../components/EdifyComponents/EdifyComponent';

const EidfySCreen = () => {
  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
      
      }}>
       <EdifyComponent />
    </ImageBackground>
  );
};

export default EidfySCreen;
