import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import styles from '../styles/global';
import { Flex, Input, ScrollView, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardTransfer from '../components/CardTransfer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProfiles } from '../redux/asyncActions/profile';
import { useEffect } from 'react';
import { getName, getPhone, getUserIdTransfer } from '../redux/reducers/transaction';

const SearchReceiver = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const allprofile = useSelector(state => state.profile.value);
  const totalData = allprofile.pageInfo?.totalData;

  const NextData = item => {
    dispatch(getName(item.fullname));
    dispatch(getPhone(item.phonenumber));
    dispatch(getUserIdTransfer(item.user_id));
    navigation.navigate('InputAmount');
  };

  useEffect(() => {
    dispatch(getAllProfiles(token));
  }, []);

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
          />
        </VStack>
      </View>
      <View>
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
                {totalData} Contact Founds
              </Text>
            </View>
          </Flex>
        </View>
        <View style={[styles.padHor10, styles.marTop30]}>
          <TouchableOpacity />
          {allprofile ? (
            <FlatList
              data={allprofile.results}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => NextData(item)}>
                  <CardTransfer item={item} />
                </TouchableOpacity>
              )}
            />
          ) : (
            <FlatList
              data={allprofile.results}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <CardTransfer />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchReceiver;
