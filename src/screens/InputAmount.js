import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardReceiver from '../components/CardReceiver';
import { Box, Button, Input, Stack, Center } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputAmount = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerHome}>
        <View style={[styles.marTop100, styles.padHor10]}>
          <CardReceiver />
        </View>
      </View>
      <Box alignItems="center" style={styles.marTop20}>
        <Input
          textAlign={'center'}
          style={[styles.fs42px]}
          variant="unstyled"
          placeholder="0.00"
        />
      </Box>
      <Center>
        <Text style={[styles.textBlack, styles.fs16px]}>
          Rp120.000 Available
        </Text>
      </Center>
      <View style={[styles.padHor10, styles.marTop50]}>
        <Input
          style={styles.fs16px}
          variant="underlined"
          placeholder="Add some notes"
        />
      </View>
      <View style={[styles.padHor10]}>
        <Button
          onPress={() => navigation.navigate('Confirmation')}
          size={'lg'}
          style={[styles.bgPrimary, styles.marTop50]}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default InputAmount;