import { Dimensions } from 'react-native';

// iPhone 5, iPhone SE (1 gen)
export const isViewportHeightSmall = (): boolean => {
  const { height } = Dimensions.get('window');

  return height < 667;
};
