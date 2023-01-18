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

const papers = [
  {
    title: 'Mathematics',
    data: [
      {name: 'Grade 11 2017 june Exam', donloaded: true},
      {name: 'Grade 12 2020 November Exam', donloaded: true},
      {name: 'Grade 10 2017 june Exam', donloaded: true},
      {name: 'Grade 12 2019 june Exam', donloaded: false},
      {name: 'Grade 11 2016 November Exam', donloaded: true},
      {name: 'Grade 10 2021 November Exam', donloaded: true},
      {name: 'Grade 11 2022 june Exam', donloaded: true},
      {name: 'Grade 12 2013 june Exam', donloaded: true},
      {name: 'Grade 11 2017 November Exam', donloaded: true},
      {name: 'Grade 10 2023 November Exam', donloaded: true},
      {name: 'Grade 11 2025 june Exam', donloaded: true},
      {name: 'Grade 12 2011 june Exam', donloaded: true},
    ],
  },
  {
    title: 'Physical Sciences',
    data: [
      {name: 'Grade 11 2017 june Exam', donloaded: true},
      {name: 'Grade 12 2020 November Exam', donloaded: true},
      {name: 'Grade 10 2017 june Exam', donloaded: true},
      {name: 'Grade 12 2019 june Exam', donloaded: false},
      {name: 'Grade 11 2016 November Exam', donloaded: true},
      {name: 'Grade 10 2021 November Exam', donloaded: true},
      {name: 'Grade 11 2022 june Exam', donloaded: true},
      {name: 'Grade 12 2013 june Exam', donloaded: true},
      {name: 'Grade 10 2022 November Exam', donloaded: true},
      {name: 'Grade 11 2019 june Exam', donloaded: true},
      {name: 'Grade 12 2015 june Exam', donloaded: true},
    ],
  },
];



//must work on the item seperator (important)

const PapersScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.sectionItem}>
        <Text style={styles.sectionItemText}>{item.name}</Text>
        {!item.donloaded ? (
          <IoIcon name="download-outline" size={25} color={colors.gold} />
        ) : (
          <IoIcon
            name="checkmark-circle-outline"
            size={25}
            color={colors.green}
          />
        )}
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
        <Text style={styles.heading}>Past Papers</Text>
        <View></View>
      </View>
      <TouchableOpacity style={styles.toggleList}>
        <Text style={styles.toggleText}>Show all papers</Text>
        <Switch />
      </TouchableOpacity>

      <SectionList
        style={styles.sections}
        sections={papers}
        keyExtractor={(item, index) => item.name}
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

  toggleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.grey,
  },
});

export default PapersScreen;
