import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

import IoIcon from 'react-native-vector-icons/Ionicons';
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../resources/colors';

const Tabs = ({ openMenu }) => {
    const navigation = useNavigation();
    const navigateTo = (screen) => {
        navigation.navigate(screen);
  }
  

  return (
    <View style={styles.tabs}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <IoIcon name="ios-home-outline" size={35} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openMenu}>
          <MCicon name="square-edit-outline" size={35} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StatsScreen');
          }}>
          <IoIcon name="bar-chart-outline" size={35} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <SIcon name="user" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#20385C',
    height: 50,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export default Tabs;
