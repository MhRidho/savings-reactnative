import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/global';
import Input from '../components/Input';
import Profile from '../assets/profile.png';
import Profile1 from '../assets/profile1.png';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack } from 'native-base';
import CardTransaction from '../components/cardTransaction';

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={styleLocal.imgView}>
          <View>
            <Image style={styleLocal.imageStyle} source={Profile} />
          </View>
          <View style={styleLocal.balanceView}>
            <Text style={[styles.fs14px, styles.textWhite]}>Balance</Text>
            <Text style={[styles.fs24px, styles.fwBold, styles.textWhite]}>
              Rp120.000
            </Text>
          </View>
          <View styles={styleLocal.iconView}>
            <Icon name="bell-o" size={28} style={[styles.textWhite]} />
          </View>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <Center>
          <Flex space="2.5" direction="row" mb="2.5" mt="1.5">
            <Box alignItems="center">
              <VStack mt="4" px="8">
                <Button
                  style={styleLocal.bgPrimary}
                  size="lg"
                  onPress={() => console.log('Transfer')}>
                  Transfer
                </Button>
              </VStack>
            </Box>
            <Box alignItems="center">
              <VStack mt="4" px="8">
                <Button
                  style={styleLocal.bgPrimary}
                  size="lg"
                  onPress={() => console.log('Top Up')}>
                  Top Up
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Center>
        <Flex
          direction="row"
          h={20}
          alignItems="center"
          justifyContent="space-between"
          style={styleLocal.padHor}>
          <Text style={[styles.textBlack, styles.fs18px, styles.fwBold]}>
            Transaction History
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text style={[styleLocal.colorPrimary, styles.fs14px]}>
              See all
            </Text>
          </TouchableOpacity>
        </Flex>
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
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
});

export default Home;
