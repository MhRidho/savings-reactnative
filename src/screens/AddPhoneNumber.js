import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardConfirmation from '../components/CardConfirmation';
import CardReceiver from '../components/CardReceiver';
import Input from '../components/Input';
import { PRIMARY_COLOR } from '../styles/constant';
import { Flex } from 'native-base';

const AddPhoneNumber = ({ navigation }) => {
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        <View style={styles.marTop50}>
          <Text style={[styles.textBlack, styles.textCenter, styles.fs16px]}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
        <View style={styles.marTop50}>
          <Flex
            direction="row"
            alignItems={'center'}
            marginLeft={5}
            style={styles.fs16px}>
            <View style={[styles.alignCenter, styles.padHor10]}>
              <Icon name="phone" size={20} color={PRIMARY_COLOR} />
            </View>
            <View style={styleLocal.inputWrapper}>
              <TextInput
                style={[styles.textBlack, styles.fs16px]}
                placeholder="Enter your phone number"
              />
            </View>
          </Flex>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.marBot20}
            onPress={() => navigation.navigate('PinSuccess')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View style={styles.footer} /> */}
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
  bgBlack: {
    backgroundColor: 'black',
  },
});

export default AddPhoneNumber;
