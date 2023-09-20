import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../theme';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  addedImage: {
    width: '100%',
    height: '100%',
  },
  titleImage: {
    fontSize: moderateScale(20),
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    color: Colors.black,
    fontWeight: '500',
  },
  titleResult: {
    fontSize: moderateScale(20),
    paddingTop: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    color: Colors.black,
    fontWeight: '500',
  },
  imageContainer: {
    flex: 1,
  },
  resultWrapper: {
    margin: moderateScale(20),
  },
  textStyle: {
    fontSize: moderateScale(17),
    color: Colors.redThemeColor,
  },
});

export default styles;
