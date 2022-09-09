import React from 'react';
import {View} from 'react-native';
import {Spinner as UISpinner, SpinnerProps} from '@ui-kitten/components';
import {styles} from './spinner.styles';

const Spinner: React.FC<SpinnerProps> = ({animating, status, size}) => {
  return (
    <View style={styles.spinnerContainer}>
      <UISpinner animating={animating} status={status} size={size} />
    </View>
  );
};

export default Spinner;
