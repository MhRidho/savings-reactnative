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

const PersonalInformation = ({ navigation }) => (
  <View style={styles.wrapper}>
    <ScrollView style={styles.content}>
      <View style={[styles.marTop50]}>
        <Text style={[styles.textCenter, styles.fs16px]}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
      </View>
      <View style={[styles.marTop50, styles.marBot10]}>
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
                <Text style={styles.textWhite}>First Name</Text>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Robert
                </Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
      <View style={[styles.marBot10]}>
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
                <Text style={styles.textWhite}>Last Name</Text>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  Chandler
                </Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
      <View style={[styles.marBot10]}>
        <Box
          rounded="lg"
          width="100%"
          bg={SECONDARY_COLOR}
          p="4"
          shadow={2}
          _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
          style={styles.marBot10}>
          <Flex direction="row">
            <View style={styles.flexRow}>
              <View style={[styles.jCenter]}>
                <Text style={styles.textWhite}>Verified E-mail</Text>
                <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                  pewdiepie1@gmail.com
                </Text>
              </View>
            </View>
          </Flex>
        </Box>
      </View>
      <View style={[styles.marBot10]}>
        <Box
          rounded="lg"
          width="100%"
          bg={SECONDARY_COLOR}
          p="4"
          shadow={2}
          _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }} style={styles.marBot10}>

          <Flex direction="row" justifyContent={'space-between'}>
            <View style={[styles.jCenter]}>
              <Text style={styles.textWhite}>Phone Number</Text>
              <Text style={[styles.fs16px, styles.fwBold, styles.textWhite]}>
                +62 813-9387-7946
              </Text>
            </View>
            <View style={styles.alignCenter}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ManagePhoneNumber')}>
                <Text style={styles.textWhite}>Manage</Text>
              </TouchableOpacity>
            </View>
          </Flex>
        </Box>
      </View>
    </ScrollView>
    {/* <View style={styles.footer} /> */}
  </View>
);

export default PersonalInformation;
