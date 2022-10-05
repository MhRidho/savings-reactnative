import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'native-base';

import styles from '../styles/global';
import { PRIMARY_COLOR } from '../styles/constant';
import { transfer } from '../redux/asyncActions/transaction';
import { useDispatch, useSelector } from 'react-redux';
import { resetMsg } from '../redux/reducers/transaction';
import { Formik } from 'formik';
import { FormPin } from './CreatePin';

const PinConfirmation = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.transaction.successMsg);
  const errorMsg = useSelector(state => state.transaction.errorMsg);
  const fullname = useSelector(state => state.transaction.fullname);
  const phone = useSelector(state => state.transaction.phone);
  const amount = useSelector(state => state.transaction.amount);
  const notes = useSelector(state => state.transaction.notes);
  const time = new Date().toISOString();
  const recipient_id = useSelector(state => state.transaction.user_id);
  const typeId = useSelector(state => state.transaction.type_id);

  const [enteredPin, setEnteredPin] = useState('');

  const pinTransfer = () => {
    const request = {
      amount,
      recipient_id,
      notes,
      time,
      type_id: typeId,
      pin: enteredPin,
    };
    dispatch(transfer({ token, request }));
  };

  useEffect(() => {
    if (successMsg) {
      dispatch(resetMsg());
      navigation.navigate('TransferSuccess');
    }
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.header} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Text style={[styles.textBlack, styles.fs24px, styles.fwBold]}>
            Enter PIN to Transfer
          </Text>
          <Text
            style={[styles.textBlack, styles.fs16px, styleLocal.textCenter]}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </Text>
        </View>
        <Formik initialValues={{ enteredPin: enteredPin }} onSubmit={pinTransfer}>
          {props => <FormPin {...props} setEnteredPin={setEnteredPin}
            enteredPin={enteredPin} />}
        </Formik>
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
  textCenter: {
    textAlign: 'center',
  },
});

export default PinConfirmation;
