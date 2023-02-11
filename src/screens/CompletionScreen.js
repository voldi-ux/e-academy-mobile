import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from "../resources/colors.js"

const CompletionScreen = ({ navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.blueDark,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10,
      }}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>20</Text>
        <Text style={styles.circleText}>Out Of</Text>
        <Text style={styles.circleText}>25</Text>
      </View>
      <Text style={styles.p}>
        Congratulation Voldi for completing all the question. You did
        exceptionally well for this test.
      </Text>
      <Pressable style={{...styles.button, backgroundColor: colors.pink}}>
        <Text style={styles.buttonText}>click here to view answers</Text>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("HomeScreen");
      }} style={{...styles.button, backgroundColor: colors.purpleLight}}>
        <Text style={styles.buttonText}>click here to go to main menu</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  circle: {
    width: 250,
    height: 250,
    backgroundColor: colors.green,
    borderRadius: 250,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 5,
    borderColor: colors.white,
  },

  circleText: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.white,
  },

  p: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    marginVertical: 25,
    fontWeight: '400',
  
  },

  button: {
    marginBottom: 20,
    padding: 10,
    width: '100%',
    borderRadius:100,
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    textTransform:"capitalize"
  },
});

export default CompletionScreen;
