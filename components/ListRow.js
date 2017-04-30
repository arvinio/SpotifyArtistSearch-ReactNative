import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  Image,
  View
} from 'react-native';

import clrs from '../utils/clrs'
import FadeInView from './FadeInView'

const placeholder = require('../assets/placeholder.png')
const imgBorderRadius = 20;

export default class ListRow extends Component{
  constructor(props){
    super(props)
  }
  
  onSelectRow = () => alert(this.props.text + " Selected")


  render(){
    const cover = this.props.cover
    const index = this.props.index
    const imageUrl = cover ? {uri : cover} : placeholder
    
    return (
      <FadeInView delay={index * 35}>
        <TouchableNativeFeedback
          underlayColor={clrs.gray}
          onPress={this.onSelectRow}>

            <View index={this.props.rId} style={styles.mediaObject}>
              <Image source={imageUrl} style={styles.image}/>
              <Text style={styles.text}>{this.props.text}</Text>
            </View>
        </TouchableNativeFeedback>
      </FadeInView>
    )
  }
}

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
