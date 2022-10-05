import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardReceiver from '../components/CardReceiver';
import { Box, Button, Input, Stack, Center } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAmount, getNotes } from '../redux/reducers/transaction';
import { useEffect } from 'react';
import { getProfileLogin } from '../redux/asyncActions/profile';

const transferSchema = Yup.object().shape({
  amount: Yup.number().required('Required'),
});

const FormTransfer = ({ errors, handleChange, handleSubmit }) => {
  const profile = useSelector(state => state.profile.data);
  return (
    <>
      <Box alignItems="center" style={styles.marTop20}>
        <Input
          name="amount"
          onChangeText={handleChange('amount')}
          textAlign={'center'}
          style={[styles.fs42px]}
          variant="unstyled"
          placeholder="0.00"
          keyboardType="numeric"
        />
      </Box>
      <Center>
        {errors.amount ? (
          <Text>
            <ErrorMessage name="amount" />
          </Text>
        ) : null}
      </Center>
      <Center>
        <Text style={[styles.textBlack, styles.fs16px]}>
          Rp{profile.balance || 0} Available
        </Text>
      </Center>
      <View style={[styles.padHor10, styles.marTop50]}>
        <Input
          name="notes"
          onChangeText={handleChange('notes')}
          style={styles.fs16px}
          variant="underlined"
          placeholder="Add some notes"
          keyboardType="text"
        />
      </View>
      <View style={[styles.padHor10]}>
        <Button
          onPress={handleSubmit}
          size={'lg'}
          style={[styles.bgPrimary, styles.marTop50]}>
          Continue
        </Button>
      </View>
    </>
  );
};

const InputAmount = ({ navigation }) => {
  const fullname = useSelector(state => state.transaction.fullname);
  const phone = useSelector(state => state.transaction.phone);
  const dispatch = useDispatch();

  const transferReq = val => {
    dispatch(getAmount(val.amount));
    dispatch(getNotes(val.notes));
    navigation.navigate('Confirmation');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={[styles.marTop100, styles.padHor10]}>
          <CardReceiver fullname={fullname} phone={phone} />
        </View>
      </View>
      <Formik
        validationSchema={transferSchema}
        initialValues={{ amount: '', notes: '' }}
        onSubmit={transferReq}>
        {props => <FormTransfer {...props} />}
      </Formik>
    </View>
  );
};

export default InputAmount;
