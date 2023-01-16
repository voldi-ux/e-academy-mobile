import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FIcon from 'react-native-vector-icons/FontAwesome5';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../resources/colors';

const NotificationItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.IconContainer}>
        <FIcon name="bell" size={40} color={Colors.white} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Voldi answered your question : Whats the difference between
          integration and differentiation?
        </Text>

        <View style={{...styles.button, backgroundColor: colors.purple}}>
          <IoIcon name="time-outline" size={15} style={styles.buttonIcon} />
          <Text style={styles.buttonTxt}>2 days ago</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  IconContainer: {
    height: 50,
    width: 50,
    borderRadius:50,

    backgroundColor: colors.green,
    marginRight: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
  },

  text: {
    fontSize: 18,
    color:colors.blueDark
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    height: 30,
    width:100,
    borderRadius: 100,
    marginTop:10,
    marginRight: 10,
    justifyContent: 'center',
  },

  buttonTxt: {
    marginLeft: 5,
    color: colors.white,
    fontSize: 10,
  },

  buttonIcon: {
    color: colors.white,
  },
});

export default NotificationItem;
