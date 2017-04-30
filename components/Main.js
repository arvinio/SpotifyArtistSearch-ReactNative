import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  TextInput,
  ListView,
  Platform,
  Text,
  Button,
  View
} from 'react-native';

import clrs from '../utils/clrs'
import ListRow from './ListRow'

//TODO understand spread
import {searchFor} from '../utils/fetcher'


export default class Main extends Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    
    this.state = {
      query: dataSource,
      artists: dataSource,
    }
  }

  //(rowData, sectionID, rowID, highlightRow) => renderable
  renderRow = (artist, sId, rId) => {
    const image = artist.images.length ? artist.images[0].url : null

    return (
      <ListRow index={rId}
        text={artist.name}
        cover={image}
        url={artist.external_urls.spotify}
        navigation={this.props.navigation}
      />
    )
  }

  //TODO add item to list with push of button
  //onButtonClick = () => {this.data.push('NewItem')}
  //<Button onPress={onButtonClick} title='Add ListItem' color="#63625c"  />


  render() {

    //TODO understand updating ListView
    makeQuery = () => {
      searchFor(this.state.query)
        .then( (result) => this.setState({
          artists: this.state.artists.cloneWithRows(result)
        }))
        .catch( (err) => { console.error(err) } )
    };
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Spotify Artists</Text>
        <TextInput 
        underlineColorAndroid='transparent'
        placeholder="Search artists"
        onChangeText={(text) => this.setState({query: text})}
        onSubmitEditing={makeQuery} 
        style={styles.searchBox} />

        <ListView dataSource={this.state.artists} 
        style={styles.listView}
        renderRow={this.renderRow} />
      </View>
    );

  }

}

const styles = StyleSheet.create({
  title: {
    color: '#649704',
    padding: 10,
    fontSize: 35,
    fontWeight: '300',
    //lineHeight: 35,
    textAlign: 'center',
    //alignItems: 'center'
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch'
  },
  searchBox: {
    fontSize: 20,        
    height: 50,
    borderColor: 'black',
    borderWidth: 3.5,
    margin: 5,
    paddingLeft: 10,
    backgroundColor: '#F6F6F6'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: clrs.gray,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});