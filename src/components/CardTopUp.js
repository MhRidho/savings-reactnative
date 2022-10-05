import { View, Text, } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import { SECONDARY_COLOR } from '../styles/constant';
import { Box, Flex } from 'native-base';

const CardTopUp = ({ item }) => {
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
              <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                {item.no}
              </Text>
              <View style={[styles.padHor10, styles.jCenter]}>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  {item.ket}
                </Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
    </>
  );
};

export default CardTopUp;
