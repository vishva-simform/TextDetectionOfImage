import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './HeaderStyles';
import {HeaderDataType} from './HeaderTypes';

const Header: FC<HeaderDataType> = ({leftIcon, onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {leftIcon && <Image source={leftIcon} style={styles.leftIconStyle} />}
      </TouchableOpacity>
      <Text style={styles.headerTitleStyle}>{title}</Text>
      <View style={styles.rightIconStyle} />
    </View>
  );
};

export default Header;
