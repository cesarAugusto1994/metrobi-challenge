/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AboutScreen from '../screens/AboutScreen';

import ParadoxScreen from '../screens/ParadoxScreen';
import DuplicatedScreen from '../screens/DuplicatedScreen';
import BagScreen from '../screens/BagScreen';
import CssScreen from '../screens/CssScreen';
import BracketsScreen from '../screens/BracketsScreen';
import FloorsScreen from '../screens/FloorsScreen';
import AsyncScreen from '../screens/AsyncScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>

      <Stack.Screen name="DuplicatedScreen" component={DuplicatedScreen} options={{ title: 'Duplicated Numbers' }} />
      <Stack.Screen name="CssScreen" component={CssScreen} options={{ title: 'Css' }} />
      <Stack.Screen name="BracketsScreen" component={BracketsScreen} options={{ title: 'Brackets' }} />
      <Stack.Screen name="ParadoxScreen" component={ParadoxScreen} options={{ title: 'Zeno´s Paradox' }} />
      <Stack.Screen name="BagScreen" component={BagScreen} options={{ title: 'Bag' }} />
      <Stack.Screen name="FloorsScreen" component={FloorsScreen} options={{ title: 'Floors' }} />
      <Stack.Screen name="AsyncScreen" component={AsyncScreen} options={{ title: 'Async' }} />

    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={DashboardScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={AboutScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
