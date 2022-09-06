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

const ResetPassword = ({ navigation }) => {
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
            Create and confirm your new password so you can login to Zwallet.
          </Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            style={styles.fs16px}
            onChange={text => setPassword(text)}
            placeholder="Enter your password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            style={styles.fs16px}
            onChange={text => setPassword(text)}
            placeholder="Enter your password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Reset Password</Text>
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

export default ResetPassword;
