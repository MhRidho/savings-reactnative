/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';

import styles from '../styles/global';
import Input from '../components/Input';
import { Flex } from 'native-base';
import { login } from '../redux/asyncActions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const token = useSelector(state => state.auth.token);

  // const onLogin = value => {
  //   const data = { email: value.email, password: value.password };
  //   dispatch(login(data));
  // };
  // useEffect(() => {
  //   if (token) {
  //     navigation.navigate('Home');
  //   }
  // }, [navigation.navigate, token]);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLoginn = () => {
    if (email === 'ridho@gmail.com' && password === 'ridho123') {
      Alert.alert('Success', 'Login Success', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('HomeStack');
          },
        },
      ]);
    } else {
      Alert.alert('Failed', 'Not registered, redirecting...', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Signup');
          },
        },
      ]);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Text style={[styles.text, styles.fwBold, styles.fs24px]}>Login</Text>
          <Text style={[styles.textBlack, styles.fs16px, styles.textCenter]}>
            Login to your existing account to access all the features in Savings
          </Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Enter your e-mail"
            icon="envelope"
            type="email-address"
            style={styles.fs16px}
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
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.textBlack}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onLoginn}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.textBlack, styles.flexRow]}>
            <Text style={styles.colorPrimary}>
              Don't have an account? Let's{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.colorPrimary}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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

export default Login;