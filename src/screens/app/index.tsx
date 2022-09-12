import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import type {TabRoutes} from './types';
import {HomeScreen} from './home';
import {ProfileScreen} from './profile';
import {SearchScreen} from './search';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator<TabRoutes>();
const Stack = createStackNavigator();

const HomeIcon = (props: any) => (
  <Icon {...props} name="pokeball" pack="material-community" />
);

const ProfileIcon = (props: any) => <Icon {...props} name="person-outline" />;

const BottomTabBar = (props: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={props.state.index}
    onSelect={index => {
      const route = props.state.routeNames[index];
      route && props.navigation.navigate(route);
    }}
    appearance="noIndicator"
    style={styles.bottomNavigation}>
    <BottomNavigationTab icon={HomeIcon} />
    <BottomNavigationTab icon={ProfileIcon} />
  </BottomNavigation>
);

const TabNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
    tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={TabNavigation} />
    <Stack.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
  bottomNavigation: {
    paddingTop: 12,
    paddingBottom: 32,
  },
});

export default AppNavigator;
