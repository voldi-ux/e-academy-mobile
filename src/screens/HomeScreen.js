import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IoIcon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons';
import OIcon from 'react-native-vector-icons/Octicons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

//components
import TopNav from '../components/nav/Nav';
import SearchInput from '../components/searchInput/SearchInput';
import Tabs from '../components/tab/Tabs';
import {colors} from '../resources/colors';
import Menu from '../components/Menu/Menu';
import PostComponent from '../components/post/Post';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVissible] = useState(false);

  console.log(navigation.getState());

  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{flex: 1}}>
      <ScrollView>
        <View style={styles.header}>
          {/* the nav */}
          <TopNav />
          {/* heading */}
          <Text style={styles.heading}>
            Hey Voldi Search Or Post A Question
          </Text>
          {/* search */}
          <SearchInput />
        </View>

        <View
          style={{
            ...styles.row,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            width: '100%',
            marginBottom: 20,
          }}>
          <View style={{...styles.showCase, backgroundColor: colors.grey}}>
            <Micon name="insights" size={50} color={colors.white} />
            <Text style={styles.showCaseText}>240 Questions Done</Text>
          </View>
          <View style={{...styles.showCase, backgroundColor: colors.yellow}}>
            <OIcon name="rocket" size={50} color={colors.white} />
            <Text style={styles.showCaseText}>24 MCQs Done</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            elevation: 5,
          }}>
          <TouchableNativeFeedback>
            <View
              style={{
                width: '95%',
                marginHorizontal: 'auto',
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#3C8EDA',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: colors.white,
                }}>
                Click Here To See How You Compare To People Like You
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.sectionContainer}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('GradeSelectionScreen', {
                subject: 'mathematics',
              });
            }}>
            <View
              style={{...styles.sectionItem, backgroundColor: colors.blueDark}}>
              <SIcon name="calculator" size={40} color={colors.white} />
              <Text style={styles.sectionText}>Mathematics</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View
              style={{...styles.sectionItem, backgroundColor: colors.orange}}>
              <IoIcon name="flask-outline" size={40} color={colors.white} />
              <Text style={styles.sectionText}>Science</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={{...styles.sectionItem, backgroundColor: colors.red}}>
              <MCicon name="rocket-outline" size={50} color={colors.white} />
              <Text style={styles.sectionText}>MCQs</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('ComingSoonScreen');
            }}>
            <View
              style={{...styles.sectionItem, backgroundColor: colors.green}}>
              <IoIcon name="calendar-outline" size={40} color={colors.white} />
              <Text style={styles.sectionText}>Schedules</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('PastPapersScreen');
            }}>
            <View
              style={{
                ...styles.sectionItem,
                backgroundColor: colors.blueDark2,
              }}>
              <IoIcon name="newspaper-outline" size={40} color={colors.white} />
              <Text style={styles.sectionText}>Past Papers</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('QuestionScreen');
            }}>
            <View style={{...styles.sectionItem, backgroundColor: colors.grey}}>
              <MCicon
                name="ruler-square-compass"
                size={50}
                color={colors.white}
              />
              <Text style={styles.sectionText}>Questions</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('ComingSoonScreen');
            }}>
            <View
              style={{
                ...styles.sectionItem,
                backgroundColor: colors.pink,
              }}>
              <IoIcon
                name="book-outline"
                size={40}
                color={colors.white}
              />
              <Text style={styles.sectionText}>Textbooks</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('ComingSoonScreen');
            }}>
            <View
              style={{
                ...styles.sectionItem,
                backgroundColor: colors.purpleLight,
              }}>
              <IoIcon
                name="play-circle-outline"
                size={40}
                color={colors.white}
              />
              <Text style={styles.sectionText}>Lessons</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('ComingSoonScreen');
            }}>
            <View style={{...styles.sectionItem, backgroundColor: colors.gold}}>
              <IoIcon name="people-outline" size={40} color={colors.white} />
              <Text style={styles.sectionText}>Tutors</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('ResourceScreen');
            }}>
            <View
              style={{
                ...styles.sectionItem,
                backgroundColor: colors.purple,
              }}>
              <SIcon name="info" size={40} color={colors.white} />
              <Text style={styles.sectionText}>More...</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
      {/* conditionaly rendering the menu */}
      {menuVisible && <Menu setVisible={setMenuVissible} children={<PostComponent />}/>}
      <Tabs openMenu={() => setMenuVissible(true)} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  header: {
    height: 230,
    backgroundColor: colors.blueDark,
    borderBottomRightRadius: 100,
    paddingHorizontal: 5,
    paddingTop: 10,
    marginBottom: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    paddingHorizontal: 10,
    marginBottom: 10,
    lineHeight: 35,
  },

  showCase: {
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  showCaseText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },

  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 60,
  },

  sectionItem: {
    width: '31%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
  },

  sectionText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default HomeScreen;
