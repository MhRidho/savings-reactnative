import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardConfirmation from '../components/CardConfirmation';
import CardReceiver from '../components/CardReceiver';
import Input from '../components/Input';

const ChangePassword = ({ navigation }) => {
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        <View style={styles.marTop50}>
          <Text style={[styles.textBlack, styles.textCenter]}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
        <View style={[styles.marTop50]}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Enter your password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={[styles.marTop50]}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Enter your password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={[styles.marTop50]}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Enter your password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={[styles.buttonWrapper, styles.marBot20]}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Change Password</Text>
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

export default ChangePassword;
