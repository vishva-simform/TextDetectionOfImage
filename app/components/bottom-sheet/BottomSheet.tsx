import React from 'react';
import {
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icons} from '../../assets';
import styles from './BottomSheetStyles';
import {BottomSheetProps} from './BottomSheetTypes';

const BottomSheet = ({visible, hideModal, onButtonPress}: BottomSheetProps) => {
  return (
    <Modal visible={visible} transparent>
      <TouchableWithoutFeedback onPress={hideModal}>
        <View style={styles.buttonWrapper}>
          <View style={styles.cameraButtonWrapper}>
            <TouchableOpacity style={styles.backContainer} onPress={hideModal}>
              <Image source={Icons.close} style={styles.closeIcon} />
            </TouchableOpacity>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={() => {
                  onButtonPress('capture', {
                    saveToPhotos: true,
                    mediaType: 'photo',
                    includeBase64: false,
                  });
                }}
                style={styles.button}>
                <Image source={Icons.camera} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  onButtonPress('library', {
                    selectionLimit: 1,
                    mediaType: 'photo',
                    includeBase64: false,
                  })
                }
                style={styles.button}>
                <Image source={Icons.gallery} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomSheet;
