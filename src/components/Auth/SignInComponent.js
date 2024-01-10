import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../resources/colors';
import ButtonLarge from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

const SignInComponent = () => {
  const {navigate} = useNavigation();

  const handleSignIn = () => navigate('AuthScreenSignUp');
  const gotToSignUp = () => navigate('AuthScreenSignUp');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In To</Text>
      <Text style={styles.heading}>Eacademy</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter your password"
        />
      </View>
      <TouchableOpacity onPress={gotToSignUp}>
        <View style={styles.linkContainer}>
          <Text style={styles.linkTxt}>Do not have an account ? </Text>
          <Text style={{...styles.linkTxt, color: colors.blueLight}}>
            Click here
          </Text>
        </View>
      </TouchableOpacity>
      <ButtonLarge
        bgColor={colors.green}
        color={colors.white}
        text={'Sign in'}
        onPress={handleSignIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    paddingVertical: 30,
    elevation: 5,
    borderRadius: 20,
  },
  heading: {
    fontSize: 30,
    color: colors.blueDark,
    fontWeight: '700',
  },
  inputContainer: {
    marginVertical: 15,
  },

  lable: {
    fontSize: 18,
    color: colors.blueDark,
    marginBottom: 10,
  },
  input: {
    height: 50,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  linkTxt: {
    fontSize: 18,
    color: colors.blueDark,
  },
  button: {
    elevation: 0,
    backgroundColor: colors.green,
  },
});

export default SignInComponent;
