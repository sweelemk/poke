import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Layout as UILayout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

interface PageProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Layout: React.FC<PageProps> = ({children, rest}) => {
  const insets = useSafeAreaInsets();
  return (
    <UILayout style={[{paddingTop: insets.top}, styles.container]} {...rest}>
      {children}
    </UILayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default Layout;
