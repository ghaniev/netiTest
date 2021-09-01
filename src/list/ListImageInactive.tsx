import React from 'react';
import {Image, View} from 'react-native';
import PiccaStore from '../store/Store';
import {ListImageStyles} from './ListImageStyles';

export const ListImageInactive = ({
  type,
  position,
}: {
  type: 'left' | 'right';
  position: 'up' | 'down';
}) => {
  let {initialData, leftCurrentIndex, rightCurrentIndex} = PiccaStore;
  return (
    <View style={ListImageStyles.imageInactiveContainer}>
      {position === 'up'
        ? [
            type === 'left'
              ? [
                  leftCurrentIndex >= 1 && (
                    <Image
                      source={initialData[leftCurrentIndex - 1].image}
                      style={ListImageStyles.imageInactive}
                      resizeMode={'cover'}
                      key={initialData[leftCurrentIndex - 1].id.toString()}
                    />
                  ),
                ]
              : [
                  rightCurrentIndex >= 1 && (
                    <Image
                      source={initialData[rightCurrentIndex - 1].image}
                      style={ListImageStyles.imageInactive}
                      resizeMode={'cover'}
                      key={initialData[rightCurrentIndex - 1].id.toString()}
                    />
                  ),
                ],
          ]
        : [
            type === 'left'
              ? [
                  leftCurrentIndex < 5 && (
                    <Image
                      source={initialData[leftCurrentIndex + 1].image}
                      style={ListImageStyles.imageInactive}
                      resizeMode={'cover'}
                      key={initialData[leftCurrentIndex + 1].id.toString()}
                    />
                  ),
                ]
              : [
                  rightCurrentIndex < 5 && (
                    <Image
                      source={initialData[rightCurrentIndex + 1].image}
                      style={ListImageStyles.imageInactive}
                      resizeMode={'cover'}
                      key={initialData[rightCurrentIndex + 1].id.toString()}
                    />
                  ),
                ],
          ]}
    </View>
  );
};
