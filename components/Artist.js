import React, { Component } from 'react';
import {
  StyleSheet,
  WebView,
  View,
  Platform
} from 'react-native';

import clrs from '../utils/clrs'

export default class Artist extends Component {
  
  render(){
    return (
      <View style={styles.artistView}>
        <WebView
          style={{flex: 1}}
          source={{
            uri: this.props.url,
            method: 'GET'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  artistView: {
    backgroundColor: clrs.white,
    borderLeftColor: clrs.black,
    borderLeftWidth: 1,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 54
  }
})