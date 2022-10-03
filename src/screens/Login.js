/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Input from '../components/Input';
import { Flex } from 'native-base';
import { login } from '../redux/asyncActions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { PRIMARY_COLOR } from '../styles/constant';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { useEffect } from 'react';
import ButtonSavings from '../components/ButtonSavings';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const FormLogin = ({ errors, handleChange, handleSubmit, navigation }) => {
  return (
    <>
      <View style={styleLocal.inputWrapper}>
        <Input
          name="email"
          type="email-address"
          onChangeText={handleChange}
          placeholder="Enter your e-mail"
          icon="envelope"
          style={styles.fs16px}
        />
        {errors.email ? (
          <Text>
            <ErrorMessage name="email" />
          </Text>
        ) : null}
      </View>
      <View style={styleLocal.inputWrapper}>
        <Input
          name="password"
          type="password"
          onChangeText={handleChange}
          placeholder="Enter your password"
          icon="lock"
          secure={true}
          style={styles.fs16px}
        />
        {errors.password ? (
          <Text>
            <ErrorMessage name="password" />
          </Text>
        ) : null}
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textBlack}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonSavings action={handleSubmit} title="submit" text="Login" />

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
