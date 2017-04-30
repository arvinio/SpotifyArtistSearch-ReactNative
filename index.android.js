/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import Root from './components/Root'
import Artist from './components/Artist'
import { StackNavigator } from 'react-navigation';

const Nav = StackNavigator({
  Home: {
    screen: Root,
    navigationOptions: {
      header: null
    }
  },
  Artist: {
    screen: Artist,
    title: 'Artist View'
  }
});


AppRegistry.registerComponent('spotifyArtistLookupRN', () => Nav);
