import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Layout as UILayout} from '@ui-kitten/components';

interface PageProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Layout: React.FC<PageProps> = ({children, rest}) => {
  const insets = useSafeAreaInsets();
  return (
    <UILayout style={{paddingTop: insets.top, flex: 1}} {...rest}>
      {children}
    </UILayout>
  );
};
export default Layout;
