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
    title: 'Bursaries And Scholarships',
    data: [
      'The Mukuru Bursary',
      'Nsfas 2023',
      'American study abroad scholar',
      'Canadian scholarship',
      'James Smith Educational funds',
      'Fundi Scheme Bursary',
      'Aviation Scholarship',
    ],
  },
  {
    title: 'Internships',
    data: [
      'Standard bank summer internship (2024)',
      ' j&j Internship (2023)',
      'Mukuru It internship (2023)',
      'Entelct software developing internship (2023)',
      'FNB internships (2023)',
      'Shoprite BBE internship (2023)',
      'Pick and Pay BEE internship (2023)',
    ],
  },
  {
    title: 'All About Univeristy',
    data: [
      'How to apply for a univerisity',
      'How to get bursaries',
      'How the aps point system work',
      'Getting you ready for university lifestyle',
      'Applying abroad',
    ],
  },
];

//must work on the item seperator (important)

const ResourceScreen = ({navigation}) => {
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
        <Text style={styles.heading}>Resources</Text>
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
    marginBottom:20,
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
    borderBottomWidth: 0.4,
    borderBottomColor: colors.grey,
  },
});

export default ResourceScreen;
