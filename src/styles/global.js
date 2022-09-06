import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARY_COLOR } from './constant';
import { SECONDARY_COLOR } from './constant';
import { TERNIARY_COLOR } from './constant';

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height - 70,
  },
  header: {
    height: Dimensions.get('screen').width / 2,
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  headerHome: {
    height: Dimensions.get('screen').width / 2,
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    marginBottom: 20,
  },
  textHeader: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  footer: {
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
  fs14px: {
    fontSize: 14,
  },
  fs16px: {
    fontSize: 16,
  },

  fs18px: {
    fontSize: 18,
  },
  fs22px: {
    fontSize: 22,
  },
  fs24px: {
    fontSize: 24,
  },
  fs42px: {
    fontSize: 42,
  },
  fwBold: {
    fontWeight: 'bold',
  },
  textBlack: {
    color: 'black',
  },
  textWhite: {
    color: 'white',
  },
  marBot10: {
    marginBottom: 10,
  },
  marBot20: {
    marginBottom: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  marTop10: {
    marginTop: 10,
  },
  marTop20: {
    marginTop: 20,
  },
  marTop30: {
    marginTop: 30,
  },
  marTop50: {
    marginTop: 50,
  },
  marTop100: {
    marginTop: 100,
  },
  padHor10: {
    paddingHorizontal: 10,
  },
  padVer20: {
    paddingVertical: 20,
  },
  padVer80: {
    paddingVertical: 80,
  },
  padVer120: {
    paddingVertical: 120,
  },
  flexRow: {
    flexDirection: 'row',
  },
  color7858A6: {
    color: '#7858A6',
  },
  jCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  bgPrimary: {
    backgroundColor: PRIMARY_COLOR,
  },
  colorPrimary: {
    color: PRIMARY_COLOR,
  },
  marRight10: {
    marginRight: 10,
  },
});

export default styles;
