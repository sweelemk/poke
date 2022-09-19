import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Layout as UILayout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

interface PageProps {
  children: React.ReactNode;
  full?: boolean;
  level?: string;
  [x: string]: any;
}

const Layout: React.FC<PageProps> = ({children, full, level, rest}) => {
  const insets = useSafeAreaInsets();

  const padding = full ? 0 : insets.top;
  return (
    <UILayout
      style={[{paddingTop: padding}, styles.container]}
      level={level}
      {...rest}>
      {children}
    </UILayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default Layout;
