import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import PinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';

import styles from '../styles/global';
import { PRIMARY_COLOR } from '../styles/constant';
import ButtonSavings from '../components/ButtonSavings';
import { useDispatch, useSelector } from 'react-redux';
import { createPin } from '../redux/asyncActions/auth';
import { unsetMsg } from '../redux/reducers/auth';

const FormPin = ({ handleSubmit, setEnteredPin }) => {
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const pinView = useRef(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <View>
        <PinView
          inputSize={32}
          ref={pinView}
          pinLength={6}
          onValueChange={value => setEnteredPin(value)}
          buttonTextStyle={styleLocal.textBlack}
          showInputText={show}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: 'transparent',
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
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              setShow(!show);
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
        <ButtonSavings action={handleSubmit} title="submit" text="Confirm" />
      </View>
    </>
  );
};

const CreatePin = ({ navigation }) => {
  const [enteredPin, setEnteredPin] = useState('');

  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.email);
  const successMsg = useSelector(state => state.auth.successMsg);

  const onPin = () => {
    const data = { email, enteredPin: enteredPin };
    dispatch(createPin(data));
  };

  useEffect(() => {
    dispatch(unsetMsg());
    if (successMsg) {
      navigation.navigate('PinSuccess');
    }
  }, [navigation, successMsg]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header} />
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Text style={[styles.textBlack, styles.fs24px, styles.fwBold]}>
            Create Security PIN
          </Text>
          <Text
            style={[styles.textBlack, styles.fs16px, styleLocal.textCenter]}>
            Create a PIN that's contain 6 digits number for security purpose in
            Savings.
          </Text>
        </View>
        <Formik initialValues={{ enteredPin: enteredPin }} onSubmit={onPin}>
          {props => (
            <FormPin
              {...props}
              setEnteredPin={setEnteredPin}
              enteredPin={enteredPin}
            />
          )}
        </Formik>
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
  textCenter: {
    textAlign: 'center',
  },
});

export default CreatePin;
