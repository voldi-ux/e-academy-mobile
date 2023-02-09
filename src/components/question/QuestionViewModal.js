import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from 'react-native';

import IoIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../resources/colors';

const QuestionViewModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          {/* details */}
          <Text style={styles.heading}>Posted By : Voldi Muyumba</Text>
          <Text style={styles.txt}>Grade 12 Learner</Text>
          <Text style={styles.txt}>Barnato Park High</Text>
          <Text style={styles.txt}>Mathematics : Trigonometry</Text>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
          }}>
          <IoIcon name="share-social-outline" size={30} color={colors.green} />
        </TouchableOpacity>
      </View>

      {/* question descrtiopn */}
      <Text style={styles.descriptionTxt}>
        {' '}
        How do I solve for x in this problem ?{' '}
      </Text>
      {/* images container if any */}
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../resources/images/math.png')}
        />
      </View>

      <Text style={styles.date}>23 August 2034</Text>

      <View style={styles.line}></View>

      <View style={styles.info}>
        <Text style={styles.infoTxt}>
          This question has not been answered yet
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heading: {
    fontSize: 14,
    color: colors.green,
  },

  txt: {
    fontSize: 10,
    color: colors.green,
  },

  descriptionTxt: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: colors.blueDark,
  },

  image: {
    width: '100%',
    height: 200,
  },

  date: {
    color: colors.grey,
    paddingHorizontal: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.grey,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  info: {
    marginHorizontal: 10,
    backgroundColor: colors.red,
    paddingVertical: 10,
  },

  infoTxt: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
  },
});

export default QuestionViewModal;
