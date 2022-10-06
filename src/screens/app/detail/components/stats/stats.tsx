import React from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import Case from 'case';
import type {Stats as StatsTypes} from '../../../../../interfaces';
import {Progress} from '../../../../../components';
import {calculateMaxStats} from '../../../../../helpers';
import {styles} from './stats.styles';

type StatsProps = {
  id: number;
  stats: StatsTypes[];
  color?: string;
};

const Stats: React.FC<StatsProps> = ({id, stats, color}) => {
  const total = stats.reduce((acc, curr) => (acc += curr.base_stat), 0);
  return (
    <View style={styles.section}>
      <View style={styles.wrapper}>
        {stats.map(statItem => {
          const max = calculateMaxStats(id, statItem);
          return (
            <View style={styles.row} key={statItem.stat.name}>
              <View style={styles.rowTitle}>
                <Text category="p2" style={styles.title}>
                  {Case.capital(statItem.stat.name)}
                </Text>
              </View>
              <View style={styles.rowValue}>
                <Progress
                  current={statItem.base_stat}
                  max={max}
                  barColor={color}
                />
              </View>
            </View>
          );
        })}
      </View>
      <View>
        <View style={styles.row}>
          <View style={styles.rowTitle}>
            <Text category="p2" style={styles.title}>
              Total
            </Text>
          </View>
          <View style={styles.rowValue}>
            <View style={styles.totalRow}>
              <Text style={styles.bold}>{total}</Text>
              <Text category="p2" style={styles.bold}>
                Max
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>
          The ranges shown on the right are for a level 100 Pokémon. Maximum
          values are based on a beneficial nature, 252 EVs, 31 IVs.
        </Text>
      </View>
    </View>
  );
};

export default Stats;
