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

const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLogin = () => {
    if (email === 'ridho@gmail.com' && password === 'ridho123') {
      Alert.alert('Success', 'Login Success');
    } else {
      Alert.alert('Failed', 'Username or password not match');
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Text style={[styles.text, styles.fwBold, styles.fs24px]}>
            Sign Up
          </Text>
          <Text style={styles.textBlack}>
            Create your account to access Zwallet.
          </Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Enter your username"
            icon="user"
            type="email-address"
          />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Enter your e-mail"
            icon="envelope"
            type="email-address"
          />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Create your password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePin')}>
            <View style={[styles.button, styles.text]}>
              <Text style={[styles.buttonText]}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.textBlack, styles.flexRow]}>
            <Text style={styles.colorPrimary}>
              Don't have an account? Let's{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.colorPrimary}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

export default Signup;
