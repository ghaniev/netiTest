import {observer} from 'mobx-react-lite';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {ListImage} from '../list/ListImage';
import PiccaStore from '../store/Store';
import {MainScreenStyles} from './MainScreenStyles';

export const MainScreen = observer(() => {
  var {
    randomPicca,
    totalPrice,
    leftCurrentIndex,
    rightCurrentIndex,
    initialData,
  } = PiccaStore;

  return (
    <>
      <View style={MainScreenStyles.container}>
        <ListImage type={'left'} />
        <View style={MainScreenStyles.divider} />
        <ListImage type={'right'} />
        {leftCurrentIndex === rightCurrentIndex && (
          <View style={MainScreenStyles.textContainer}>
            <Text style={MainScreenStyles.textName}>
              {initialData[leftCurrentIndex].name}
            </Text>
            <Text style={MainScreenStyles.textPrice}>
              {initialData[leftCurrentIndex].price} P
            </Text>
          </View>
        )}
        <Pressable
          onPress={randomPicca}
          style={MainScreenStyles.randomContainer}>
          <Image
            source={require('../../assets/img/dice.png')}
            style={MainScreenStyles.randomIcon}
          />
        </Pressable>
      </View>
      <View style={MainScreenStyles.textTotalContainer}>
        <Text style={MainScreenStyles.textTotal}>Цена {totalPrice} P</Text>
      </View>
    </>
  );
});
