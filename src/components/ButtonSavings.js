import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/global';

import { PRIMARY_COLOR } from '../styles/constant';

const ButtonSavings = props => (
  <View>
    <TouchableOpacity
      onPress={props.action}
      title={props.title}
      size={20}
      color={PRIMARY_COLOR}>
      <View style={[styles.button, styles.text]}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ButtonSavings;
