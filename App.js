import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StatScreen from './src/screens/StatsScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import ComingSoonScreen from './src/screens/ComingSoonScreen';
import TopicListScreen from './src/screens/TopicListScreen';
import ResourceScreen from './src/screens/ResourceScreen';
import PapersScreen from './src/screens/PastPpaersScreen';
import GradeSelectionScreen from './src/screens/GardeSelectionScreen';
import OpenQuestionScreen from './src/screens/OpenPaper';
import ViewPdfSCreen from './src/screens/ViewPdfScreen';
import QuestionsNumberScreen from './src/screens/QuestionsNumber';
import CompletionScreen from './src/screens/CompletionScreen';
import AuthScreenSignIn from './src/screens/AuthScreenSignIn';
import AuthScreenSignUp from './src/screens/AuthScreeenSignUp';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import LandingScreen from './src/screens/LandingScreen';
import LandingDetailsScreen from './src/screens/LandingDetailsScreen';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#20385C'} />
      <Navigator initialRouteName="LandingScreen">
        <Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="LandingPageDetailsScreen"
          component={LandingDetailsScreen}
          options={{
            headerShown: false,
          }}
        />

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
        <Screen
          name="PastPapersScreen"
          component={PapersScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="ResourceScreen"
          component={ResourceScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="GradeSelectionScreen"
          component={GradeSelectionScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="OpenQuestionScreen"
          component={OpenQuestionScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="ViewPdfSCreen"
          component={ViewPdfSCreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="QuestionsNumberScreen"
          component={QuestionsNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="CompletionScreen"
          component={CompletionScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* must append screen to the subsequent screen names */}

        <Screen
          name="AuthScreenSignIn"
          component={AuthScreenSignIn}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="AuthScreenSignUp"
          component={AuthScreenSignUp}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
