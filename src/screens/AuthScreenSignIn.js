import { ImageBackground, StyleSheet } from "react-native"
import SignInComponent from "../components/Auth/SignInComponent";



const AuthScreenSignIn = () => { 
    
    return <ImageBackground source={require("../resources/images/bg.png")}
        style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal:20,
       }}
    >
         <SignInComponent />   
    </ImageBackground>
}

    

export default AuthScreenSignIn;