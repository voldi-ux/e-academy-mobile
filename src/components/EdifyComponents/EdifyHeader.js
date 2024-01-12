
import {StyleSheet, Text, View, Image} from 'react-native';
import { colors } from '../../resources/colors';


const  EdifyHeader = () => {
    return <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image  style={styles.image} source={require("../../resources/images/man.png")}/>
        </View>
        <View style={styles.headingContainer}>
             <Text style={styles.heading1}> Edify </Text>
             <Text style={styles.heading2}> Mathematics </Text>
        </View>
  </View>;
};



const styles = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        backgroundColor: colors.blueDark,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginBottom: 2
    },
    
    imgContainer: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    image: {
        width: "100%",
        height: "100%"
    },
    headingContainer: {
        marginLeft: 20
    },

    heading1: {
        fontSize: 25,
        color: colors.white
    },
    heading2: {
        color: colors.white,
        fontSize:16
    }
});


export default  EdifyHeader;