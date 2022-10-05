import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Profile1 from '../assets/profile1.png';
import styles from '../styles/global';
import { SECONDARY_COLOR } from '../styles/constant';
import { PRIMARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack, FlatList } from 'native-base';

const CardTransfer = ({ item }) => {
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
                  {item.fullname}
                </Text>
                <Text style={[styles.textWhite]}>{item.phonenumber}</Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
    </>
  );
};

export default CardTransfer;
