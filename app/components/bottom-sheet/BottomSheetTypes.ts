import {CameraOptions, ImageLibraryOptions} from 'react-native-image-picker';

export type BottomSheetProps = {
  visible: boolean;
  hideModal: () => void;
  onButtonPress: (
    type: string,
    options: CameraOptions | ImageLibraryOptions,
  ) => void;
};
