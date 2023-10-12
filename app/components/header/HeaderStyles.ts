import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(17),
    backgroundColor: Colors.redThemeColor,
    paddingHorizontal: horizontalScale(12),
  },
  leftIconStyle: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: Colors.white,
  },
  rightIconStyle: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  headerTitleStyle: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: moderateScale(17),
  },
});

export default styles;
