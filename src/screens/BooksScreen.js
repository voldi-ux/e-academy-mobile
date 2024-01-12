import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  Switch,
} from 'react-native';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../resources/colors';

const data = [
  {
    title: 'Mathematics',
    data: [
      'Grade 12 Maths Siyavula',
      'Grade 11 Maths Siyavula',
      'Grade 10 Maths Siyavula',
      'Grade 12 Maths study guide',
    ],
  },

  {
    title: 'Physical Sciences',
    data: [
      'Grade 12 physical sciences Siyavula',
      'Grade 11 physical sciences Siyavula',
      'Grade 10 physical sciences Siyavula',
      'Grade 12 physical sciences study guide',
    ],
  },
  {
    title: 'Life Sciences',
    data: [
      'Grade 12 life sciences Siyavula',
      'Grade 11 life sciences Siyavula',
      'Grade 10 life sciences Siyavula',
      'Grade 12 life sciences study guide',
    ],
  },
];

//must work on the item seperator (important)

const BooksScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.sectionItem}>
        <Text style={styles.sectionItemText}>{item}</Text>
      </View>
    );
  };
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
        <Text style={styles.heading}>Books</Text>
        <View></View>
      </View>

      <SectionList
        style={styles.sections}
        sections={data}
        keyExtractor={(item, index) => item}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => {
          return (
            <View style={styles.header}>
              <Text style={styles.headertext}>{title}</Text>
            </View>
          );
        }}
      />
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

  sections: {
    padding: 5,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 18,
    color: colors.blueDark,
  },

  header: {
    backgroundColor: colors.yellow,
    padding: 5,
  },

  headertext: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },

  sectionItemText: {
    fontSize: 18,
    color: colors.green,
  },

  sectionItem: {
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLight,
  },
});

export default BooksScreen;
