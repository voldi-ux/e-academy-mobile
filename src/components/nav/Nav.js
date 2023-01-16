import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import IoIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../resources/colors';
import { useNavigation } from '@react-navigation/native';

const TopNav = () => {
    const navigation = useNavigation();
    
  return (
    <View style={{...styles.nav, ...styles.row}}>
      <View style={styles.row}>
        {/* logo */}
        <IoIcon name="school-sharp" size={40} color={colors.gold} />
        <Text style={styles.logoText}>E-academy</Text>
      </View>

          <TouchableOpacity onPress={() => {
              navigation.navigate("NotificationScreen");
      }}>
        <View style={styles.notificationContainer}>
          <FIcon
            name="bell"
            size={40}
            color={colors.white}
            style={styles.notificationIcon}
          />
          <View style={styles.count}>
            <Text style={styles.countTxt}>10</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  nav: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    minHeight: 50,
  },

  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  logoText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginLeft: 10,
    alignSelf: 'center',
    fontStyle: 'italic',
  },

  notificationIcon: {
    right: 20,
  },
  count: {
    position: 'absolute',
    backgroundColor: colors.red,
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },

  countTxt: {
    color: colors.white,
    fontSize: 14,
  },
});

export default TopNav;
