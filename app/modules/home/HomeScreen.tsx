import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {ImagePickerResponse} from 'react-native-image-picker/src/types';
import {Icons} from '../../assets';
import {Header} from '../../components';
import BottomSheet from '../../components/bottom-sheet/BottomSheet';
import {ROUTES} from '../../constants';
import styles from './HomeScreenStyles';
import {NavigationType} from './HomeScreenTypes';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const [response, setResponse] = React.useState<ImagePickerResponse | null>(
    null,
  );
  const [visible, setVisible] = useState(false);

  const onProcessImage = () => {
    if (response) {
      navigation.navigate(ROUTES.ImageDetails, {
        uri: response?.assets?.[0]?.uri!!,
      });
    }
  };
  const hideModal = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (response?.assets?.[0]?.uri) {
      hideModal();
    }
  }, [response]);

  const onButtonPress = React.useCallback(
    (
      type: string,
      options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions,
    ) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse);
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    },
    [],
  );

  return (
    <View style={styles.mainContainer}>
      <Header title={'Text Detection'} />
      <View style={styles.imageWrapper}>
        {response?.assets?.[0]?.uri ? (
          <View key={response?.assets[0]?.uri} style={styles.image}>
            <TouchableOpacity
              style={styles.backContainer}
              onPress={() => setResponse(null)}>
              <Image
                source={Icons.close}
                style={styles.closeIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.addedImage}
              source={{uri: response?.assets[0]?.uri}}
            />
          </View>
        ) : (
          <View style={styles.center}>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Image style={styles.addIcon} source={Icons.add} />
            </TouchableOpacity>
            <Text style={styles.addIconText}>Add Image</Text>
          </View>
        )}
      </View>
      <BottomSheet {...{visible, hideModal, onButtonPress}} />
      <TouchableOpacity style={styles.container} onPress={onProcessImage}>
        <Text style={styles.text}>{'Process Image'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
