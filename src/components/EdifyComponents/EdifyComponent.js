import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import EdifyHeader from "./EdifyHeader";
import IoIcon from "react-native-vector-icons/Octicons"
import { colors } from "../../resources/colors";
import EdifyMassageHolder from "./EdifyMessage";


// you need the param values from navigation to
// infer if the user wants practice questions or just wants to ask
// general questions ie question about aps, univeristy etc


const mockData = [
  {
    type: 'text',
    isPrompt: false,
    content:
      'Hey, Voldi. before you practice. Would you like to see how you are performing for physical sciences ? remember you can ask me about your performance at any time, just type my performance.',
  },

  {
    type: 'text',
    isPrompt: true,
    content: 'No, I want to jump right in',
    },
  
  {
    type: 'text',
    isPrompt: false,
    content: 'OKay, let us jump right in. A vector is a ? \n 1) A physical quantity \n 2) A physical quantity with direction \n 3) Mass',
    },
  
  
  {
    type: 'text',
    isPrompt: true,
    content: '1',
    },
  
  
  {
    type: 'text',
    isPrompt: false,
    content: 'Not quiet right Voldi, let us it break it down. \n \n A vector is a physical quantity with magnitude and direction, examples includes velocity, acceleration, force. Mass is scalar which is physical quantity with magnitude only, understood ? ',
    },
  
];


const EdifyComponent = () => { 
    
    const renderMsgs = () => mockData.map((msg,index) => { 
        const style = msg.isPrompt
          ? {marginLeft: 'auto', backgroundColor: colors.red}
          : {marginRight: 'auto', backgroundColor: colors.green};
        return <EdifyMassageHolder key={index} msg={msg} style={style} />
    })


    return (
      <View style={styles.container}>
        <EdifyHeader />
            <ScrollView style={styles.messages}>
                {renderMsgs()}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            placeholder="Type your message..."
            style={styles.input}
          />
          <TouchableOpacity>
            <IoIcon name="paper-airplane" size={20} color={colors.blueLight}/>
          </TouchableOpacity>
        </View>
      </View>
    );
}




const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1
    },
    messages: {
        flex: 1,
        padding: 10
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: colors.white,
        alignItems: "center",
        padding: 10
    },

    input: {
        height: 50,
        flex: 1,
        padding: 10
    }
})



export default EdifyComponent;