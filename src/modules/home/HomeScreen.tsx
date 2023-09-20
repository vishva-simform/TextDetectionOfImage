import React, {useState} from 'react';
import {
  Button,
  Image,
  NativeModules,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const [response, setResposne] = useState<Response | undefined>(undefined);
  const {width: windowWidth} = useWindowDimensions();
  const [aspectRatio, setAspectRation] = useState(1);

  const uri = image?.assets?.[0]?.uri;

  const {TextDetectionModule} = NativeModules;

  const recognizeImage = (url: string) => {
    return TextDetectionModule.recognizeImage(url);
  };

  const proccessImage = async (uri: string) => {
    if (uri) {
      const res = await recognizeImage(uri);
      console.log(JSON.stringify(res), '--result');

      setResposne(res);
      // setAspectRation(response?.height / response?.width);
    }
  };

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Button
        title="test"
        onPress={() => {
          launchImageLibrary(options, res => {
            return setImage(res);
          });
        }}
      />
      <Button title="getImage" onPress={() => proccessImage(uri)} />

      {uri && (
        <Image
          source={{uri}}
          style={{width: windowWidth, height: windowWidth * aspectRatio}}
        />
      )}
      {response && (
        <View style={{}}>
          {response?.blocks.map(block => {
            // block.lines.map(line => {
            return <Text style={{color: 'blue'}}>{block?.text}</Text>;
            // }),
          })}
        </View>
      )}
      {/* {response && <ResponseRenderer response={response} scale={windowWidth} />} */}
    </ScrollView>
  );
};

export default HomeScreen;
