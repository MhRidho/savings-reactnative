import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardReceiver from '../components/CardReceiver';
import CardConfirmation from '../components/CardConfirmation';
import { Box, Button, Input, Stack, Center } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={[styles.marTop50, styles.padHor10]}>
          <Text
            style={[
              styles.fwBold,
              styles.marBot20,
              styles.fs18px,
              styles.textWhite,
            ]}>
            Transfer to
          </Text>
          <CardReceiver />
        </View>
      </View>
      <View style={[styles.marTop30, styles.padHor10]}>
        <Text
          style={[
            styles.fwBold,
            styles.marBot20,
            styles.fs18px,
            styles.textBlack,
          ]}>
          Details
        </Text>
      </View>
      <View style={[styles.padHor10, styles.marTop20]}>
        <CardConfirmation />
        <CardConfirmation />
        <CardConfirmation />
        <CardConfirmation />
      </View>
      <View style={[styles.padHor10]}>
        <Button
          onPress={() => navigation.navigate('PinConfirmation')}
          size={'lg'}
          style={[styles.bgPrimary, styles.marTop50]}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default Confirmation;