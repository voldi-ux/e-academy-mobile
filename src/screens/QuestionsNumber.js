import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../resources/colors';

const QuestionsNumberScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 30,
        paddingBottom: 10,
      }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Enter the number of questions You would like to do
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter at least 5 questions or more"
          keyboardType="numeric"
        />
      </View>
      <View style={{...styles.box, backgroundColor: colors.green}}>
        <Text style={styles.boxTxt}>
          Note that you will not be able to see the full solutions to the
          questions until you are done with all the question. However you still
          be able to check if your answer is correct
        </Text>
      </View>
      <View style={{...styles.box, backgroundColor: colors.orange}}>
        <Text style={styles.boxTxt}>
          Note that you will not be able to see the full solutions to the
          questions until you are done with all the question. However you still
          be able to check if your answer is correct
        </Text>
      </View>
      <View style={{...styles.box, backgroundColor: colors.red}}>
        <Text style={styles.boxTxt}>
          Note that you will not be able to see the full solutions to the
          questions until you are done with all the question. However you still
          be able to check if your answer is correct
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt}>Start Working</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
    marginBottom: 15,
    elevation: 2,
    backgroundColor: '#f7f7f7',

    borderRadius: 10,
  },

  heading: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: colors.blueDark,
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#ececec',
    borderRadius: 50,
    padding: 10,
  },

  box: {
    elevation: 2,
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },

  button: {
    marginTop: 'auto',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    borderRadius: 100,
  },

  btnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
  },
  boxTxt: {
    fontSize: 18,
    color: colors.white,
  },
});

export default QuestionsNumberScreen;
