import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Input from '../components/Input';
import { SECONDARY_COLOR } from '../styles/constant';
import Success from '../assets/success.png';
import CardConfirmation from '../components/CardConfirmation';
import CardReceiver from '../components/CardReceiver';
import { useSelector } from 'react-redux';
import { Box, Flex } from 'native-base';

const TransferSuccess = ({ navigation }) => {
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
      <View style={styles.headerHome} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Image source={Success} style={[styleLocal.flex]} />
        </View>
        <View>
          <Text
            style={[
              styles.textBlack,
              styles.fwBold,
              styles.fs24px,
              styles.textCenter,
            ]}>
            Transfer Success
          </Text>
        </View>
        <View style={[styles.padHor10, styles.marTop30]}>
          <Text style={[styles.textBlack, styles.fwBold, styles.fs18px]}>
            Details
          </Text>
        </View>
        <View style={[styles.marTop20, styles.padHor10]}>
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
        <View style={[styles.marTop20, styles.padHor10]}>
          <Text
            style={[
              styles.textBlack,
              styles.fwBold,
              styles.fs18px,
              styles.marBot10,
            ]}>
            Transfer to
          </Text>
          <CardReceiver fullname={fullname} phone={phone} />
        </View>
        <View style={[styles.buttonWrapper, styles.marBot20]}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Back to Home</Text>
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
  bgBlack: {
    backgroundColor: 'black',
  },
});

export default TransferSuccess;
