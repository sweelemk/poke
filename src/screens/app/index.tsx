import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {TabRoutes} from './types';
import {HomeScreen} from './home';
import {ProfileScreen} from './profile';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator<TabRoutes>();

const HomeIcon = (props: any) => <Icon {...props} name="home-outline" />;

const ProfileIcon = (props: any) => <Icon {...props} name="person-outline" />;

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      appearance="noIndicator"
      style={styles.bottomNavigation}>
      <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={ProfileIcon} />
    </BottomNavigation>
  );
};

const AppNavigator = () => (
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  bottomNavigation: {
    borderTopColor: '#8F9BB3',
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 32,
  },
});

export default AppNavigator;
