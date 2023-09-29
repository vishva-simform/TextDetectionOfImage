import {
  useNavigation,
  useRoute,
  type RouteProp,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {Header} from '../../components';
import styles from './ImageDetailsStyles';
import {ImageDetailRouteType, responseType} from './ImageDetailsTypes';
import {recognizeImage} from './ImageDetailsUtils';

const ImageDetailsScreen = () => {
  const route = useRoute<RouteProp<ImageDetailRouteType, 'imageDetails'>>();
  const [response, setResponse] = useState<Array<responseType>>();
  const uri = route?.params?.uri;
  const navigation = useNavigation();

  useEffect(() => {
    if (uri) {
      processImage(uri);
    }
  }, [uri]);

  const processImage = async (url: string) => {
    if (url) {
      try {
        const result = await recognizeImage(url);

        if (result?.blocks?.length > 0) {
          setResponse(result?.blocks);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Header
        title={'Text Detection'}
        leftIcon={Icons.back}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.outerView}>
        <Text style={styles.title}>Image:</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{uri}}
            style={styles.addedImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Output:</Text>
        <ScrollView style={styles.imageContainer}>
          {response ? (
            <View style={styles.resultWrapper}>
              {response?.map(block => {
                return <Text style={styles.textStyle}>{block?.text}</Text>;
              })}
            </View>
          ) : (
            <Text>Something went wrong</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
};
export default ImageDetailsScreen;
