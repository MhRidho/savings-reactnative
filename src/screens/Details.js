import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../styles/global';
import Input from '../components/Input';
import Profile from '../assets/profile.png';
import Profile1 from '../assets/profile1.png';
import Graphic from '../assets/graphic.png';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack } from 'native-base';
import CardTransaction from '../components/cardTransaction';
import { useSelector, useDispatch } from 'react-redux';
import { getHistory } from '../redux/asyncActions/transaction';
import { useEffect } from 'react';

const Details = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const history = useSelector(state => state.transaction.value);

  useEffect(() => {
    dispatch(getHistory(token));
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={[styles.padVer80, styles.padHor10]}>
          <Flex direction="row" justifyContent="space-between">
            <View style={styleLocal.flexRow}>
              <Icon name={'arrow-down'} size={20} style={styles.textWhite} />
              <View style={[styleLocal.padHor, styleLocal.jCenter]}>
                <Text style={styles.textWhite}>Income</Text>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Rp2.120.000
                </Text>
              </View>
            </View>
            <View style={styleLocal.flexRow}>
              <Icon name={'arrow-up'} size={20} style={styles.textWhite} />
              <View style={[styleLocal.padHor, styleLocal.jCenter]}>
                <Text style={styles.textWhite}>Expense</Text>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Rp1.560.000
                </Text>
              </View>
            </View>
          </Flex>
        </View>
      </View>
      <View style={styleLocal.content}>
        <View style={styleLocal.padVer}>
          <View>
            <Text style={[styles.textBlack, styles.fwBold, styles.fs18px]}>
              In This Week
            </Text>
          </View>
        </View>
        <View>
          <Center>
            <Image source={Graphic} />
          </Center>
        </View>
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
  padVer: {
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

export default Details;
