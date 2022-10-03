import React from 'react';
import {View} from 'react-native';
import {Text, Icon} from '@ui-kitten/components';
import {styles} from './gender.styles';

const MALE_COLOR = '#23a2d6';
const FEMALE_COLOR = '#ff69b4';

type Gender = {
  male: number;
  female: number;
};

type GenderProps = {
  gender: Gender;
};

const Gender: React.FC<GenderProps> = ({gender}) => {
  return (
    <View style={styles.genderContainer}>
      <View style={styles.genderItem}>
        <Text style={[styles.gender, {color: MALE_COLOR}]}>
          {gender?.male}%
        </Text>
        <Icon
          name="mars"
          pack="fontisto"
          style={[styles.icon, {color: MALE_COLOR}]}
        />
      </View>
      <View style={styles.genderItem}>
        <Text style={[styles.gender, {color: FEMALE_COLOR}]}>
          {gender?.female}%
        </Text>
        <Icon
          name="venus"
          pack="fontisto"
          style={[styles.icon, {color: FEMALE_COLOR}]}
        />
      </View>
    </View>
  );
};

export default Gender;
