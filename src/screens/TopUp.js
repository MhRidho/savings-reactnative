import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/global';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Modal, FormControl, Input } from 'native-base';
import CardTopUp from '../components/CardTopUp';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileLogin } from '../redux/asyncActions/profile';
import { getHistory, topup } from '../redux/asyncActions/transaction';
import { useEffect } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { resetMsg } from '../redux/reducers/transaction';
import PushNotification from 'react-native-push-notification';

const dataTopUp = [
  {
    no: '1',
    ket: 'Go to the nearest ATM or you can use E-Banking.',
  },
  {
    no: '2',
    ket: 'Type your security number on the ATM or E-Banking.',
  },
  {
    no: '3',
    ket: 'Select “Transfer” in the menu',
  },
  {
    no: '4',
    ket: 'Type the virtual account number that we provide you at the top.',
  },
  {
    no: '5',
    ket: 'Type the amount of the money you want to top up.',
  },
  {
    no: '6',
    ket: 'Read the summary details',
  },
  {
    no: '7',
    ket: 'Press transfer / top up',
  },
  {
    no: '8',
    ket: 'You can see your money in Zwallet within 3 hours.',
  },
];

const TopUp = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNote] = useState('');
  const [type_id, setTypeId] = useState('');

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const successMsg = useSelector(state => state.transaction.successMsg);
  const errorMsg = useSelector(state => state.transaction.errorMsg);

  const topupSubmit = () => {
    const request = { amount, time, notes, type_id }
    dispatch(topup({ token, request }));
    PushNotification.localNotification({
      channelId: 'general',
      title: 'Savings App',
      message: 'Congratulations, Your Balance Added',
    });
  };

  useEffect(() => {
    if (successMsg) {
      dispatch(resetMsg());
      setShowModal(false);
    }
  }, [dispatch, navigation, successMsg, errorMsg, token]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={[styles.padHor10, styles.marTop50, styles.marBot10]}>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Box
              rounded="lg"
              width="100%"
              bg={SECONDARY_COLOR}
              p="4"
              shadow={2}
              _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
              style={styles.marBot10}>
              <Flex direction="row" justifyContent={'space-between'}>
                <View>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Top Up
                  </Text>
                </View>
                <View>
                  <Icon style={[styles.fs16px, styles.textWhite]} name="plus" />
                </View>
              </Flex>
            </Box>
          </TouchableOpacity>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Input Amount</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Amount</FormControl.Label>
                  <Box alignItems="center" style={styles.marTop20}>
                    <Input
                      name="amount"
                      value={amount}
                      onChangeText={setAmount}
                      textAlign={'center'}
                      style={[styles.fs24px]}
                      variant="unstyled"
                      placeholder="0.00"
                      keyboardType="decimal-pad"
                    />
                  </Box>
                  <Box alignItems="center">
                    <Input
                      name="notes"
                      value={notes}
                      onChangeText={setNote}
                      textAlign={'center'}
                      style={[styles.fs22px]}
                      variant="unstyled"
                      placeholder="Notes"
                      keyboardType="text"
                    />
                  </Box>
                  <Box alignItems="center">
                    <Input
                      name="time"
                      value={time}
                      onChangeText={setTime}
                      textAlign={'center'}
                      style={[styles.fs22px]}
                      variant="unstyled"
                      placeholder="Time"
                      keyboardType="date"
                    />
                  </Box>
                  <Box alignItems="center">
                    <Input
                      name="type_id"
                      value={type_id}
                      onChangeText={setTypeId}
                      textAlign={'center'}
                      style={[styles.fs22px]}
                      variant="unstyled"
                      placeholder="Type Id"
                      keyboardType="numeric"
                    />
                  </Box>
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(!showModal);
                    }}>
                    Cancel
                  </Button>
                  <Button onPress={() => topupSubmit()}>Top Up</Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>
      </View>
      <View style={styleLocal.content}>
        <Flex
          direction="row"
          h={20}
          alignItems="center"
          justifyContent="space-between"
          style={styleLocal.padHor}>
          <Text style={[styles.textBlack, styles.fs18px, styles.fwBold]}>
            How to Top-Up
          </Text>
        </Flex>
        <FlatList
          data={dataTopUp}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardTopUp item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
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
  imgView: {
    flexDirection: 'row',
    marginTop: 80,
    paddingHorizontal: 20,
  },
  balanceView: {
    paddingHorizontal: 20,
  },
  iconView: {
    alignItems: 'center',
  },
  bHomeView: {
    paddingHorizontal: 50,
  },
  tuView: {
    paddingHorizontal: 50,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnTransfer: {
    backgroundColor: PRIMARY_COLOR,
    width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  bgPrimary: {
    backgroundColor: PRIMARY_COLOR,
  },
  colorPrimary: {
    color: PRIMARY_COLOR,
  },
  padHor: {
    paddingHorizontal: 10,
  },
  jCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  colorGreen: {
    color: 'green',
  },
  flexRow: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default TopUp;
