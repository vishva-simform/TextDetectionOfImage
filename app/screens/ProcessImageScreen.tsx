import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {recognizeImage, Response} from '../mlkit';
import {
  ProcessImageNavigationProps,
  ProcessImageRouteProps,
} from '../navigation/Navigator';

interface ProcessImageScreenProps {
  navigation: ProcessImageNavigationProps;
  route: ProcessImageRouteProps;
}

export const ProcessImageScreen = ({route}: ProcessImageScreenProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const [response, setResposne] = useState<Response | undefined>(undefined);
  const uri = route.params.uri;

  useEffect(() => {
    if (uri) {
      proccessImage(uri);
    }
  }, [uri]);

  const proccessImage = async (url: string) => {
    if (url) {
      try {
        const response = await recognizeImage(url);
        if (response?.blocks?.length > 0) {
          setResposne(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Image
        source={{uri}}
        style={{width: windowWidth, height: windowWidth}}
        resizeMode="contain"
      />
      <ScrollView>
        {response ? (
          <View>
            {response?.blocks.map(block => {
              return (
                <Text style={{color: 'blue'}}>
                  {'  '}
                  {block?.text}
                </Text>
              );
            })}
          </View>
        ) : (
          <Text>wait....</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};
