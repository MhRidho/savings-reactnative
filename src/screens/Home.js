import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/global';
import Profile from '../assets/profile.png';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack } from 'native-base';
import CardTransaction from '../components/cardTransaction';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileLogin } from '../redux/asyncActions/profile';
import { getHistory } from '../redux/asyncActions/transaction';
import { useEffect } from 'react';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);
  const history = useSelector(state => state.transaction.value);

  useEffect(() => {
    dispatch(getProfileLogin(token));
    dispatch(getHistory(token));
  }, []);

  console.log(profile);
  console.log(history);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={styleLocal.imgView}>
          <View>
            <Image style={styleLocal.imageStyle} source={Profile} />
          </View>
          <Flex direction="row" justifyContent="space-between">
            <View style={styleLocal.balanceView}>
              <Text style={[styles.fs14px, styles.textWhite]}>Balance</Text>
              <Text style={[styles.fs24px, styles.fwBold, styles.textWhite]}>
                Rp {profile.balance}
              </Text>
              <Text style={[styles.fs14px, styles.textWhite]}>
                {profile.phonenumber}
              </Text>
            </View>
            <View styles={styleLocal.iconView}>
              <Icon name="bell-o" size={28} style={[styles.textWhite]} />
            </View>
          </Flex>
        </View>
      </View>
      <View style={styleLocal.content}>
        <Center>
          <Flex space="2.5" direction="row" mb="2.5" mt="1.5">
            <Box alignItems="center">
              <VStack mt="4" px="8">
                <Button
                  style={styleLocal.bgPrimary}
                  size="lg"
                  action={() => navigation.navigate('SearchReceiver')}>
                  <Flex direction="row" justifyContent="center">
                    <Icon
                      name={'arrow-up'}
                      size={17}
                      style={styles.textWhite}
                    />
                  </Flex>
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
                  <Flex direction="row" justifyContent="center">
                    <Icon
                      name={'arrow-up'}
                      size={17}
                      style={styles.textWhite}
                    />
                  </Flex>
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
        <FlatList
          data={history.results}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardTransaction item={item} />
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

export default Home;
