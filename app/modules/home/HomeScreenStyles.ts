import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  fullFlex: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    height: verticalScale(45),
    backgroundColor: Colors.redThemeColor,
    paddingHorizontal: horizontalScale(50),
    marginVertical: verticalScale(4),
    borderRadius: moderateScale(30),
  },
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: moderateScale(16),
  },
  imageWrapper: {
    flex: 0.8,
    marginTop: verticalScale(50),
    marginHorizontal: horizontalScale(20),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(3),
    borderStyle: 'dashed',
    borderColor: Colors.grey,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    height: moderateScale(50),
    width: moderateScale(50),
    tintColor: Colors.redThemeColor,
  },
  addIconText: {
    color: Colors.grey,
    fontSize: moderateScale(16),
    paddingTop: verticalScale(8),
  },
  backContainer: {
    position: 'absolute',
    right: horizontalScale(9),
    top: verticalScale(8),
    borderWidth: moderateScale(2),
    borderColor: Colors.black,
    borderRadius: moderateScale(17),
    padding: moderateScale(4),
  },
  closeIcon: {
    tintColor: Colors.black,
    height: moderateScale(20),
    width: moderateScale(20),
  },
  addedImage: {
    width: '100%',
    height: '80%',
  },
});

export default styles;
