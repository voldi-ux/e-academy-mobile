import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {colors} from '../../resources/colors';
import ButtonLarge from '../Button/Button';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import AntICon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';

const LandingDetailsComponent = () => {

  
  
  
  const [selectedGrade, setSelctedGrade] = useState(null);
  const [selectedSubs, setSelectedSub] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const {navigate, dispatch} = useNavigation();
  
  /// here we are reseting the navigatoin stack so the user can not go back to the previous 
  //screens
  const handlePress = () => dispatch( CommonActions.reset({
      index: 0,
      routes: [{name: 'HomeScreen'}],
    }))
  
  let handleModal = () => setModalVisible(!modalVisible);
  let isSubSelected = id => selectedSubs.indexOf(id);
  // this will toggle any selected subject
  let handleSelectSub = id => {
    //if the subjected is already selected we want to remove it otherwise add it
    if (isSubSelected(id) !== -1) {
      setSelectedSub(prev => {
        return prev.filter(subId => id != subId);
      });
    } else {
      setSelectedSub(prev => {
        return [...prev, id];
      });
    }
  };

  let subjects = [
    {
      id: 0,
      name: 'Mathematics',
    },
    {
      id: 1,
      name: 'Physical Sciences',
    },
    {
      id: 2,
      name: 'Life Sciences',
    },
    {
      id: 3,
      name: 'Mathematics',
    },
    {
      id: 4,
      name: 'Physical Sciences',
    },
    {
      id: 5,
      name: 'Life Sciences',
    },
    {
      id: 6,
      name: 'Mathematics',
    },
    {
      id: 7,
      name: 'Physical Sciences',
    },
    {
      id: 8,
      name: 'Life Sciences',
    },
  ];

  let grades = [
    {
      grade: 12,
      selected: false,
    },
    {
      grade: 11,
      selected: false,
    },
    {
      grade: 10,
      selected: false,
    },
  ];

  const presstoSelectGrade = grade => setSelctedGrade(grade);

  // this code and the prvious can be reafctored
  const renderSubjects = () => {
    return subjects.map(subj => {
      let selected = isSubSelected(subj.id) !== -1;
      return (
        <TouchableOpacity
          key={subj.id}
          onPress={() => handleSelectSub(subj.id)}
          style={
            {
              // backgroundColor: selected ? colors.green : colors.white,
            }
          }>
          <Text
            style={{
              ...styles.modalSubText,
              fontSize: 18,
              color: selected ? colors.green : colors.blueDark,
            }}>
            {subj.name}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const renderSelectedSubjects = () => {
    if (selectedSubs.length == 0) {
      return <Text>You need to select at least one question to continue</Text>;
    }

    return subjects.map(subj => {
      const selected = isSubSelected(subj.id) !== -1;

      return (
        selected && (
          <Text
            key={subj.id}
            style={{
              fontSize: 18,
              ...styles.modalSubText,
              color: colors.blueLight,
            }}>
            {subj.name}
          </Text>
        )
      );
    });
  };

  const renderGrades = () => {
    return grades.map(gradeObj => {
      let selected = gradeObj.grade == selectedGrade;
      return (
        <TouchableOpacity
          key={gradeObj.grade}
          onPress={() => presstoSelectGrade(gradeObj.grade)}
          style={styles.gradeContainer}>
          <Text
            style={{
              ...styles.text,
              color: selected ? colors.green : colors.blueLight,
            }}>
            Grade {gradeObj.grade}
          </Text>
          {selected && <AntICon name="check" size={20} color={colors.green} />}
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Pofile Details</Text>

      <View>
        <Text style={styles.heading2}>Grade</Text>
        {/* iterate over a list and render the available grade */}
        {renderGrades()}
      </View>

      <View style={styles.subjectsConainer}>
        <TouchableOpacity onPress={handleModal}>
          <Text style={styles.heading2}>Press here to select subjects</Text>
        </TouchableOpacity>
        <ScrollView
          style={{
            flex: 1,
          }}>
          {renderSelectedSubjects()}
        </ScrollView>
      </View>

      <ButtonLarge
        bgColor={colors.orange}
        color={colors.white}
        text={'Continue'}
        onPress={handlePress}
      />

      {/* mdoal and its content */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modal}></View>
        <View style={styles.modalContent}>
          <View style={styles.modalContentInner}>
            <View style={styles.modalheader}>
              <TouchableOpacity onPress={handleModal}>
                <IoIcon
                  name="chevron-back-outline"
                  size={35}
                  color={colors.blueDark}
                />
              </TouchableOpacity>
              <Text style={styles.modalHeading}>Select Your Subjects</Text>
            </View>
            <Text style={styles.modalHeading2}>
              You have selected {selectedSubs.length} subjects
            </Text>
            {renderSubjects()}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    paddingVertical: 30,
    elevation: 5,
    borderRadius: 20,
    minHeight: 400,
  },
  heading: {
    fontSize: 30,
    color: colors.blueDark,
    fontWeight: '700',
    marginBottom: 20,
  },

  heading2: {
    fontSize: 20,
    color: colors.blueDark2,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLight,
    marginBottom: 20,
  },
  subjectsConainer: {
    // minHeight: 200,

    height: 300,
    // marginBottom: 'auto',
  },
  gradeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
  },

  button: {
    backgroundColor: colors.green,
  },

  modal: {
    position: 'absolute',
    backgroundColor: colors.black,
    height: '100%',
    width: '100%',
    opacity: 0.5,
  },

  modalContent: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 100,
    padding: 10,
  },

  modalContentInner: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },

  modalHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 40,
    alignSelf: 'center',
    color: colors.blueDark,
  },

  modalHeading2: {
    textAlign: 'center',
    color: colors.orange,
    marginVertical: 10,
  },
  modalheader: {
    flexDirection: 'row',
  },
  modalSubText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyLight,
  },
});

export default LandingDetailsComponent;
