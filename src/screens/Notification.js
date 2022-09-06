import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/global';
import { Flex, Input, ScrollView, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardManagePhone from '../components/CardManagePhone';

const Notification = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={[styles.padHor10, styles.marTop50, styles.fs16px]}>
          <Flex direction='row' alignContent={'center'}>
            <View>
              <Text
                style={[styles.textBlack, styles.fs14px, styles.textCenter]}>
                You can only delete the phone number and then you must add another phone number.
              </Text>
            </View>
          </Flex>
        </View>
        <View style={[styles.padHor10, styles.marTop30]}>
          <TouchableOpacity>
            <CardManagePhone />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;