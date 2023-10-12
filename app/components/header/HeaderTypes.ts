import {ImageSourcePropType} from 'react-native/types';

export interface HeaderDataType {
  leftIcon?: ImageSourcePropType;
  onPress?: () => void;
  title?: string;
}
