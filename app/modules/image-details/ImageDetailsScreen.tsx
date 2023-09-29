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
  const [response, setResponse] = useState<Array<responseType>>([]);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
        if (result?.blocks?.length > 0) {
          setResponse(result?.blocks);
        }
      } catch (error) {
        setIsLoading(false);
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
        <Text style={styles.titleImage}>Image:</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{uri}}
            style={styles.addedImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.titleResult}>Output:</Text>
        <ScrollView style={styles.imageContainer}>
          {response?.length !== 0 ? (
            <View style={styles.resultWrapper}>
              {response?.map((block, index) => {
                return (
                  <Text style={styles.textStyle} key={index}>
                    {block?.text}
                  </Text>
                );
              })}
            </View>
          ) : isLoading ? (
            <Text style={styles.titleResult}>Please Wait...</Text>
          ) : (
            <Text style={styles.titleResult}>Sorry!🙁 No text found</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
};
export default ImageDetailsScreen;
