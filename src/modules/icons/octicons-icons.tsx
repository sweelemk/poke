import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export const OcticonsIconIconsPack = {
  name: 'octicons',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    },
  );
}

const IconProvider = (name: any) => ({
  toReactElement: (props: any) => OcticonsIcon({name, ...props}),
});

function OcticonsIcon({name, style}: {name: any; style: any}) {
  const {height, tintColor, ...iconStyle} = StyleSheet.flatten(style);
  return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
}
