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

const PinSuccess = ({ navigation }) => {
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
            PIN Successfully Created
          </Text>
          <Text
            style={[
              styles.textBlack,
              styles.fs16px,
              styles.textCenter,
              styles.marTop20,
            ]}>
            Your PIN was successfully created and you can now access all the
            features in Zwallet. Login to your new account and start exploring!
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Login Now</Text>
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

export default PinSuccess;
