import React from 'react';
import {observer} from 'mobx-react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {ListImageStyles} from './ListImageStyles';
import PiccaStore from '../store/Store';
import {ListImageInactive} from './ListImageInactive';

export const ListImage = observer(({type}: {type: 'left' | 'right'}) => {
  let {
    initialData,
    leftCurrentIndex,
    rightCurrentIndex,
    rightIndexAdd,
    leftIndexAdd,
    leftIndexRemove,
    rightIndexRemove,
  } = PiccaStore;

  const nextPicca = () => {
    type === 'left'
      ? [leftCurrentIndex < 5 && leftIndexAdd()]
      : [rightCurrentIndex < 5 && rightIndexAdd()];
  };

  const prevPicca = () => {
    type === 'left'
      ? [leftCurrentIndex >= 1 && leftIndexRemove()]
      : [rightCurrentIndex >= 1 && rightIndexRemove()];
  };

  const onSwipe = (direction: 'SWIPE_UP' | 'SWIPE_DOWN') => {
    if (direction === 'SWIPE_UP') {
      type === 'left'
        ? [leftCurrentIndex < 5 && leftIndexAdd()]
        : [rightCurrentIndex < 5 && rightIndexAdd()];
    } else if (direction === 'SWIPE_DOWN') {
      type === 'left'
        ? [leftCurrentIndex >= 1 && leftIndexRemove()]
        : [rightCurrentIndex >= 1 && rightIndexRemove()];
    }
  };

  const config = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 50,
  };

  return (
    <View
      style={
        type === 'left'
          ? ListImageStyles.itemContainerLeft
          : ListImageStyles.itemContainerRight
      }>
      <Button
        title={'prev'}
        type="clear"
        titleStyle={{color: 'black'}}
        onPress={prevPicca}
        containerStyle={
          type === 'left'
            ? ListImageStyles.buttonLeft
            : ListImageStyles.buttonRight
        }
        disabled={
          type === 'left'
            ? leftCurrentIndex === 0 && true
            : rightCurrentIndex === 0 && true
        }
      />
      <ListImageInactive type={type} position={'up'} />
      <View style={ListImageStyles.textContainer}>
        {leftCurrentIndex !== rightCurrentIndex && (
          <>
            <Text
              style={[
                ListImageStyles.textName,
                {
                  transform: [{rotateY: type === 'right' ? '180deg' : '0deg'}],
                },
              ]}>
              {type === 'left'
                ? initialData[leftCurrentIndex].name
                : initialData[rightCurrentIndex].name}
            </Text>
            <Text
              style={[
                ListImageStyles.textPrice,
                {
                  transform: [{rotateY: type === 'right' ? '180deg' : '0deg'}],
                },
              ]}>
              {type === 'left'
                ? initialData[leftCurrentIndex].price
                : initialData[rightCurrentIndex].price}{' '}
              P
            </Text>
          </>
        )}
      </View>
      <View style={ListImageStyles.imageActiveContainer}>
        {type === 'left' ? (
          <Image
            source={initialData[leftCurrentIndex].image}
            style={ListImageStyles.imageActive}
            resizeMode={'cover'}
            key={leftCurrentIndex.toString()}
          />
        ) : (
          <Image
            source={initialData[rightCurrentIndex].image}
            style={ListImageStyles.imageActive}
            resizeMode={'cover'}
            key={rightCurrentIndex.toString()}
          />
        )}
      </View>
      <ListImageInactive type={type} position={'down'} />
      <Button
        title={'next'}
        type="clear"
        onPress={nextPicca}
        titleStyle={{color: 'black'}}
        containerStyle={
          type === 'left'
            ? ListImageStyles.buttonLeft
            : ListImageStyles.buttonRight
        }
        disabled={
          type === 'left'
            ? leftCurrentIndex === 5 && true
            : rightCurrentIndex === 5 && true
        }
      />
    </View>
  );
});
