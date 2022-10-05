import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Prof80 from '../assets/prof80.png';
import { Box, Button, Flex, FormControl, Input, Modal, Switch } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { SECONDARY_COLOR } from '../styles/constant';
import { logout } from '../redux/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { resetMsg } from '../redux/reducers/profile';
import { useEffect } from 'react';
import { updateProfile } from '../redux/asyncActions/profile';
import { getProfileLogin } from '../redux/asyncActions/profile';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);

  const successMsg = useSelector(state => state.profile.successMsg);
  const errorMsg = useSelector(state => state.profile.errorMsg);

  const onEdit = () => {
    const request = { fullname, phonenumber }
    dispatch(updateProfile({ token, request }));
  };

  useEffect(() => {
    if (successMsg) {
      dispatch(resetMsg());
      dispatch(getProfileLogin(token));
      setShowModal(false);
    }
  }, [successMsg]);

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        <View style={styles.textHeader}>
          <Image source={Prof80} style={[styleLocal.flex]} />
        </View>
        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
          <Text style={[styles.textBlack, styles.textCenter, styles.fs16px]}>
            <Icon style={[styles.textBlack, styles.marRight10]} name="edit-2" />
            Edit
          </Text>
        </TouchableOpacity>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Input Amount</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Amount</FormControl.Label>
                <Box alignItems="center" style={styles.marTop20}>
                  <Input
                    name="fullname"
                    value={fullname}
                    onChangeText={setFullname}
                    textAlign={'center'}
                    style={[styles.fs24px]}
                    variant="unstyled"
                    placeholder={profile.fullname || 'no name'}
                    keyboardType="text"
                  />
                </Box>
                <Box alignItems="center">
                  <Input
                    name="phone"
                    value={phonenumber}
                    onChangeText={setPhonenumber}
                    textAlign={'center'}
                    style={[styles.fs22px]}
                    variant="unstyled"
                    placeholder={profile.phonenumber || 'no number'}
                    keyboardType="text"
                  />
                </Box>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(!showModal);
                  }}>
                  Cancel
                </Button>
                <Button onPress={() => onEdit()}>Edit</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <View style={[styles.marTop20]}>
          <Text
            style={[
              styles.textBlack,
              styles.fwBold,
              styles.fs24px,
              styles.textCenter,
            ]}>
            {profile.fullname || 'no name'}
          </Text>
        </View>
        <View style={[styles.marTop10]}>
          <Text style={[styles.textBlack, styles.textCenter, styles.fs16px]}>
            {profile.phonenumber || 'no number'}
          </Text>
        </View>
        <View style={[styles.padHor10, styles.marTop50, styles.marBot10]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalInformation')}>
            <Box
              rounded="lg"
              width="100%"
              bg={SECONDARY_COLOR}
              p="4"
              shadow={2}
              _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
              style={styles.marBot10}>
              <Flex direction="row" justifyContent={'space-between'}>
                <View>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Personal Information
                  </Text>
                </View>
                <View>
                  <Icon
                    style={[styles.fs16px, styles.textWhite]}
                    name="arrow-right"
                  />
                </View>
              </Flex>
            </Box>
          </TouchableOpacity>
        </View>
        <View style={[styles.padHor10, styles.marBot10]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}>
            <Box
              rounded="lg"
              width="100%"
              bg={SECONDARY_COLOR}
              p="4"
              shadow={2}
              _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
              style={styles.marBot10}>
              <Flex direction="row" justifyContent={'space-between'}>
                <View>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Change Password
                  </Text>
                </View>
                <View>
                  <Icon
                    style={[styles.fs16px, styles.textWhite]}
                    name="arrow-right"
                  />
                </View>
              </Flex>
            </Box>
          </TouchableOpacity>
        </View>
        <View style={[styles.padHor10, styles.marBot10]}>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePin')}>
            <Box
              rounded="lg"
              width="100%"
              bg={SECONDARY_COLOR}
              p="4"
              shadow={2}
              _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
              style={styles.marBot10}>
              <Flex direction="row" justifyContent={'space-between'}>
                <View>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Change PIN
                  </Text>
                </View>
                <View>
                  <Icon
                    style={[styles.fs16px, styles.textWhite]}
                    name="arrow-right"
                  />
                </View>
              </Flex>
            </Box>
          </TouchableOpacity>
        </View>
        <View style={[styles.padHor10, styles.marBot10]}>
          <TouchableOpacity>
            <Box
              rounded="lg"
              width="100%"
              bg={SECONDARY_COLOR}
              p="4"
              shadow={2}
              _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
              style={styles.marBot10}>
              <Flex direction="row" justifyContent={'space-between'}>
                <View>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Notification
                  </Text>
                </View>
                <View>
                  <Switch size="sm" />
                </View>
              </Flex>
            </Box>
          </TouchableOpacity>
        </View>
        <View style={[styles.padHor10]}>
          <TouchableOpacity action={() => logoutProfile()}>
            <Box
              rounded="lg"
              width="100%"
              bg={SECONDARY_COLOR}
              p="4"
              shadow={2}
              _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
              style={styles.marBot10}>
              <Flex direction="row" justifyContent={'space-between'}>
                <View>
                  <Text
                    style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                    Logout
                  </Text>
                </View>
              </Flex>
            </Box>
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

export default Profile;
