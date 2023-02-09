import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text, Pressable} from 'react-native';

import IoIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../resources/colors';

const QuestionView = ({ handlePress}) => {
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
          <IoIcon name="share-social-outline" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
      <Pressable onPress={() => { 
        handlePress();
      }}>
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
      </Pressable>

      {/* footer/ buttons */}
      <View style={styles.footer}>
        {/* buttons left */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <View style={{...styles.button, backgroundColor: colors.purple}}>
              <IoIcon name="time-outline" size={15} style={styles.buttonIcon} />
              <Text style={styles.buttonTxt}>2 days ago</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{...styles.button, backgroundColor: colors.green}}>
              <IoIcon
                name="thumbs-up-outline"
                size={15}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonTxt}>2 likes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{...styles.button, backgroundColor: colors.grey}}>
              <IoIcon
                name="bookmark-outline"
                size={15}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonTxt}> Bookmark</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    
        marginBottom:10,
  },
  header: {
    backgroundColor: colors.blueDark2,
    flexDirection: 'row',
    justifyContent: 'space-between',
      paddingHorizontal: 10,
    paddingVertical:10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heading: {
    fontSize: 14,
    color: colors.white,
  },

  txt: {
    fontSize: 10,
    color: colors.white,
  },

  descriptionTxt: {
    fontSize: 15,
  },

  image: {
    width: '100%',
    height: 200,
  },

  footer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    
    borderTopWidth: .5,
    borderTopColor: colors.grey,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    height: 30,
    minWidth: 100,
    borderRadius: 100,

    marginRight: 10,
    justifyContent:"center"
  },

  buttonTxt: {
    marginLeft: 5,
    color: colors.white,
    fontSize: 8
  },

  buttonIcon: {
    color: colors.white,
  },
});

export default QuestionView;
