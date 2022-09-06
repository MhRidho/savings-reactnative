import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Input from '../components/Input';
import Success from '../assets/success.png';
import CardConfirmation from '../components/CardConfirmation';
import CardReceiver from '../components/CardReceiver';

const TransferSuccess = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Image source={Success} style={[styleLocal.flex]} />
        </View>
        <View>
          <Text
            style={[
              styles.textBlack,
              styles.fwBold,
              styles.fs24px,
              styles.textCenter,
            ]}>
            Transfer Success
          </Text>
        </View>
        <View style={[styles.padHor10, styles.marTop30]}>
          <Text style={[styles.textBlack, styles.fwBold, styles.fs18px]}>
            Details
          </Text>
        </View>
        <View style={[styles.marTop20, styles.padHor10]}>
          <CardConfirmation />
          <CardConfirmation />
          <CardConfirmation />
          <CardConfirmation />
        </View>
        <View style={[styles.marTop20, styles.padHor10]}>
          <Text
            style={[
              styles.textBlack,
              styles.fwBold,
              styles.fs18px,
              styles.marBot10,
            ]}>
            Transfer to
          </Text>
          <CardReceiver />
        </View>
        <View style={[styles.buttonWrapper, styles.marBot20]}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View style={styles.footer} /> */}
    </View>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
  flex: {
    flex: 1,
  },
  bgBlack: {
    backgroundColor: 'black',
  },
});

export default TransferSuccess;
