import {StyleSheet} from 'react-native';

export const ListImageStyles = StyleSheet.create({
  itemContainerLeft: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  itemContainerRight: {
    flex: 1,
    backgroundColor: 'white',
    transform: [{rotateY: '180deg'}],
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imageActive: {
    height: 300,
    width: 180,
  },
  imageInactive: {
    height: 100,
    width: 66,
  },
  imageActiveContainer: {
    height: 300,
  },
  imageInactiveContainer: {
    height: 120,
    marginTop: 20,
    opacity: 0.3,
    backgroundColor: 'white',
  },
  textContainer: {
    height: 40,
    width: '100%',
  },
  textName: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  textPrice: {
    fontSize: 14,
    color: 'grey',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  buttonLeft: {
    alignSelf: 'center',
  },
  buttonRight: {
    alignSelf: 'center',
    transform: [{rotateY: '180deg'}],
  },
});
