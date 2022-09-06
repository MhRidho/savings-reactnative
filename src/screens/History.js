import React from 'react';
// eslint-disable-next-line prettier/prettier
import Profile1 from '../assets/profile1.png';
import Profile2 from '../assets/profile2.png';
import Spotify from '../assets/spotify.png';
import Netflix from '../assets/netflix.png';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { SECONDARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack, Icon } from 'native-base';
import styles from '../styles/global';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

const data = [
  {
    id: 1,
    img: Profile1,
    name: 'John',
    description: 'Transfer',
    amount: '+Rp50.000',
    phoneNumber: '081222333444',
  },
  {
    id: 2,
    img: Profile2,
    name: 'Bobi Sammy',
    description: 'Transfer',
    amount: '+Rp1.150.000',
    phoneNumber: '081222333445',
  },
  {
    id: 3,
    img: Spotify,
    name: 'Spotify',
    description: 'Subscription',
    amount: '-Rp49.000',
    phoneNumber: '081222333446',
  },
  {
    id: 4,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333447',
  },
  {
    id: 5,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333445',
  },
  {
    id: 6,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333446',
  },
  {
    id: 7,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333447',
  },
  {
    id: 8,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333445',
  },
  {
    id: 9,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333446',
  },
  {
    id: 10,
    img: Netflix,
    name: 'Netflix',
    description: 'Subscription',
    amount: '-Rp149.000',
    phoneNumber: '081222333447',
  },
];

const History = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={[styles.marBot20, styles.marTop20, styles.padHor10]}>
        <Text style={[styles.textBlack, styles.fwBold, styles.fs18px]}>
          This Week
        </Text>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        renderItem={ItemList}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const ItemList = ({ item }) => {
  return (
    <>
      <View style={styles.padHor10}>
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
              <Image source={item.img} />
              <View style={[styles.padHor10, styles.jCenter]}>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  {item.name}
                </Text>
                <Text style={[styles.textWhite]}>{item.description}</Text>
              </View>
            </View>
            <View style={[styles.padHor10, styles.jCenter]}>
              <Text style={[styles.fwBold, styles.fs18px, styles.textWhite]}>
                {item.amount}
              </Text>
            </View>
          </Flex>
        </Box>
      </View>
      {/* )} */}
    </>
  );
};

const styleLocal = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  pict: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemWrapper: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemTextWrapper: {
    marginLeft: 10,
  },
});

export default History;
