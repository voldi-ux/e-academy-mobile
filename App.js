import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from './src/screens/PostScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StatScreen from './src/screens/StatsScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import ComingSoonScreen from './src/screens/ComingSoonScreen';
import TopicListScreen from './src/screens/TopicListScreen';



const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#20385C'} />
      <Navigator initialRouteName="HomeScreen">
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="StatsScreen"
          component={StatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="QuestionScreen"
          component={QuestionScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="ComingSoonScreen"
          component={ComingSoonScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="TopicListScreen"
          component={TopicListScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
