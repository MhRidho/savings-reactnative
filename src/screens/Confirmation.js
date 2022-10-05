import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardReceiver from '../components/CardReceiver';
import CardConfirmation from '../components/CardConfirmation';
import { Box, Button, Input, Stack, Center, Flex } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../styles/constant';
import { useSelector } from 'react-redux';

const Confirmation = ({ navigation }) => {
  const fullname = useSelector(state => state.transaction.fullname);
  const phone = useSelector(state => state.transaction.phone);
  const amount = useSelector(state => state.transaction.amount);
  const profile = useSelector(state => state.profile.data);
  const currentBalance = profile.balance;
  const balanceLeft = currentBalance - amount;
  const time = new Date().toISOString();
  const notes = useSelector(state => state.transaction.notes);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={[styles.marTop50, styles.padHor10]}>
          <Text
            style={[
              styles.fwBold,
              styles.marBot20,
              styles.fs18px,
              styles.textWhite,
            ]}>
            Transfer to
          </Text>
          <CardReceiver fullname={fullname} phone={phone} />
        </View>
      </View>
      <View style={[styles.marTop30, styles.padHor10]}>
        <Text
          style={[
            styles.fwBold,
            styles.marBot20,
            styles.fs18px,
            styles.textBlack,
          ]}>
          Details
        </Text>
      </View>
      <View style={[styles.padHor10, styles.marTop20]}>
        <View>
          <Box
            rounded="lg"
            width="100%"
            bg={SECONDARY_COLOR}
            p="4"
            shadow={2}
            _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }} style={styles.marBot10}>

            <Flex direction="row">
              <View style={styles.flexRow}>
                <View style={[styles.jCenter]}>
                  <Text style={styles.textWhite}>Amount</Text>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Rp {amount}
                  </Text>
                </View>
              </View>
            </Flex>
          </Box>
        </View>

        <View>
          <Box
            rounded="lg"
            width="100%"
            bg={SECONDARY_COLOR}
            p="4"
            shadow={2}
            _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }} style={styles.marBot10}>

            <Flex direction="row">
              <View style={styles.flexRow}>
                <View style={[styles.jCenter]}>
                  <Text style={styles.textWhite}>Balance Left</Text>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Rp {balanceLeft}
                  </Text>
                </View>
              </View>
            </Flex>
          </Box>
        </View>

        <View>
          <Box
            rounded="lg"
            width="100%"
            bg={SECONDARY_COLOR}
            p="4"
            shadow={2}
            _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }} style={styles.marBot10}>

            <Flex direction="row">
              <View style={styles.flexRow}>
                <View style={[styles.jCenter]}>
                  <Text style={styles.textWhite}>Date & Time</Text>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    {time}
                  </Text>
                </View>
              </View>
            </Flex>
          </Box>
        </View>

        <View>
          <Box
            rounded="lg"
            width="100%"
            bg={SECONDARY_COLOR}
            p="4"
            shadow={2}
            _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }} style={styles.marBot10}>

            <Flex direction="row">
              <View style={styles.flexRow}>
                <View style={[styles.jCenter]}>
                  <Text style={styles.textWhite}>Notes</Text>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    {notes}
                  </Text>
                </View>
              </View>
            </Flex>
          </Box>
        </View>
      </View>
      <View style={[styles.padHor10]}>
        <Button
          onPress={() => navigation.navigate('PinConfirmation')}
          size={'lg'}
          style={[styles.bgPrimary, styles.marTop50]}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default Confirmation;
