import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Profile1 from '../assets/profile1.png';
import Profile2 from '../assets/profile2.png';
import Spotify from '../assets/spotify.png';
import Netflix from '../assets/netflix.png';
import styles from '../styles/global';
import { SECONDARY_COLOR } from '../styles/constant';
import { PRIMARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack, FlatList } from 'native-base';

const CardTransaction = () => {
  return (
    <>
      <View>
        <Box
          rounded="lg"
          width="100%"
          bg={SECONDARY_COLOR}
          p="4"
          shadow={2}
          _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
          style={styles.marBot10}>
          <Flex direction="row" justifyContent="space-between">
            <View style={styles.flexRow}>
              <Image source={Profile1} />
              <View style={[styles.padHor10, styles.jCenter]}>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Samuel Suhi
                </Text>
                <Text style={[styles.textWhite]}>Transfer</Text>
              </View>
            </View>
            <View style={[styles.padHor10, styles.jCenter]}>
              <Text style={[styles.fwBold, styles.fs18px, styles.textWhite]}>
                +Rp50.000
              </Text>
            </View>
          </Flex>
        </Box>
      </View>
    </>
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
  alignCenter: {
    alignItems: 'center',
  },
  colorGreen: {
    color: 'green',
  },
});

export default CardTransaction;
