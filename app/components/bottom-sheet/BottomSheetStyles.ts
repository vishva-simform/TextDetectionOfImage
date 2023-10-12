import {Platform, StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  button: {
    borderWidth: moderateScale(2),
    borderColor: Colors.white,
    borderRadius: moderateScale(30),
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(50),
    height: moderateScale(50),
  },
  icon: {
    tintColor: Colors.white,
    width: '100%',
    height: '100%',
  },
  cameraButtonWrapper: {
    padding: moderateScale(50),
    backgroundColor: Colors.redThemeColor,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: moderateScale(25),
    borderTopLeftRadius: moderateScale(25),
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: Platform.OS === 'ios' ? verticalScale(30) : 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  backContainer: {
    position: 'absolute',
    right: horizontalScale(20),
    top: verticalScale(15),
    borderWidth: moderateScale(2),
    borderColor: Colors.white,
    borderRadius: moderateScale(17),
    padding: moderateScale(4),
  },
  closeIcon: {
    tintColor: Colors.white,
    height: moderateScale(20),
    width: moderateScale(20),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScale(50),
  },
});

export default styles;
