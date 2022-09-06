import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/global';
import { Flex, Input, ScrollView, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardTransaction from '../components/cardTransaction';

const SearchReceiver = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <VStack w="90%" space={5} alignSelf="center" style={styles.padVer120}>
          <Input
            style={styles.textWhite}
            placeholder="Search receiver here"
            width="100%"
            borderRadius="4"
            py="3"
            px="1"
            fontSize="18"
          // InputLeftElement={
          //   <Icon m="2" ml="3" size="6" color="gray.400" name="search" />
          // }
          />
        </VStack>
      </View>
      <ScrollView>
        <View style={[styles.padHor10]}>
          <Flex direction="row" justifyContent={'space-between'}>
            <View>
              <Text
                style={[
                  styles.textBlack,
                  styles.fs18px,
                  styles.fwBold,
                  styles.marTop30,
                  styles.marBot10,
                ]}>
                Contacts
              </Text>
              <Text style={[styles.textBlack, styles.fs14px]}>
                17 Contact Founds
              </Text>
            </View>
          </Flex>
        </View>
        <View style={[styles.padHor10, styles.marTop30]}>
          <TouchableOpacity onPress={() => navigation.navigate('InputAmount')}>
            <CardTransaction />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InputAmount')}>
            <CardTransaction />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InputAmount')}>
            <CardTransaction />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InputAmount')}>
            <CardTransaction />
          </TouchableOpacity>
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
          <CardTransaction />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchReceiver;