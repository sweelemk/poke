import React from 'react';
import {Text, useTheme} from '@ui-kitten/components';
import {styles} from './progress.styles';
import {View} from 'react-native';

type ProgressProps = {
  current: string | number;
  max: string | number;
  barColor?: string;
};

const Progress: React.FC<ProgressProps> = ({
  current,
  max,
  barColor = '#3366FF',
}) => {
  const theme = useTheme();
  const percent = (+current / +max) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.bold}>{current}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.bar,
            {backgroundColor: theme['background-basic-color-3']},
          ]}>
          <View
            style={[
              styles.progress,
              {
                backgroundColor: barColor,
                width: `${percent}%`,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.max}>
        <Text style={styles.bold}>{max}</Text>
      </View>
    </View>
  );
};

export default Progress;
