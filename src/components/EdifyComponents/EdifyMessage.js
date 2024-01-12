import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../resources/colors';


// we need display diefferent type of message based on the type property
const EdifyMassageHolder = ({ msg, style }) => {
    return (
      <View style={{...styles.container, ...style}}>
        <Text style={{...styles.msgText}}>{msg.content}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    
    msgText: {
        color: colors.white,
        fontSize:18
    }
});

export default EdifyMassageHolder;
