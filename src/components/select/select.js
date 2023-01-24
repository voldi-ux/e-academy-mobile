import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

/* 
* options = [
    {
      selected: boolean,
      click: function
      title
    }
    ...
]
*
*/

const options = [
  {
    selected: false,
    name: 'Grade 12',
  },
  {
    selected: false,
    name: 'Grade 11',
  },
  {
    selected: false,
    name: 'Grade 10',
  },
];

const Select = ({options2}) => {
  const [selections, setSelect] = useState(options);

  const renderItems = options => {
    return options.map((option, index) => (
      <Pressable
        key={option.name}
        onPress={() => {
          setSelect(prevState => {
            prevState[index].selected = !prevState[index].selected;
            //we must return a copy of the previous state because react will not update as expected when we dont
            //do that
            return [...prevState];
          });
        }}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: option.selected ? '#00CD70' : '#F65858',
            }}></View>
          <Text style={styles.title}>{option.name}</Text>
        </View>
      </Pressable>
    ));
  };

  return renderItems(selections);
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
        alignItems: 'center',
    marginBottom:10,
  },
  circle: {
    width: 25,
    height: 25,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,

    marginRight: 20,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
});

export default Select;
