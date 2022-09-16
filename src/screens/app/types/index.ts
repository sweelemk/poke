import type {ParamListBase, RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export interface StackNavigationAppProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type TabRoutes = {
  Home: undefined;
  Profile: undefined;
};

export type AppRoutes = {
  Main: undefined;
  Search: undefined;
};
