import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Input from '../components/Input';
import { Flex } from 'native-base';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <View style={styles.header} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Text style={[styles.text, styles.fwBold, styles.fs24px]}>
            Reset Password
          </Text>
          <Text style={[styles.textBlack, styles.fs16px, styles.textCenter]}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
        </View>
        <View style={[styleLocal.inputWrapper, styles.marTop30]}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Enter your e-mail"
            icon="envelope"
            type="email-address"
            style={styles.fs16px}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Confirm</Text>
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
});

export default ForgotPassword;