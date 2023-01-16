import React from "react";
import { View, TextInput, StyleSheet } from "react-native";





import FIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../resources/colors";


const SearchInput = () => {
    return (
      <View style={{...styles.row, ...styles.searchContainer}}>
        <View style={{...styles.row, flex: 1, marginRight: 20}}>
          <TextInput placeholder="Search..." placeholderTextColor={colors.grey} style={styles.input} />
          <View style={styles.searchIcon}>
            <FIcon name="search" size={20} color={colors.white} />
          </View>
        </View>
        <View style={styles.camera}>
          <FIcon name="camera" size={25} color={colors.white} />
        </View>
      </View>
    );
}




const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  searchContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    elevation: 10,
  },

  input: {
    height: 45,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    paddingLeft: 10,
    flex: 1,
    elevation: 5,
  },
  camera: {
    alignSelf: 'center',
    backgroundColor: colors.green,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  searchIcon: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    backgroundColor: colors.blueDark2,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    elevation: 5,
  },
});




export default SearchInput;