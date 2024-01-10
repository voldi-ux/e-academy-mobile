import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../resources/colors';

const ButtonLarge = ({text, bgColor, color, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <View style={{...styles.buttonContainer, backgroundColor: bgColor}}>
        <Text style={{...styles.text, color}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ButtonLarge;
