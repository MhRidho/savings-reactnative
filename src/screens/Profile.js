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
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  Switch,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { SECONDARY_COLOR } from '../styles/constant';
import { logout } from '../redux/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { resetMsg } from '../redux/reducers/profile';
import { useEffect } from 'react';
import { updateProfile, uploadFoto } from '../redux/asyncActions/profile';
import { getProfileLogin } from '../redux/asyncActions/profile';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Formik } from 'formik';

const FormEdit = ({ handleChange, handleSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const profile = useSelector(state => state.profile.data);
  return (
    <>
      <Modal.Body>
        <FormControl>
          <Box alignItems="center" style={styles.marTop20}>
            <Input
              onChangeText={handleChange('fullname')}
              textAlign={'center'}
              style={[styles.fs24px]}
              variant="unstyled"
              placeholder={profile ? profile.fullname : 'no name'}
            />
          </Box>
          <Box alignItems="center">
            <Input
              onChangeText={handleChange('phonenumber')}
              textAlign={'center'}
              style={[styles.fs22px]}
              variant="unstyled"
              placeholder={profile ? profile.phonenumber : 'no number'}
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
          <Button onPress={handleSubmit}>Edit</Button>
        </Button.Group>
      </Modal.Footer>
    </>
  );
};

const CardProfile = ({ navigation, text, action }) => {
  return (
    <>
      <View style={[styles.padHor10, styles.marBot10]}>
        <TouchableOpacity onPress={action}>
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
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  {text}
                </Text>
              </View>
              {text === 'Notification' ? (
                <View>
                  <Switch size="sm" />
                </View>
              ) : (
                <View>
                  <Icon
                    style={[styles.fs16px, styles.textWhite]}
                    name="arrow-right"
                  />
                </View>
              )}
            </Flex>
          </Box>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Profile = ({ navigation }) => {
  const [picture, setPicture] = useState('');
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);

  const successMsg = useSelector(state => state.profile.successMsg);

  const logoutProfile = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const upload = async type => {
    try {
      const data = type
        ? await launchImageLibrary()
        : await launchCamera({
          maxHeight: 400,
          maxWidth: 300,
        });
      const foto = data.assets[0];
      if (foto.fileSize > 1000 * 1000) {
        setWarning(true);
      } else {
        setWarning(false);
        setPicture(foto);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = val => {
    if (picture) {
      const request = {
        uri: picture.uri,
        name: picture.fileName,
        type: picture.type,
      };
      dispatch(uploadFoto({ token, request }));
    } else {
      const request = {
        fullname: val.fullname,
        phonenumber: val.phonenumber,
      };
      dispatch(updateProfile({ token, request }));
    }
  };

  useEffect(() => {
    if (successMsg) {
      setWarning(false);
      dispatch(resetMsg());
      dispatch(getProfileLogin(token));
      setShowModal(false);
    }
  }, [dispatch, successMsg, token]);

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        {successMsg && <Text>{successMsg}</Text>}
        {warning && (
          <Text style={styleLocal.warning}>Filesize must under 1 MB</Text>
        )}

        {picture ? (
          <View style={styles.textHeader}>
            <Image
              style={[styleLocal.flex]}
              source={{
                uri: picture.uri,
                width: 100,
                height: 100,
              }}
            />
          </View>
        ) : (
          <View style={styles.textHeader}>
            <Image
              source={{
                uri: profile?.picture ? profile.picture : Prof80,
                width: 80,
                height: 80,
              }}
              style={[styleLocal.flex]}
            />
          </View>
        )}

        <View style={[styleLocal.pickerCam, styles.textHeader]}>
          <TouchableOpacity onPress={() => upload(true)}>
            <Icon style={styleLocal.icon} name="folder" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => upload(false)}>
            <Icon style={styleLocal.icon} name="camera" size={25} />
          </TouchableOpacity>
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
            <Modal.Header>Edit Profile</Modal.Header>
            <Formik
              initialValues={{
                fullname: profile?.fullname ? profile.fullname : 'Your Name',
                phonenumber: profile?.phonenumber
                  ? profile.phonenumber
                  : 'Your Number',
              }}
              onSubmit={onEdit}>
              {props => <FormEdit {...props} />}
            </Formik>
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
            {profile ? profile.fullname : 'no name'}
          </Text>
        </View>
        <View style={[styles.marTop10, styles.marBot10]}>
          <Text style={[styles.textBlack, styles.textCenter, styles.fs16px]}>
            {profile ? profile.phonenumber : 'no number'}
          </Text>
        </View>

        <CardProfile
          text="Personal Information"
          action={() => navigation.navigate('PersonalInformation')}
        />
        <CardProfile
          text="Change Password"
          action={() => navigation.navigate('ChangePassword')}
        />
        <CardProfile
          text="Change PIN"
          action={() => navigation.navigate('ChangePin')}
        />
        <CardProfile
          text="Notification"
          action={() => navigation.navigate('Notification')}
        />
        <CardProfile text="Logout" action={logoutProfile} />
      </ScrollView>
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
  warning: {
    backgroundColor: 'yellow',
  },
  icon: {
    marginHorizontal: 20,
  },
  pickerCam: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Profile;
