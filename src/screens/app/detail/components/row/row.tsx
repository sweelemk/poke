import React from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {styles} from './row.styles';

type RowProps = {
  label: string;
  value: string | string[] | React.ReactElement | React.ReactElement[] | number;
  desc?: string;
};

const Row: React.FC<RowProps> = ({label, value, desc}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.rowHeader}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
        <View style={styles.value}>{value}</View>
      </View>
      {desc ? (
        <View style={styles.rowDescription}>
          <Text category="p2">{desc}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Row;
