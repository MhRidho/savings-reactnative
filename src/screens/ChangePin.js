import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import ReactNativePinView from 'react-native-pin-view';

import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardConfirmation from '../components/CardConfirmation';
import CardReceiver from '../components/CardReceiver';
import Input from '../components/Input';
import { PRIMARY_COLOR } from '../styles/constant';

const ChangePin = ({ navigation }) => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        <View style={[styles.textHeader, styles.marTop50]}>
          <Text
            style={[styles.textBlack, styles.fs16px, styleLocal.textCenter]}>
            Enter your current 6 digits Zwallet PIN below to continue to the next steps.
          </Text>
        </View>

        <View>
          <ReactNativePinView
            inputSize={32}
            ref={pinView}
            pinLength={6}
            onValueChange={value => setEnteredPin(value)}
            buttonTextStyle={styleLocal.textBlack}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: PRIMARY_COLOR,
            }}
            inputViewFilledStyle={{
              backgroundColor: PRIMARY_COLOR,
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: PRIMARY_COLOR,
            }}
            buttonTextStyle={{
              color: PRIMARY_COLOR,
            }}
            onButtonPress={key => {
              if (key === 'custom_left') {
                pinView.current.clear()
              }
              if (key === 'custom_right') {
                alert('Entered Pin: ' + enteredPin)
              }
            }}
            customLeftButton={
              showRemoveButton ? (
                <Icon name={'remove'} size={36} color={PRIMARY_COLOR} />
              ) : undefined
            }
            customRightButton={
              showCompletedButton ? (
                <Text style={[styles.textBlack, styles.fwBold, styles.fs24px]}>
                  OK
                </Text>
              ) : undefined
            }
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.marBot20}
            onPress={() => navigation.navigate('PinSuccess')}>
            <View style={[styles.button, styles.text]}>
              <Text style={styles.buttonText}>Continue</Text>
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

export default ChangePin;
