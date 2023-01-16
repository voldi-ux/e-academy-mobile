import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../../resources/colors';

// should recieve title
const TopicListItem = ({title}) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.ListItemContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Switch />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  ListItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    paddingTop:15,
  },

  heading: {
    color: colors.black,
    fontSize:18,
  },
});
export default TopicListItem;
