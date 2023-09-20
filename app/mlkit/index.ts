import {NativeModules} from 'react-native';

const {TextDetectionModule} = NativeModules;

export type Rect = {
  left: number;
  top: number;
  height: number;
  width: number;
};
export type Line = {
  text: string;
  rect: Rect;
};
export type Block = {
  text: string;
  rect: Rect;
  lines: Line[];
};
export type Response = {
  width: number;
  height: number;
  blocks: Block[];
};

export const recognizeImage = (url: string): Promise<Response> => {
  return TextDetectionModule.recognizeImage(url);
};
