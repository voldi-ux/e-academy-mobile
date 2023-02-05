import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {colors} from '../../resources/colors';

import IoIcon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Post = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          paddingTop: 20,
        }}>
        <Text style={styles.heading1}>Preview</Text>
        <Text style={styles.heading2}>
          How do I solve for x in this problem?
        </Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../resources/images/math.png')}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={{
              width: '46%',
            }}>
            <View style={{...styles.button, backgroundColor:colors.green}}>
              <IoIcon name="camera-outline" color={colors.white} size={30} />
              <Text style={styles.buttonTxt}>Take a picture</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '46%',
            }}>
            <View style={{...styles.button, backgroundColor:colors.grey}}>
              <IoIcon name="image-outline" color={colors.white} size={30} />
              <Text style={styles.buttonTxt}>upload a picture</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Type your question, your first line will be the heading of the question"
        />

        <TouchableOpacity>
          <View style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>Post Question</Text>
            <IoIcon name="send-outline" color={colors.white} size={30} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blueDark2,
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blueDark2,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
  },

  buttonTxt: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.white,
  },

  input: {
    padding: 10,
    backgroundColor: colors.greyLight,
    marginVertical: 10,
    height: 200,
    textAlignVertical: 'top',
    color: colors.blueDark,
  },

  submitBtn: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitBtnTxt: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
    marginRight: 10,
  },
});

export default Post;
