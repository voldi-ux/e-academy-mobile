import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import IoIcon from 'react-native-vector-icons/Ionicons';
import NotificationItem from "../components/notificationItem/NotificationItem"

import {colors} from '../resources/colors';


const NotificationScreen = ({navigation}) => {
  return (
    <View style={{
      flex:1
    }}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) { 
              navigation.goBack();
            }
          }}>
          <IoIcon
            name="chevron-back-outline"
            size={35}
            color={colors.blueDark}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Pick Topics</Text>
        <View></View>
      </View>
      <ScrollView style={{
        flex:1
      }}>
        <Text style={styles.heading2}>
          Hey Voldi You Have 4 new Notifications
        </Text>

        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />

      </ScrollView>
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
  },

  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blueDark,
    fontWeight: '500',
    marginLeft: 50,
  },

  heading2: {
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '600',
    color: colors.gold,
    fontWeight: '500',

    width: '80%',
    paddingHorizontal: 10,

    marginVertical:10,
  },
});
export default NotificationScreen;
