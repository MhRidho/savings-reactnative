import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Profile1 from '../assets/profile1.png';
import Profile2 from '../assets/profile2.png';
import Spotify from '../assets/spotify.png';
import Netflix from '../assets/netflix.png';
import styles from '../styles/global';
import { SECONDARY_COLOR } from '../styles/constant';
import { PRIMARY_COLOR } from '../styles/constant';
import { Box, Button, Flex, Center, VStack, FlatList } from 'native-base';


const CardTransaction = () => {
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
              <Image source={Profile1} />
              <View style={[styles.padHor10, styles.jCenter]}>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Samuel Suhi
                </Text>
                <Text style={[styles.textWhite]}>+62 813-8492-9994</Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
    </>
  );
};

export default CardTransaction;