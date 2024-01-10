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

const LandingComponent = () => {
  const {navigate} = useNavigation();

  const handlePress = () => navigate('LandingPageDetailsScreen');
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello What Would You</Text>
      <Text style={styles.heading}>Like To Be Called ?</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your preferred name" />
      </View>

      
      <ButtonLarge
        bgColor={colors.green}
        color={colors.white}
        text={'Continue'}
        onPress={handlePress}
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
    minHeight:400
  },
  heading: {
    fontSize: 30,
    color: colors.blueDark,
    fontWeight: '700',
  },
  inputContainer: {
      marginVertical: 15,
      marginBottom:"auto"
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
  button: {
    backgroundColor: colors.green,
  },
});

export default LandingComponent;
