import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../resources/colors';

const OpenQuestionScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.blueDark,
      }}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}>
          <IoIcon name="chevron-back-outline" size={35} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
              <TouchableOpacity
                  onPress={() => {
                      navigation.navigate('ViewPdfSCreen');
                  }}
          style={{...styles.button, backgroundColor: colors.green}}>
          <Text style={styles.buttonTxt}>Open Question Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: colors.yellow}}>
          <Text style={styles.buttonTxt}>Open Question Paper</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 50,
    width: '100%',
    // backgroundColor: colors.blueDark,
    flexDirection: 'row',
    padddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  buttons: {
    position: 'absolute',
    top: '45%',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  button: {
    height: 50,
    width: '100%',
    borderRadius: 100,
    marginBottom: 15,
    justifyContent: 'center',
  },
  buttonTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
});

export default OpenQuestionScreen;
