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
  title: {
    fontSize: moderateScale(20),
    padding: moderateScale(5),
    color: Colors.black,
    fontWeight: '500',
  },
  imageContainer: {
    flex: 1,
  },
  resultWrapper: {
    padding: moderateScale(20),
  },
  textStyle: {
    fontSize: moderateScale(17),
    color: Colors.redThemeColor,
  },
});

export default styles;
