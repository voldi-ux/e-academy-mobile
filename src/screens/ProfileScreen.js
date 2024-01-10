import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IoIcon from 'react-native-vector-icons/Ionicons';
import Tabs from '../components/tab/Tabs';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../resources/colors';

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = () => navigation.navigate('AuthScreenSignIn'); 
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
          <IoIcon
            name="chevron-back-outline"
            size={35}
            color={colors.blueDark}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Profile</Text>
        <View></View>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={styles.container}>
          <SIcon name="user" size={80} color={colors.white} />
          <View style={styles.content}>
            <Text style={styles.names}>Voldi Muyumba</Text>
            <Text style={styles.detail}>Grade: 12 Learner</Text>
            <Text style={styles.detail}>Stduent Number: 122342345</Text>
            <Text style={styles.detail}>Schoool: Barnato Park</Text>
            <Text style={styles.detail}>Subjects: Physics and Maths</Text>
            <Text style={styles.detail}>Date Joined: 2023 17 Jan</Text>
          </View>
        </View>

        <Text style={styles.headingLarge}>
          Hey Voldi Since You Joined You have{' '}
        </Text>
        <View style={styles.info}>
          <Text style={styles.detail2}>Completed 20 Mcqs in total</Text>
          <Text style={styles.detail2}>
            Completed 25 Mathematics questions in total
          </Text>
          <Text style={styles.detail2}>
            Completed 5 Phyiscal Science questions in total
          </Text>
        </View>
        <View style={styles.info2}>
          <Text style={styles.detail2}>Asked 20 questions</Text>
          <Text style={styles.detail2}>Recieved 20 answers</Text>
          <Text style={styles.detail2}>Had 20 in-person tutoring lessons </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <IoIcon name="log-out-outline" size={35} color={colors.white} />
          <Text style={styles.buttonTxt}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.warningCotaier}>
          <IoIcon name="warning-outline" size={35} color={colors.blueDark} />
          <Text style={styles.warnTxt}>
            Note you can only log out while you have an active internet connection
          </Text>
        </View>
      </ScrollView>
      <Tabs />
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

  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blueDark,
    fontWeight: '500',
    marginLeft: 50,
  },
  container: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 10,
    marginBottom: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    marginLeft: 10,
  },

  names: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
    marginBottom: 5,
  },

  detail: {
    color: colors.white,
    fontSize: 18,
  },

  detail2: {
    color: colors.white,
    fontSize: 16,
  },

  headingLarge: {
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '600',
    color: colors.gold,
    fontWeight: '500',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },

  info: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: colors.red,
    borderRadius: 10,
    marginBottom: 10,
  },

  info2: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginBottom: 50,
  },

  button: {
    padding: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    borderRadius: 100,
    marginBottom: 10,
  },

  buttonTxt: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 5,
  },

  warningCotaier: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
  },
  warnTxt: {
    marginLeft: 5,
    color: colors.blueDark,
    flex: 1,
  },
});
export default ProfileScreen;
