import React, {useEffect, useRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  useWindowDimensions,
  BackHandler,
} from 'react-native';

const Menu = ({setVisible, children}) => {
  const screenHeight = useWindowDimensions().height;
  const TRESH_HOLD = screenHeight * 0.2; // determines if the user's intention was to close the menu or not
  const translateValue = useRef(new Animated.Value(screenHeight)).current;


  //closing will be true if the user's itention was to close the menu
  const snap = (toValue, closing) => {
    Animated.timing(translateValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (closing) { 
        setVisible(false);
      } 
    });
  };

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (event, state) => state.dy > 0,
      onMoveShouldSetPanResponder: (event, state) => state.dy > 0,
      onPanResponderMove: (event, state) => {
        //the gesture state object resets itself  at the end of the gesture/touch
        //to ensure that we still have access to it, we make a shallow copy of the object using the spread operator
        //ie {...state}
        // console.log({...state});
        const dy = state.dy;
        //making dy >=2 will make us distinguish a single touch from a scroll
        if (dy >= 2) {
          translateValue.setValue(dy);
        }
      },
      onPanResponderRelease: (event, state) => {
        const dy = state.dy;

        if (dy >= TRESH_HOLD) {
         
          snap(screenHeight,true);
          //setVisible(false)  //to close the menu all the together
        } else {
          snap(0, false);
        }
      },
    }),
  ).current;

  useEffect(() => {
    Animated.timing(translateValue, {
      toValue: 0,
      delay: 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  

    const handleBackButton = () => {
      Animated.timing(translateValue, {
        toValue: screenHeight,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
      });
    
      //return true so that the default behavior of the backhandleer will not exit the app
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  return (
    <View style={{...styles.container, height: screenHeight}}>
      <Animated.View
        style={{...styles.menu, transform: [{translateY: translateValue}]}}
        {...pan.panHandlers}>
        <View style={styles.bar}></View>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000e0',
    zIndex: 2,
    position: 'absolute',
    width: '100%',
  },

  menu: {
    alignItems: 'center',
    height: '95%',
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bar: {
    width: '40%',
    height: 4,
    backgroundColor: '#d7dae1e0',
    borderRadius: 10,
  },
});

export default Menu;
