import React, { Component } from 'react';
import Main from './Main'
import Artist from './Artist'
import {Router, Scene} from 'react-native-router-flux'
import clrs from '../utils/clrs'
import {StyleSheet} from 'react-native';

export default class Root extends Component{
  render() {
    //
    return(
      <Router navigationBarStyle={styles.navBar}>
        <Scene key='root'>
          <Scene key='main' component={Main} hideNavBar={true} title='Spotify Artists' />
          <Scene key='artist' component={Artist} hideNavBar={false} title='Artist Page' />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: clrs.gray,
  },
})