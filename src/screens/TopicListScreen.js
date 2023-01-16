import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';

import {colors} from '../resources/colors';
import IoIcon from 'react-native-vector-icons/Ionicons';
import TopicListItem from '../components/TopicListItem/TopicListItem';

const TopicListScreen = ({ navigation }) => {
 
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}>
          <IoIcon name="chevron-back-outline" size={35} color={colors.blueDark} />
        </TouchableOpacity>
        <Text style={styles.heading}>Pick Topics</Text>
        <View></View>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}>
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} /> 
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
          <TopicListItem title={'Trigonometry Equations'} />
        </ScrollView>
      </View>

      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Text style={styles.buttonTxt}>Practice</Text>
        </View>
      </TouchableNativeFeedback>
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
    fontWeight:"600",
    color: colors.blueDark,
    fontWeight: '500',
    marginLeft:50,
  },

  button: {
    width: '96%',
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.blueDark2,
    justifyContent: 'center',

      alignSelf: 'center',
    marginVertical:10,
  },

  buttonTxt: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TopicListScreen;
