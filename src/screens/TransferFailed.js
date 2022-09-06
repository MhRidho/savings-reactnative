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
import Failed from '../assets/failed.png';
import CardConfirmation from '../components/CardConfirmation';
import CardReceiver from '../components/CardReceiver';

const TransferFailed = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Image source={Failed} style={[styleLocal.flex]} />
        </View>
        <View>
          <Text
            style={[
              styles.textBlack,
              styles.fwBold,
              styles.fs24px,
              styles.textCenter,
            ]}>
            Transfer Failed
          </Text>
        </View>
        <View style={styles.marTop20}>
          <Text style={[styles.textBlack, styles.textCenter]}>
            We can't transfer your money at the moment, we recommend you to
            check your internet connection and try again.
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
              <Text style={styles.buttonText}>Try Again</Text>
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

export default TransferFailed;
