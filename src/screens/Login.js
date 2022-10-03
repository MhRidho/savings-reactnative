/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Input from '../components/Input';
import { Flex } from 'native-base';
import { login } from '../redux/asyncActions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { PRIMARY_COLOR } from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { useEffect } from 'react';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const FormLogin = ({ errors, handleChange, handleSubmit, navigation }) => {
  return (
    <>
      <View style={styleLocal.inputWrapper}>
        <Input
          onChangeText={handleChange('email')}
          placeholder="Enter your e-mail"
          icon="envelope"
          type="email-address"
          style={styles.fs16px}
          name="email"
        />
        {/* {errors.email ? (
          <Text>
            <ErrorMessage name="email" />
          </Text>
        ) : null} */}
      </View>
      <View style={styleLocal.inputWrapper}>
        <Input
          style={styles.fs16px}
          onChangeText={handleChange('password')}
          placeholder="Enter your password"
          icon="lock"
          secure={true}
          name="password"
          type="password"
        />
        {/* {errors.password ? (
          <Text>
            <ErrorMessage name="password" />
          </Text>
        ) : null} */}
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textBlack}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={handleSubmit} title="Submit">
          <View style={[styles.button, styles.text]}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.textBlack, styles.flexRow]}>
          <Text style={styles.colorPrimary}>Don't have an account? Let's </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.colorPrimary}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const errorMsg = useSelector(state => state.auth.errorMsg);
  const successMsg = useSelector(state => state.auth.successMsg);

  const onLogin = value => {
    const email = value.email;
    const password = value.password;
    const data = { email, password };
    console.log(data);
    dispatch(login(data));
  };

  useEffect(() => {
    if (token) {
      navigation.navigate('HomeTab');
    }
  }, [navigation, token]);

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

        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={onLogin}>
          {props => <FormLogin {...props} navigation={navigation} />}
        </Formik>
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
