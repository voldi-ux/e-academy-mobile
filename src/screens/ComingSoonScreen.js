import React from 'react';
import {View, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import { colors } from '../resources/colors';

const ComingSoonScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
      }}>
      <Lottie
        source={require('../resources/lotties/opener-loading.json')}
        autoPlay
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: colors.blueDark2
        }}>
        Coming Soon
      </Text>
    </View>
  );
};

export default ComingSoonScreen;
