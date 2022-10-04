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
import ButtonSavings from '../components/ButtonSavings';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/asyncActions/auth';
import { getEmail, unsetMsg } from '../redux/reducers/auth';
import { useEffect } from 'react';

const registerSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const FormRegister = ({ errors, handleChange, handleSubmit, navigation }) => {
  return (
    <>
      <View style={styleLocal.inputWrapper}>
        <Input
          name="username"
          type="email-address"
          onChangeText={handleChange}
          placeholder="Enter username"
          icon="user"
          style={styles.fs16px}
        />
        {errors.username ? (
          <Text>
            <ErrorMessage name="username" />
          </Text>
        ) : null}
      </View>

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
          style={styles.fs16px}
          secure={true}
        />
        {errors.password ? (
          <Text>
            <ErrorMessage name="password" />
          </Text>
        ) : null}
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonSavings action={handleSubmit} title="submit" text="Sign Up" />
      </View>
    </>
  );
};

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const successMsg = useSelector(state => state.auth.successMsg);
  const errorMsg = useSelector(state => state.auth.errorMsg);

  const onRegis = value => {
    const username = value.username;
    const email = value.email;
    const password = value.password;
    const data = { username, email, password };

    dispatch(register(data));
    dispatch(getEmail(email));
  };

  useEffect(() => {
    if (successMsg) {
      dispatch(unsetMsg());
      navigation.navigate('CreatePin');
    }
  }, [navigation, successMsg]);
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

        <Formik
          validationSchema={registerSchema}
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={onRegis}>
          {props => <FormRegister {...props} navigation={navigation} />}
        </Formik>
        <View style={styles.buttonWrapper}>
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
