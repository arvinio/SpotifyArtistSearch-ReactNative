import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  Image,
  View
} from 'react-native';

import clrs from '../utils/clrs'

const placeholder = require('../assets/placeholder.png')
const imgBorderRadius = 20;

const ListRow = ({text, cover}) => {
  const imageUrl = cover ? {uri : cover} : placeholder

  return (
    <TouchableNativeFeedback
      underlayColor={clrs.gray}>

      <View style={styles.mediaObject}>
        <Image source={imageUrl} style={styles.image}/>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default ListRow;

const styles = StyleSheet.create({
  mediaObject: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15,
    },
  text: {
    color: clrs.white,
    fontSize: 20,
    fontWeight: '200',
    flex: 1,
    flexDirection: 'column',
    //lineHeight: 35,
    textAlignVertical: 'center',
    //alignItems: 'center'
  },
  image: {
    backgroundColor: clrs.gray,
    marginRight: 16,
    width: 40,
    height: 40,
    borderBottomLeftRadius: imgBorderRadius,
    borderBottomRightRadius: imgBorderRadius,
    borderTopLeftRadius: imgBorderRadius,
    borderTopRightRadius: imgBorderRadius,
  },
})
