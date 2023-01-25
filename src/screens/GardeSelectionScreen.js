import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Select from '../components/select/select';
import {colors} from '../resources/colors';

const GradeSelectionScreen = ({navigation }) => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.box}>
        <Text
          style={styles.heading}>
          Select the grade you would like to get practice for
        </Text>
        <Select />
      </View>
          <Pressable style={styles.button} onPress={() => {
              //should {"topiclistScreen", {subject:"name of the subject", grades: [array of grades]}}
              navigation.navigate("TopicListScreen");
      }}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20385C',
    padding: 10,
  },

  box: {
    width: '100%',
    backgroundColor: '#707070',
    borderRadius: 10,
    padding: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
    marginBottom: 15,
    textTransform: 'capitalize',
  },

  button: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: 40,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
    buttonText: {
        fontSize: 20,
        color: colors.white,
        fontWeight:"600 "
  }
});

export default GradeSelectionScreen;
