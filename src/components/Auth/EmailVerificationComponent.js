import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../resources/colors';
import { useNavigation } from '@react-navigation/native';

const EmailVerificationComponent = ({ email }) => {
    const navigation = useNavigation( )
      const goHome = ( ) => navigation.navigate("HomeScreen")
  return (
    <View style={styles.circle}>
      <Text style={styles.circleText}>A verification Email was sent to</Text>
          <Text style={{ ...styles.circleText, color: colors.blueDark }}>{email}</Text>
          <TouchableOpacity onPress={goHome}>
              <Text>Go to home</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 250,
    height: 250,
    backgroundColor: colors.green,
    borderRadius: 250,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 10,
    borderColor: colors.blueDark,
    padding: 10,
  },

  circleText: {
    fontSize: 20,
    fontWeight: '400',
      color: colors.white,
    textAlign:"center"
  },
});

export default EmailVerificationComponent;
