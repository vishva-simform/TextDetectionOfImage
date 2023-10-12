import {NativeModules} from 'react-native';

const {TextDetectionModule} = NativeModules;

export const recognizeImage = (url: string) => {
  return TextDetectionModule.recognizeImage(url);
};
