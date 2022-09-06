import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import { SECONDARY_COLOR } from '../styles/constant';
import { PRIMARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack, FlatList } from 'native-base';


const CardConfirmation = () => {
  return (
    <>
      <View>
        <Box
          rounded="lg"
          width="100%"
          bg={SECONDARY_COLOR}
          p="4"
          shadow={2}
          _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }} style={styles.marBot10}>

          <Flex direction="row">
            <View style={styles.flexRow}>
              <View style={[styles.jCenter]}>
                <Text style={styles.textWhite}>Amount</Text>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Rp100.000
                </Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
    </>
  );
};

export default CardConfirmation;