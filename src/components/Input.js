import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';

import { PRIMARY_COLOR } from '../styles/constant';

const Input = ({
  placeholder,
  icon,
  type,
  secure,
  onChange,
  value,
  defaultValue,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.iconWrapper}>
        <Icon name={icon} size={20} color={PRIMARY_COLOR} />
      </View>
      <View style={styles.flexSatu}>
        <TextInput
          style={[styles.colorPrimary, styles.fs16px]}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={!showText}
          onChangeText={onChange}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
      {secure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={styleLocal.iconWrapper}>
            <Icon
              name={showText ? 'eye-slash' : 'eye'}
              size={20}
              color={PRIMARY_COLOR}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 50,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Input;