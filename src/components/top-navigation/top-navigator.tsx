import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Icon,
  TopNavigationAction,
  TopNavigation,
  TextProps,
} from '@ui-kitten/components';
import type {RenderProp} from '@ui-kitten/components/devsupport';

type TopNavigationProps = {
  title?: RenderProp<TextProps> | React.ReactText | undefined;
  alignment?: 'start' | 'center';
};

const TopNavigator: React.FC<TopNavigationProps> = ({
  title,
  alignment = 'start',
}) => {
  const navigation = useNavigation();
  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );
  return (
    <TopNavigation
      accessoryLeft={BackAction}
      title={title}
      alignment={alignment}
    />
  );
};

export default TopNavigator;
