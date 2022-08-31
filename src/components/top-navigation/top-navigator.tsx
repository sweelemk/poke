import React from 'react';
import {Icon, TopNavigationAction, TopNavigation} from '@ui-kitten/components';

type TopNavigatorProps = {
  navigation: any
};

const TopNavigator: React.FC<TopNavigatorProps> = ({navigation}) => {
  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );
  return <TopNavigation accessoryLeft={BackAction} />;
};

export default TopNavigator;
