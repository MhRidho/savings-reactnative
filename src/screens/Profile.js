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
import Prof80 from '../assets/prof80.png';
import CardReceiver from '../components/CardReceiver';
import { Box, Flex, Switch } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { SECONDARY_COLOR } from '../styles/constant';

const Profile = ({ navigation }) => (
  <View style={styles.wrapper}>
    <ScrollView style={styles.content}>
      <View style={styles.textHeader}>
        <Image source={Prof80} style={[styleLocal.flex]} />
      </View>
      <View>
        <Text style={[styles.textBlack, styles.textCenter, styles.fs16px]}>
          <Icon style={[styles.textBlack, styles.marRight10]} name="edit-2" />
          Edit
        </Text>
      </View>
      <View style={[styles.marTop20]}>
        <Text
          style={[
            styles.textBlack,
            styles.fwBold,
            styles.fs24px,
            styles.textCenter,
          ]}>
          Robert Chandler
        </Text>
      </View>
      <View style={[styles.marTop10]}>
        <Text style={[styles.textBlack, styles.textCenter, styles.fs16px]}>
          +62 813-9387-7946
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
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
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
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
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
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
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
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
