import React from 'react';
import {View} from 'react-native';
import {Divider, Text} from '@ui-kitten/components';
import Case from 'case';
import {styles} from './stats.styles';
import type {Stats as StatsProp} from '../../../../../interfaces';

type StatsProps = {
  stats: StatsProp[];
};

const Stats: React.FC<StatsProps> = ({stats}) => {
  return (
    <View style={styles.wrapper}>
      <Text category="h6">Stats</Text>
      {stats.map((st, idx) => (
        <>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>{Case.sentence(st.stat.name)}</Text>
            <Text style={styles.rowValue}>{st.base_stat}</Text>
          </View>
          {stats.length - 1 !== idx ? <Divider /> : null}
        </>
      ))}
    </View>
  );
};

export default Stats;
