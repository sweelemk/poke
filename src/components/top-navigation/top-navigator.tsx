import React from 'react';
import {Icon, TopNavigationAction, TopNavigation} from '@ui-kitten/components';

const TopNavigator: React.FC<any> = ({navigation}) => {
  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );
  return <TopNavigation accessoryLeft={BackAction} />;
};

export default TopNavigator;
