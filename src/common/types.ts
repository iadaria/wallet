import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, Route} from '@react-navigation/native';

export interface IScreenProps {
  navigation: StackNavigationProp<ParamListBase>;
  //route: Route<string>;
  route: Route<string, any>;
}
